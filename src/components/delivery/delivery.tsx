import type { TCities } from "../../types/cities";
import DeliveryCities from "./delivery-cities";
import DeliveryAddress from "./delivery-address";
import DeliveryDate from "./delivery-date";
import DeliveryTime from "./delivery-time";
import Phone from "../phone/phone";
import Payment from "../payment/payment";
import SubmitBlock from "../submit-block/submit-block";
import { useState } from "react";

type TDeliveryFormProps = {
	cities: TCities;
	activeTab: 'pickup' | 'delivery';
}

function DeliveryForm({cities, activeTab}: TDeliveryFormProps) {
    const [selectedCity, setSelectedCity] = useState('led');

    return(            
		<section className="form tabs-block__item-delivery">
			<h2 className="visually-hidden">Форма самовывоза</h2>
			<form action="#" method="POST">
				<h3>Доставка</h3>
				<div className="input-wrapper input-wrapper--radio-group">
					<h4>Город</h4>
					{
					cities.map(({id, city, cityId}) => (
						<DeliveryCities
							key={id}
							city={city}
							cityId={cityId}
							selectedCity={selectedCity}
							onChange={setSelectedCity}
						/>
					))
					}
				</div>
				<DeliveryAddress/>
				<DeliveryDate/>
				<DeliveryTime/>
				<Payment/>
				<Phone deliveryType={activeTab} />
				<SubmitBlock/>
			</form>
			</section>
	);
}

export default DeliveryForm;