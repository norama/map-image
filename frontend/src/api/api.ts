import config from '../config';

import { LatLng } from 'leaflet';

export const getMarkers = async () => {
    const response = await fetch(`${config.apiurl}/list/`);
    const markers = await response.json();
    console.log(markers);
    return markers;
};

export const addMarker = async (latlng: LatLng, content: TContent) => {
    const response = await fetch(`${config.apiurl}/add/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            latlng: { lat: latlng.lat, lng: latlng.lng },
            content
        })
    });
    const marker = await response.json();
    console.log(marker);
    return marker;
};
