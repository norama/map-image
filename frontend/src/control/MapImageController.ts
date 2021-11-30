import { ReactiveController, ReactiveControllerHost } from 'lit';
import { LatLng } from 'leaflet';

import { addMarker } from '../api/api';

export class MapImageController implements ReactiveController {
    host: ReactiveControllerHost;

    constructor(host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }

    addMarker = async (latlng: LatLng) => {
        const marker = await addMarker(latlng);
    };

    hostConnected() {}

    hostDisconnected() {}
}
