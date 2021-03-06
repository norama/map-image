import { css } from 'lit';

const leafletSimpleButtonStyles = css`
    .leaflet-control-simplebutton {
        background: #fff;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
        display: block;
        overflow: hidden;
        width: 36px;
        height: 36px;
        padding: 5px;
    }

    .leaflet-control-simplebutton a {
        color: #000;
        cursor: pointer;
        line-height: 150%;
        white-space: nowrap;
        text-align: center;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 18px;
        text-decoration: none;
        background: transparent;
        opacity: 0.75;
    }

    .leaflet-control-simplebutton a:hover {
        opacity: 1;
        text-decoration: none;
    }

    .leaflet-control-simplebutton a i {
        pointer-events: none;
        font-size: inherit;
    }

    /* TOUCH */

    .leaflet-touch .leaflet-control-simplebutton {
        width: 338px;
        height: 26px;
    }

    @media only screen and (max-width: 600px) {
        .leaflet-touch .leaflet-control-simplebutton {
            width: 200px;
        }
    }

    .leaflet-touch .leaflet-control-simplebutton a {
        font-size: 20px;
    }
`;

export default leafletSimpleButtonStyles;
