
type TCitiesProps = {
    city: string;
    cityId: string;
    selectedCity: string;
    onChange: (cityId: string) => void;
}

function PickupCities({city, cityId, selectedCity, onChange}: TCitiesProps) {
    return (
        <>
            <input 
                id={`pick-up-${cityId}`} 
                type="radio" name="city" 
                value={cityId} 
                checked={selectedCity === cityId}
                onChange={() => onChange(cityId)}
            />
            <label htmlFor={`pick-up-${cityId}`}>{city}</label>
        </>
    );
}

export default PickupCities;