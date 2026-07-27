import type { TCities } from "../../types/cities";
import PickupCities from "./pickup-cities";
import PickupAddresses from "./pickup-addresses";
import PickupMap from "./pickup-map";
import Payment from "../payment/payment";
import Phone from "../phone/phone";
import SubmitBlock from "../submit-block/submit-block";
import { useState } from "react";

type TPickupFormProps = {
	cities: TCities;
	activeTab: 'pickup' | 'delivery';
}

function PickupForm({cities, activeTab}: TPickupFormProps) {
	const [selectedCity, setSelectedCity] = useState('led');
	const [selectedAddress, setSelectedAddress] = useState('');

	const currentCity = cities.find(
		(city) => city.cityId === selectedCity
	);

	const handleCityChange = (cityId: string) => {
		setSelectedCity(cityId);
		setSelectedAddress("");
	};

    return(
		<section className="form tabs-block__pick-up">
			<h2 className="visually-hidden">Форма самовывоза</h2>
			<form action="#" method="POST">
				<h3>Самовывоз</h3>
				<div className="input-wrapper input-wrapper--radio-group">
					<h4>Город</h4>
					{
						cities.map(({id, city, cityId}) => (
							<PickupCities
								key={id}
								city={city}
								cityId={cityId}
								selectedCity={selectedCity}
								onChange={handleCityChange}
							/>
						))
					}
				</div>
				<div className="input-wrapper input-wrapper--radio-group">
					<h4>Адрес пункта выдачи заказов</h4>
					{
						currentCity?.deliveryPoints.map(({address}, i) => (
							<PickupAddresses
								key={i}
								id={i}
								cityId={currentCity.id}
								address={address}
								selectedAddress={selectedAddress}
								onChange={setSelectedAddress}
							/>
						))
					}
				</div>
				<PickupMap/>
				<Payment/>
				<Phone deliveryType={activeTab} />
				<SubmitBlock/>
			</form>
		</section>
    );
}

export default PickupForm;