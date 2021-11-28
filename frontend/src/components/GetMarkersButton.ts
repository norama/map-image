import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('get-markers-button')
export class GetMarkersButton extends LitElement {
    static styles = css`
        button {
            cursor: pointer;
            width: 300px;
            height: 50px;
            border-radius: 6px;

            font-size: 20px;
            font-weight: 700;
            color: blue;

            opacity: 0.7;
        }

        button:hover {
            opacity: 1;
        }
    `;

    @property()
    onClick = () => {};

    render() {
        return html`
            <button @click="${this.onClick}">Get All Markers</button>
        `;
    }
}
