
import IconPickup from "../../assets/svg/icon-pickup.svg?react";
import IconDelivery from "../../assets/svg/icon-delivery.svg?react";

type TTabsProps = {
    data: string;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

function Tab({data, label, isActive, onClick}: TTabsProps) {
    return(
        <button 
            className={`tab ${isActive ? 'active' : ''}`} 
            data-tab={data} 
            type="button"
            onClick={onClick}
        >
            <span>{label}</span>
            { data === "pickup" ? <IconPickup/> : <IconDelivery/> }
        </button>
    );
}

export default Tab;