function DeliveryAddress() {
    return(
		<div className="input-wrapper input-wrapper--error input-wrapper--input">
			<h4>Адрес</h4>
			<input id="delivery-address" type="text" required />
			<label htmlFor="delivery-address" aria-label="Укажите адрес"></label>
			<div className="input-wrapper__error">Укажите адрес</div>
		</div>
    );
}

export default DeliveryAddress;