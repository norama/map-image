import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { MapAdminController } from './control/MapAdminController';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

@customElement('map-admin')
export class MapAdmin extends LitElement {
    @property({ type: String }) title = 'Map Image Admin';

    static styles = css`
        :host {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            font-size: calc(10px + 2vmin);
            color: #1a2b42;
            margin: 0 auto;
            text-align: center;
            background-color: var(--map-image-background-color);
        }

        main {
            flex-grow: 1;
        }

        .logo {
            margin-top: 36px;
            animation: app-logo-spin infinite 20s linear;
        }

        @keyframes app-logo-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .app-footer {
            font-size: calc(12px + 0.5vmin);
            align-items: center;
        }

        .app-footer a {
            margin-left: 5px;
        }
    `;

    controller = new MapAdminController(this);

    render() {
        return html`
            <main>
                <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
                <h1>${this.title}</h1>

                <p>
                    <get-markers-button
                        .onClick=${this.controller.getMarkers}
                    ></get-markers-button>
                </p>
            </main>

            <p class="app-footer">
                🚽 Made with love by
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/open-wc"
                    >open-wc</a
                >.
            </p>
        `;
    }
}
