import type { TCities } from "../../types/cities";
import PickupCities from "./pickup-cities";
import PickupAddresses from "./pickup-addresses";
import PickupMap from "./pickup-map";
import Payment from "../payment/payment";
import Phone from "../phone/phone";
import SubmitBlock from "../submit-block/submit-block";
import { useState } from "react";
import type { TDeliveryPoint } from "../../types/cities";

type TPickupFormProps = {
	cities: TCities;
	activeTab: 'pickup' | 'delivery';
	selectedCity: string;
	onCityChange: (cityId: string) => void;
}

function PickupForm({cities, activeTab, selectedCity, onCityChange}: TPickupFormProps) {
	const [selectedPoint, setSelectedPoint] = useState<TDeliveryPoint | null>(null);

	const currentCity = cities.find(
		(city) => city.cityId === selectedCity
	);

	const currentPoint =
        selectedPoint && currentCity?.deliveryPoints.includes(selectedPoint)
        ? selectedPoint
        : currentCity?.deliveryPoints[0] ?? null;

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
								onChange={onCityChange}
							/>
						))
					}
				</div>
				<div className="input-wrapper input-wrapper--radio-group">
					<h4>Адрес пункта выдачи заказов</h4>
					{
						currentCity?.deliveryPoints.map((point, index) => (
							<PickupAddresses
								key={index}
								id={index}
								index={index}
								cityId={currentCity.id}
								point={point}
								selectedPoint={currentPoint}
								onChange={setSelectedPoint}
							/>
						))
					}
				</div>
				<PickupMap point={currentPoint}/>
				<Payment/>
				<Phone deliveryType={activeTab} />
				<SubmitBlock/>
			</form>
		</section>
    );
}

export default PickupForm;