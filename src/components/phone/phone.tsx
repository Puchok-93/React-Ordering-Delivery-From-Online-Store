import {DELIVERY_PHONE_TEXT, PICKUP_PHONE_TEXT} from '../const.ts';

type TPhoneProps = {
	deliveryType: 'pickup' | 'delivery';
};


function Phone({deliveryType}: TPhoneProps ) {
	const label = deliveryType === 'pickup' ? PICKUP_PHONE_TEXT : DELIVERY_PHONE_TEXT;
    return(
		<>
			<div className="input-wrapper input-wrapper--input">
				<h4>Номер телефона</h4>
				<input id="phone" name="phone" type="text" placeholder="+7(999)999-99-99" />
				<label htmlFor="phone" aria-label="Введите верный номер телефона, он должен начинаться с +7"></label>
				<div className="input-wrapper__error">Введите верный номер телефона, он должен начинаться с +7</div>
			</div>
			<span className="form__info">{label}</span>
		</>
    );
}

export default Phone;