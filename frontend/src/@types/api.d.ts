declare type TContent = {
    emotion: boolean;
    comment: string;
    image: null;
};

declare type TMarker = {
    id: number;
    latlng: {
        lat: number;
        lng: number;
    };
    content: TContent;
};
