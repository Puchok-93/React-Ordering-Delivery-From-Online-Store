import { useEffect } from "react";
import { useMap } from "react-leaflet";

type TMapCenterProps = {
    coordinates: [number, number];
};

function MapCenter({ coordinates }: TMapCenterProps) {
    const map = useMap();

    useEffect(() => {
        map.flyTo(
            coordinates,
            18,
            {
                duration: 2
            }
        );
    }, [coordinates, map]);

    return null;
}

export default MapCenter;