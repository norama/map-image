import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';

@customElement('item-content')
export class ItemContent extends LitElement {
    static styles = css`
        .root {
            margin: 10px 0;
        }

        textarea {
            padding: 8px;
        }
    `;

    commentRef = createRef<HTMLInputElement>();

    @property()
    comment = '';

    render() {
        return html`
            <div class="root">
                <label><b>Comment:</b></label>
                <textarea
                    ${ref(this.commentRef)}
                    rows=${5}
                    cols=${40}
                    value="${this.comment}"
                ></textarea>
            </div>
        `;
    }

    content() {
        return {
            comment: this.commentRef.value?.value
        };
    }
}
