
type TAddressesProps = {
	id: number;
	cityId: number;
	address: string;
	selectedAddress: string;
	onChange: (address: string) => void;
}

function PickupAddresses({id, cityId, address, selectedAddress, onChange}: TAddressesProps) {
    return(
        <>
            <input 
			id={`pick-up-${cityId}-address-${id}`} 
			type="radio" 
			name={`${cityId}-${address}`} 
			value={address}
			checked={selectedAddress === address}
			onChange={() => onChange(address)}/>
            <label htmlFor={`pick-up-${cityId}-address-${id}`}>{address}</label>
        </>
    );
}

export default PickupAddresses;