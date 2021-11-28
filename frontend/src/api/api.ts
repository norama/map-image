import config from '../config';

export const getMarkers = async () => {
    const response = await fetch(`${config.apiurl}/list/`);
    const markers = await response.json();
    console.log(markers);
    return markers;
};
