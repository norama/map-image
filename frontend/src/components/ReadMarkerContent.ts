import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('read-marker-content')
export class ReadMarkerContent extends LitElement {
    static styles = css`
        .root {
            margin: 10px 0;
        }

        .emotion {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
        }

        img {
            width: 30px;
            height: 30px;
        }

        textarea {
            padding: 8px;
        }
    `;

    @property()
    emotion?: string;

    @property()
    comment?: string;

    render() {
        console.log('comment', this.comment);
        return html`
            <div class="root">
                <div class="emotion">
                    <img
                        src=${this.emotion === 'true'
                            ? './assets/emotions/positive.jpg'
                            : './assets/emotions/negative.jpg'}
                    />
                </div>
                <textarea rows=${5} cols=${36} disabled>
${this.comment ?? ''}</textarea
                >
            </div>
        `;
    }
}
