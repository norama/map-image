import { css } from 'lit';

const leafletModalCustomStyles = css`
    html,
    body {
        margin: 0;
        padding: 0;
        background: #fff;
    }

    body {
        -webkit-overflow-scrolling: touch;
        overflow: hidden;
    }

    h2,
    h3 {
        font-weight: 300;
    }

    hr {
        height: 1px;
        background: #ddd;
        border: 0;
    }

    #map {
        width: 100%;
        height: 100%;
        display: block;
        float: left;
    }

    #controls {
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
        background: #fff;

        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
        border-radius: 4px;
        z-index: 1000;
    }

    #controls .wrapper {
        padding: 30px;
    }

    #controls .topcoat-button {
        margin-bottom: 10px;
    }

    #controls .github-button {
        color: #fff;
    }

    .modal-footer {
        display: block;
        text-align: right;
    }

    .modal-footer .topcoat-button-bar {
        clear: both;
    }

    .modal-footer button {
        cursor: pointer;
        margin-left: 8px;
    }

    .modal-header,
    .modal-body,
    .modal-footer {
        padding-left: 15px;
        padding-right: 6px;
    }

    .dom-ex {
        background: #ddd;
        display: block;
        margin: 0 auto;
        height: 250px;
        width: 250px;
        text-align: center;
        vertical-align: middle;
        font-size: 2em;
    }

    .centered {
        text-align: center;
    }
`;

export default leafletModalCustomStyles;
