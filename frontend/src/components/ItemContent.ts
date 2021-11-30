import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';

@customElement('item-content')
export class ItemContent extends LitElement {
    static styles = css`
        .root {
            margin: 10px 0;
        }

        .emotion {
            display: flex;
        }

        .radio {
            display: flex;
            align-items: center;
            margin: 10px 60px 10px 0;
        }

        img {
            width: 30px;
            height: 30px;
            cursor: pointer;
        }

        input[type='radio'] {
            cursor: pointer;
            transform: scale(1.5);
            margin: 5px 20px 5px 0;
        }

        textarea {
            padding: 8px;
        }
    `;

    commentRef = createRef<HTMLInputElement>();
    emotionRef = createRef<HTMLInputElement>();

    @property()
    comment = '';

    @property({ type: Boolean })
    emotion = true;

    render() {
        return html`
            <div class="root">
                <label><b>Emotion:</b></label>
                <div class="emotion">
                    <div class="radio">
                        <input
                            ${ref(this.emotionRef)}
                            type="radio"
                            id="true"
                            name="emotion"
                            value="true"
                            ?checked=${this.emotion === true}
                        />
                        <label for="true">
                            <img src="./assets/emotions/positive.jpg" />
                        </label>
                    </div>
                    <div class="radio">
                        <input
                            type="radio"
                            id="false"
                            name="emotion"
                            value="false"
                            ?checked=${this.emotion === false}
                        />
                        <label for="false">
                            <img src="./assets/emotions/negative.jpg" />
                        </label>
                    </div>
                </div>
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
            comment: this.commentRef.value?.value,
            emotion: this.emotionRef.value?.checked
        };
    }
}
