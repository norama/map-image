import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';

@customElement('add-marker-content')
export class AddMarkerContent extends LitElement {
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

        .image {
            margin: 10px 0;
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

        input[type='file'] {
            cursor: pointer !important;
            margin: 5px 20px 10px 0;
        }

        textarea {
            padding: 8px;
            margin-top: 5px;
        }
        @media only screen and (max-width: 600px) {
            textarea {
                max-width: 90%;
            }
        }
    `;

    commentRef = createRef<HTMLInputElement>();
    emotionRef = createRef<HTMLInputElement>();
    imageRef = createRef<HTMLInputElement>();

    @property({ type: Boolean })
    emotion = true;

    @property()
    comment = '';

    image?: string;

    render() {
        return html`
            <div class="root">
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
                            <img src="./assets/emotions/positive.png" />
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
                            <img src="./assets/emotions/negative.png" />
                        </label>
                    </div>
                </div>
                <div class="image">
                    <label><b>Image:</b></label>
                    <br />
                    <input
                        ${ref(this.imageRef)}
                        type="file"
                        @change=${this.encodeImageFileAsURL}
                    />
                </div>
                <label><b>Comment:</b></label>
                <textarea ${ref(this.commentRef)} rows=${5} cols=${40}>
${this.comment}</textarea
                >
            </div>
        `;
    }

    encodeImageFileAsURL = () => {
        const element = this.imageRef?.value;
        if (element?.files) {
            const file = element.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                this.image = reader.result as string;
            };
            reader.readAsDataURL(file);
        }
    };

    content() {
        return {
            emotion: !!this.emotionRef.value?.checked,
            comment: this.commentRef.value?.value ?? '',
            image: this.image
        };
    }
}
