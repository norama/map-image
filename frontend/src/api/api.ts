import config from '../config';

import { LatLng } from 'leaflet';

export const getMarkers = async () => {
    const response = await fetch(`${config.apiurl}/list/`);
    const markers = await response.json();
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
    return await response.json();
};

export const getMarker = async (id: string) => {
    const response = await fetch(`${config.apiurl}/marker/full/${id}`);
    return await response.json();
};
