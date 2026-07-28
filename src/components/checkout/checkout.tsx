import Tabs from "../tabs/tabs";
import tabs from "../../components/mocks/delivery-methods";
import PickupForm from "../pickup/pickup-form";
import DeliveryForm from "../delivery/delivery";
import cities from "../mocks/cities";
import { useState } from "react";


function Checkout() {
    const [activeTab, setActiveTab] = useState<'pickup' | 'delivery'>('pickup');
    const [selectedCity, setSelectedCity] = useState('led');

    return(
        <div className="wrapper">
            <main className="page-main">
                <h1 className="visually-hidden">Заказ доставки в интернет-магазине</h1>
                <Tabs 
                    tabs={tabs}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />
                {activeTab === 'pickup' ?  
                    <PickupForm 
                        cities={cities} 
                        activeTab={activeTab}
                        selectedCity={selectedCity}
                        onCityChange={setSelectedCity}
                    /> :
                    <DeliveryForm 
                        cities={cities} 
                        activeTab={activeTab}
                        selectedCity={selectedCity}
                        onCityChange={setSelectedCity}
                    />
                }
            </main>
        </div>
    );
}

export default Checkout;