import type { TDeliveryPoint } from "../../types/cities";

type TAddressesProps = {
	id: number;
	cityId: number;
	index: number;
	point: TDeliveryPoint;
	selectedPoint:  TDeliveryPoint | null;
	onChange: (point: TDeliveryPoint) => void;
}

function PickupAddresses({id, cityId, point, selectedPoint, onChange}: TAddressesProps) {
    return(
        <>
            <input 
			id={`pick-up-${cityId}-address-${id}`} 
			type="radio" 
			name={`${cityId}-${point.address}`} 
			value={point.address}
			checked={selectedPoint?.address === point.address}
			onChange={() => onChange(point)}/>
            <label htmlFor={`pick-up-${cityId}-address-${id}`}>{point.address}</label>
        </>
    );
}

export default PickupAddresses;