import { css } from 'lit';

const leafletSearchStyles = css`
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

    .leaflet-container .leaflet-control-search {
        position: relative;
        float: left;
        background: #fff;
        color: #1978cf;
        border: 2px solid rgba(0, 0, 0, 0.2);
        background-clip: padding-box;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 1000;
        margin-left: 10px;
        margin-top: 10px;
    }
    .leaflet-control-search.search-exp {
        /*expanded*/
        background: #fff;
        border: 2px solid rgba(0, 0, 0, 0.2);
        background-clip: padding-box;
    }
    .leaflet-control-search .search-input {
        display: block;
        float: left;
        background: #fff;
        border: 1px solid #666;
        border-radius: 2px;
        padding: 5px 20px 5px 5px;
        margin: 6px 0 6px 6px;
        min-width: 300px;
    }
    .leaflet-control-search.search-load .search-input {
        background: url('./assets/search/loader.gif') no-repeat center right
            #fff;
    }
    .leaflet-control-search.search-load .search-cancel {
        visibility: hidden;
    }
    .leaflet-control-search .search-cancel {
        display: block;
        width: 22px;
        height: 22px;
        position: absolute;
        right: 38px;
        top: 2px;
        margin: 6px 0;
        background: url('./assets/search/search-icon.png') no-repeat 0 -46px;
        text-decoration: none;
        filter: alpha(opacity=80);
    }
    .leaflet-control-search .search-cancel:hover {
        filter: alpha(opacity=100);
    }
    .leaflet-control-search .search-cancel span {
        display: none; /* comment for cancel button imageless */
        font-size: 18px;
        line-height: 20px;
        color: #ccc;
        font-weight: bold;
    }
    .leaflet-control-search .search-cancel:hover span {
        color: #aaa;
    }
    .leaflet-control-search .search-button {
        display: block;
        float: left;
        width: 30px;
        height: 30px;
        margin: 5px;
        background: url('./assets/search/search-icon.png') no-repeat 4px 4px
            #fff;
        border-radius: 4px;
        opacity: 0.8;
    }
    .leaflet-control-search .search-button:hover {
        background: url('./assets/search/search-icon.png') no-repeat 4px -20px #fff;
        opacity: 1;
    }
    .leaflet-control-search .search-tooltip {
        position: absolute;
        top: 100%;
        left: 0;
        float: left;
        list-style: none;
        padding-left: 0;
        min-width: 120px;
        max-height: 122px;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
        background-color: rgba(0, 0, 0, 0.25);
        z-index: 1010;
        overflow-y: auto;
        overflow-x: hidden;
        cursor: pointer;
    }
    .leaflet-control-search .search-tip {
        margin: 2px;
        padding: 2px 4px;
        display: block;
        color: black;
        background: #eee;
        border-radius: 0.25em;
        text-decoration: none;
        white-space: nowrap;
        vertical-align: center;
    }
    .leaflet-control-search .search-button:hover {
        background-color: #fff;
        opacity: 1;
    }
    .leaflet-control-search .search-tip-select,
    .leaflet-control-search .search-tip:hover {
        background-color: #fff;
    }
    .leaflet-control-search .search-alert {
        cursor: pointer;
        clear: both;
        font-size: 0.75em;
        margin-bottom: 5px;
        padding: 0 0.25em;
        color: #e00;
        font-weight: bold;
        border-radius: 0.25em;
    }
`;

export default leafletSearchStyles;
