import { ReactiveController, ReactiveControllerHost } from 'lit';
import { LatLng } from 'leaflet';

import { addMarker, getMarkers } from '../api/api';

export class MapImageController implements ReactiveController {
    host: ReactiveControllerHost;

    markers: TMarker[] = [];

    constructor(host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }

    loadMarkers = async () => {
        this.markers = await getMarkers();
        return this.markers;
    };

    addMarker = async (latlng: LatLng, content: TContent) => {
        let marker = (await addMarker(latlng, content)) as TMarker;
        this.markers.push(marker);
        return marker;
    };

    hostConnected() {}

    hostDisconnected() {}
}
