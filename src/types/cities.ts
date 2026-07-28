type TCoordinates = [number, number];

type TCity = {
    id: number;
    city: string;
    cityId: string;
    deliveryPoints: TDeliveryPoint[];
};

export type TDeliveryPoint = {
    address: string;
    coordinates: TCoordinates;
};

export type TCities = TCity[];