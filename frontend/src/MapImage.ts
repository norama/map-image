import { LitElement, html, css } from 'lit';

import { customElement, property } from 'lit/decorators.js';

import leafletStyles from './styles/leafletStyles';
import leafletSearchStyles from './styles/leafletSearchStyles';
import leafletSearchMobileStyles from './styles/leafletSearchMobileStyles';
import leafletModalStyles from './styles/leafletModalStyles';

import { Map as LeafletMap, Marker, LeafletMouseEvent, LatLng } from 'leaflet';

const L = window.L;

@customElement('map-image')
export class MapImage extends LitElement {
    @property({ type: String }) title = 'Map Image Admin';

    map?: LeafletMap;

    marker?: Marker;

    static mapStyles = css`
        div.map {
            width: 100vw;
            height: 100vh;
        }
    `;

    static styles = [
        leafletStyles,
        leafletSearchStyles,
        leafletSearchMobileStyles,
        leafletModalStyles,
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
            zoomControl: true,
            layers: [tileLayer],
            maxZoom: 18
        })
            .fitWorld()
            .setView([51.505, -0.09], 13);

        this.map.zoomControl.setPosition('topright');

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

        this.initMap();

        this.map.invalidateSize(false);
    }

    initMap() {
        this.map?.on('click', (event: LeafletMouseEvent) => {
            this.setMarker(event.latlng);
        });
    }

    setMarker(latlng: LatLng) {
        if (this.map) {
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
                        this.showModal();
                    });
            }
            this.showModal();
        }
    }

    showModal() {
        this.map?.fire('modal', {
            title: 'Custom header',
            content:
                '<ul>' + new Array(5).join('<li>Content line</li>') + '</ul>',
            template: [
                '<div class="modal-header"><h2>{title}</h2></div>',
                '<hr>',
                '<div class="modal-body">{content}</div>',
                '<div class="modal-footer">',
                '<button class="topcoat-button--large {OK_CLS}">{okText}</button>',
                '<button class="topcoat-button--large {CANCEL_CLS}">{cancelText}</button>',
                '</div>'
            ].join(''),

            okText: 'Ok',
            cancelText: 'Cancel',
            OK_CLS: 'modal-ok',
            CANCEL_CLS: 'modal-cancel',

            width: 300,

            onShow: function (evt: any) {
                var modal = evt.modal;
                L.DomEvent.on(
                    modal._container.querySelector('.modal-ok'),
                    'click',
                    function () {
                        alert('you pressed ok');
                        modal.hide();
                    }
                ).on(
                    modal._container.querySelector('.modal-cancel'),
                    'click',
                    function () {
                        alert('You pressed cancel');
                        modal.hide();
                    }
                );
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

const marker = (latlng: LatLng) =>
    L.marker(latlng, {
        icon: new L.Icon({
            iconUrl: './assets/search/marker-icon-blue.png',
            iconAnchor: new L.Point(12.5, 41),
            draggable: true
        })
    }).on('click', () => {
        alert('cc');
    });
