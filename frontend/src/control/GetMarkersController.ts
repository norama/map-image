import { ReactiveController, ReactiveControllerHost } from 'lit';
import { getMarkers } from '../api/api';

export class GetMarkersController implements ReactiveController {
    host: ReactiveControllerHost;

    constructor(host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }

    getMarkers = async () => {
        const markers = await getMarkers();
        download('markers.json', JSON.stringify(markers, null, 4));
    };

    hostConnected() {}

    hostDisconnected() {}
}

// https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server?rq=1
const download = (filename: string, text: string) => {
    var element = document.createElement('a');
    element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};
