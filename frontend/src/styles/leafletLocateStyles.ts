import { css } from 'lit';

const leafletLocateStyles = css`
    /* Compatible with Leaflet 0.7 */
    .leaflet-control-locate a {
        cursor: pointer;
    }
    .leaflet-control-locate a .leaflet-control-locate-location-arrow {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 7px;
        background-color: black;
        -webkit-mask-image: url('./assets/locate/location-arrow-solid.svg');
        mask-image: url('./assets/locate/location-arrow-solid.svg');
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position: center;
        mask-position: center;
    }
    .leaflet-control-locate a .leaflet-control-locate-spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 7px;
        background-color: black;
        -webkit-mask-image: url('./assets/locate/spinner-solid.svg');
        mask-image: url('./assets/locate/spinner-solid.svg');
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position: center;
        mask-position: center;
        animation: leaflet-control-locate-spin 2s linear infinite;
    }
    .leaflet-control-locate.active a .leaflet-control-locate-location-arrow {
        background-color: #2074b6;
    }
    .leaflet-control-locate.following a .leaflet-control-locate-location-arrow {
        background-color: #fc8428;
    }

    .leaflet-touch .leaflet-bar .leaflet-locate-text-active {
        width: 100%;
        max-width: 200px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding: 0 10px;
    }
    .leaflet-touch
        .leaflet-bar
        .leaflet-locate-text-active
        .leaflet-locate-icon {
        padding: 0 5px 0 0;
    }

    .leaflet-control-locate-location circle {
        animation: leaflet-control-locate-throb 4s ease infinite;
    }

    @keyframes leaflet-control-locate-throb {
        0% {
            stroke-width: 1;
        }
        50% {
            stroke-width: 3;
            transform: scale(0.8, 0.8);
        }
        100% {
            stroke-width: 1;
        }
    }
    @keyframes leaflet-control-locate-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    /*# sourceMappingURL=L.Control.Locate.css.map */
`;

export default leafletLocateStyles;
