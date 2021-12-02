// https://awik.io/extract-gps-location-exif-data-photos-using-javascript/

export const exifData = (src: string) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = function () {
            (window as any).EXIF.getData(image, function () {
                resolve((image as any).exifdata);
            });
        };
        image.src = src;
    });
};

const convertDMSToDD = (
    degrees: number,
    minutes: number,
    seconds: number,
    direction: string
) => {
    let dd = degrees + minutes / 60 + seconds / 3600;

    if (direction == 'S' || direction == 'W') {
        dd = dd * -1;
    }

    return dd;
};

export const exifLatLng = async (src: string) => {
    const data = (await exifData(src)) as any;

    console.log(data.GPSLatitude);
    console.log(data.GPSLongitude);

    if (!data.GPSLatitude || !data.GPSLongitude) {
        return undefined;
    }

    // Calculate latitude decimal
    const latDegree = +data.GPSLatitude[0];
    const latMinute = +data.GPSLatitude[1];
    const latSecond = +data.GPSLatitude[2];
    const latDirection = data.GPSLatitudeRef;

    const lat = convertDMSToDD(latDegree, latMinute, latSecond, latDirection);

    // Calculate longitude decimal
    const lngDegree = +data.GPSLongitude[0];
    const lngMinute = +data.GPSLongitude[1];
    const lngSecond = +data.GPSLongitude[2];
    const lngDirection = data.GPSLongitudeRef;

    const lng = convertDMSToDD(lngDegree, lngMinute, lngSecond, lngDirection);

    return new window.L.LatLng(lat, lng);
};
