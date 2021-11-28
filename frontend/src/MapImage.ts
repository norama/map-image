import { LitElement, html, css } from 'lit';

import { customElement, property } from 'lit/decorators.js';

import leafletStyles from './styles/leafletStyles';
import leafletSearchStyles from './styles/leafletSearchStyles';
import leafletSearchMobileStyles from './styles/leafletSearchMobileStyles';

const L = window.L;

@customElement('map-image')
export class MapImage extends LitElement {
    @property({ type: String }) title = 'Map Image Admin';

    map: any = null;

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
        MapImage.mapStyles
    ];

    firstUpdated() {
        const mapElement = this.renderRoot.querySelector('div');
        if (mapElement) {
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
                marker: L.marker([0, 0]),
                collapsed: false,
                autoCollapse: false,
                hideMarkerOnCollapse: true,
                autoType: false,
                minLength: 2
            });

            this.map.addControl(searchControl);

            this.map.invalidateSize(false);
        }
    }

    render() {
        return html` <div class="map"></div> `;
    }
}
