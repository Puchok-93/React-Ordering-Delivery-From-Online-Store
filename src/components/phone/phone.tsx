function Phone() {
    return(
		<>
			<div className="input-wrapper input-wrapper--input">
				<h4>Номер телефона</h4>
				<input id="phone" name="phone" type="text" placeholder="+7(999)999-99-99" />
				<label htmlFor="phone" aria-label="Введите верный номер телефона, он должен начинаться с +7"></label>
				<div className="input-wrapper__error">Введите верный номер телефона, он должен начинаться с +7</div>
			</div>
			<span className="form__info" >Товар на складе будет привязан к номеру телефона. В пункте выдачи назовите номер телефона, чтобы получить ваш заказ.</span>
		</>
    );
}

export default Phone;