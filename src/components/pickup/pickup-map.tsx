import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MapCenter from "./pickup-map-center";
import type { TDeliveryPoint } from "../../types/cities";

const DEFAULT_CENTER: [number, number] = [59.9386, 30.3141];

type TPickupFormProps = {
    point: TDeliveryPoint | null;
}

function PickupMap({point}: TPickupFormProps) {
    const center: [number, number] = point?.coordinates ?? DEFAULT_CENTER;
    return (
        <div className="map">
            <MapContainer
                center={center}
                zoom={14}
                style={{
                    height: "400px",
                    width: "100%",
                }}>
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {point && (
                    <MapCenter coordinates={point?.coordinates} />
                )}
                {point && (
                    <Marker position={point.coordinates} />
                )}
            </MapContainer>
        </div>
    );
}

export default PickupMap;