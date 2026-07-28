
type TAddressesProps = {
	id: number;
	cityId: number;
	address: string;
	pickupAddress: string;
	onChange: (address: string) => void;
}

function PickupAddresses({id, cityId, address, pickupAddress, onChange}: TAddressesProps) {
    return(
        <>
            <input 
			id={`pick-up-${cityId}-address-${id}`} 
			type="radio" 
			name={`${cityId}-${address}`} 
			value={address}
			checked={pickupAddress === address}
			onChange={() => onChange(address)}/>
            <label htmlFor={`pick-up-${cityId}-address-${id}`}>{address}</label>
        </>
    );
}

export default PickupAddresses;