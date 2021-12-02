import { LitElement, html, css } from 'lit';

import { customElement } from 'lit/decorators.js';

import leafletStyles from './styles/leafletStyles';
import leafletSearchStyles from './styles/leafletSearchStyles';
import leafletSearchMobileStyles from './styles/leafletSearchMobileStyles';
import leafletModalStyles from './styles/leafletModalStyles';
import leafletModalCustomStyles from './styles/leafletModalCustomStyles';
import leafletLocateStyles from './styles/leafletLocateStyles';
import topcoatStyles from './styles/topcoatStyles';
import leafletSimpleButtonStyles from './styles/leafletSimpleButtonStyles';

import { MapImageController } from './control/MapImageController';

import { exifLatLng } from './util/exifGPS';

import {
    Map as LeafletMap,
    Marker,
    LayerGroup,
    LeafletMouseEvent,
    LatLng
} from 'leaflet';

const L = window.L;

@customElement('map-image')
export class MapImage extends LitElement {
    map?: LeafletMap;

    marker?: Marker;

    modal?: any;

    markersLayer?: LayerGroup;

    controller = new MapImageController(this);

    static mapStyles = css`
        div.map {
            width: 100vw;
            height: 100vh;
        }

        div.popup {
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
        }

        .markerIcon {
            opacity: 0.8;
        }
    `;

    static styles = [
        leafletStyles,
        leafletSearchStyles,
        leafletSearchMobileStyles,
        leafletModalStyles,
        leafletModalCustomStyles,
        topcoatStyles,
        leafletLocateStyles,
        leafletSimpleButtonStyles,
        MapImage.mapStyles
    ];

    createMap(mapElement: HTMLElement) {
        const tileLayer = L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                tileSize: 256,
                maxZoom: 18
            }
        );
        this.map = L.map(mapElement, {
            zoomControl: mapElement.clientWidth > 600,
            layers: [tileLayer],
            maxZoom: 18
        })
            .fitWorld()
            .setView([51.505, -0.09], 13);

        if (mapElement.clientWidth > 600) {
            this.map.zoomControl.setPosition('topright');
        }

        const searchControl = new (L.Control as any).Search({
            url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
            jsonpParam: 'json_callback',
            propertyName: 'display_name',
            propertyLoc: ['lat', 'lon'],
            marker: false,
            collapsed: false,
            autoCollapse: false,
            hideMarkerOnCollapse: true,
            autoType: false,
            minLength: 2
        });

        searchControl.on('search:locationfound', ({ latlng }: any) => {
            this.setMarker(latlng);
        });

        this.map.addControl(searchControl);

        const addImageButton = new (L.Control as any).SimpleButton({
            position: 'topleft',
            text: 'Add Image with GPS',
            click: (event: MouseEvent) => {
                event.stopPropagation();
                this.setMarker();
            }
        });
        addImageButton.addTo(this.map);

        (L.control as any)
            .locate({ drawCircle: false, drawMarker: false })
            .addTo(this.map);

        this.initMap();

        this.markersLayer = new L.LayerGroup().addTo(this.map);

        this.initMarkers();

        this.map.invalidateSize(false);
    }

    async initMarkers() {
        const markers = await this.controller.loadMarkers();

        markers.forEach((marker) => {
            this.addMapMarker(marker);
        });
    }

    addMapMarker(marker: TMarker) {
        const popup = L.popup()
            .setLatLng(marker.latlng)
            .setContent(
                `<div class="popup"><read-marker-content markerId='${marker.id}'></read-marker-content></div>`
            );

        const mapMarker = L.marker(marker.latlng, {
            icon: new L.Icon({
                iconUrl:
                    marker.content.emotion === true
                        ? './assets/marker/positive.png'
                        : './assets/marker/negative.png',
                iconAnchor: new L.Point(12, 12),
                popupAnchor: new L.Point(0, -16),
                className: 'markerIcon'
            })
        }).bindPopup(popup);

        this.markersLayer?.addLayer(mapMarker);

        mapMarker.openPopup();
    }

    initMap() {
        this.map?.on('click', (event: LeafletMouseEvent) => {
            if (this.modal) {
                this.modal.hide();
                this.modal = undefined;
            } else {
                this.setMarker(event.latlng);
            }
        });
    }

    setMarker(latlng?: LatLng) {
        if (this.map) {
            if (latlng) {
                if (this.marker) {
                    this.marker.setLatLng(latlng);
                } else {
                    this.marker = L.marker(latlng, {
                        icon: new L.Icon({
                            iconUrl: './assets/search/marker-icon-blue.png',
                            iconAnchor: new L.Point(12.5, 41),
                            draggable: true
                        })
                    })
                        .addTo(this.map)
                        .on('click', () => {
                            this.showModal(latlng);
                        });
                }
            }
            this.showModal(latlng);
        }
    }

    showModal(latlng?: LatLng) {
        this.map?.fire('modal', {
            title: 'Item',
            content: `<add-marker-content></add-marker-content>`,
            template: [
                '<div class="modal-header"><h2>{title}</h2></div>',
                '<hr>',
                '<div class="modal-body">{content}</div>',
                '<div class="modal-footer">',
                '<button class="topcoat-button--large {OK_CLS}">{okText}</button>',
                '</div>'
            ].join(''),

            okText: 'Add',
            OK_CLS: 'modal-ok',

            width: 350,

            onShow: (evt: any) => {
                const modal = evt.modal;
                this.modal = modal;
                L.DomEvent.on(
                    modal._container.querySelector('.modal-ok'),
                    'click',
                    async () => {
                        const element =
                            modal._container.querySelector(
                                'add-marker-content'
                            );
                        const content = element.content() as TContent;
                        this.modal.hide();
                        this.modal = undefined;

                        if (!latlng && content.image) {
                            latlng = await exifLatLng(content.image);
                            if (latlng) {
                                this.map?.flyTo(latlng);
                            }
                        }

                        if (latlng) {
                            const marker = await this.controller.addMarker(
                                latlng,
                                content
                            );
                            this.addMapMarker(marker);
                            this.marker?.remove();
                            this.marker = undefined;
                        } else {
                            alert('Could not add marker: no GPS location.');
                        }
                    }
                ).on(modal._container.querySelector('.close'), 'click', () => {
                    this.modal = undefined;
                });
            }
        });
    }

    firstUpdated() {
        const mapElement = this.renderRoot.querySelector('div');
        if (mapElement) {
            this.createMap(mapElement);
        }
    }

    render() {
        return html` <div class="map"></div> `;
    }
}
