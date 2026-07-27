
type TCitiesProps = {
    city: string;
    cityId: string;
    selectedCity: string;
    onChange: (cityId: string) => void;
}

function DeliveryCities({city, cityId, selectedCity, onChange}: TCitiesProps) {
    return (
        <>
            <input 
                id={`delivery-${cityId}`} 
                type="radio" 
                name="city" 
                value={cityId} 
                checked={selectedCity === cityId}
                onChange={() => onChange(cityId)}
            />
            <label htmlFor={`delivery-${cityId}`}>{city}</label>
        </>
    );
}

export default DeliveryCities;