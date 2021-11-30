import { ReactiveController, ReactiveControllerHost } from 'lit';
import { LatLng } from 'leaflet';

import { addMarker } from '../api/api';

export class MapImageController implements ReactiveController {
    host: ReactiveControllerHost;

    constructor(host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }

    addMarker = async (latlng: LatLng, content: TContent) => {
        const marker = await addMarker(latlng, content);
        console.log(marker);
    };

    hostConnected() {}

    hostDisconnected() {}
}
