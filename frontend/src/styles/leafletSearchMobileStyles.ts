import { css } from 'lit';

const leafletSearchMobileStyles = css`
    @media only screen and (max-width: 600px) {
        /* 
 * Leaflet Control Search v3.0.0 - 2021-08-18 
 * 
 * Copyright 2021 Stefano Cudini 
 * stefano.cudini@gmail.com 
 * https://opengeo.tech/ 
 * 
 * Licensed under the MIT license. 
 * 
 * Demo: 
 * https://opengeo.tech/maps/leaflet-search/ 
 * 
 * Source: 
 * git@github.com:stefanocudini/leaflet-search.git 
 * 
 */

        /* SEARCH */
        .leaflet-control.leaflet-control-search {
            z-index: 2000;
            max-width: 100%;
        }
        .leaflet-control-search .search-input {
            display: block;
            float: left;
            background: #fff;
            border: 1px solid #666;
            border-radius: 2px;
            height: 24px;
            font-size: 1.25em;
            padding: 0 0.125em;
            margin: 3px;
            padding-right: 30px;
            min-width: 200px;
        }
        .leaflet-control-search .search-button:hover,
        .leaflet-control-search .search-button {
            background-image: url('./assets/search/search-icon-mobile.png');
            -webkit-border-radius: 4px;
            border-radius: 4px;
            background-position: 1px 1px;
            width: 32px;
            height: 32px;
        }
        .leaflet-control-search.search-load .search-input {
            background: url('./assets/search/loader.gif') no-repeat center right
                #fff;
        }
        .leaflet-control-search .search-cancel {
            background-image: url('./assets/search/search-icon-mobile.png');
            -webkit-border-radius: 4px;
            border-radius: 4px;
            background-position: 0px -62px;
            width: 26px;
            height: 26px;
            right: 34px;
            margin: 3px;
        }
        .leaflet-control-search .search-tooltip {
            max-height: 142px; /*(.search-tip height * 5)*/
        }
        .leaflet-control-search .search-tip {
            font-size: 1em;
            margin: 2px;
            padding: 2px;
            display: block;
            color: black;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 0.25em;
            text-decoration: none;
            white-space: nowrap;
            vertical-align: center;
        }
        .leaflet-control-search .search-tip .climbo-icon-mini {
            float: right;
            display: block;
            white-space: nowrap;
        }
        .leaflet-control-search .search-button:hover,
        .leaflet-control-search .search-tip-select,
        .leaflet-control-search .search-tip:hover {
            background-color: #fff;
        }
        .leaflet-control-search .search-alert {
            font-size: 1.2em;
        }
    }
`;

export default leafletSearchMobileStyles;
