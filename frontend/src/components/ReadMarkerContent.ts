import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { getMarker } from '../api/api';

@customElement('read-marker-content')
export class ReadMarkerContent extends LitElement {
    static styles = css`
        .root {
            margin: 10px 0;
            width: 200px;
        }

        .emotion {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
        }

        .emotion img {
            width: 30px;
            height: 30px;
        }

        .image {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
        }

        .image img {
            width: 200px;
        }
    `;

    async *getContent() {
        let marker;
        while (!marker) {
            if (this.markerId) {
                marker = await getMarker(this.markerId);
                yield marker.content as TContent;
            }
        }
    }

    async firstUpdated() {
        if (this.markerId) {
            const marker = await getMarker(this.markerId);
            this.content = marker.content;
        }
    }

    @property()
    markerId?: string;

    @state()
    content?: TContent;

    render() {
        if (!this.content) {
            return null;
        }
        return html`
            <div class="root">
                <div class="emotion">
                    <img
                        src=${this.content?.emotion === true
                            ? './assets/emotions/positive.png'
                            : './assets/emotions/negative.png'}
                    />
                </div>
                <div class="image">${this.renderImage()}</div>
            </div>
        `;
    }

    renderImage() {
        return this.content?.image
            ? html`<img
                  src=${this.content?.image ?? undefined}
                  alt=${this.content.comment}
                  title=${this.content.comment}
              />`
            : html`${this.content?.comment}`;
    }
}
