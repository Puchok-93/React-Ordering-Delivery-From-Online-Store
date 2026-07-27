function Cities() {
    return(
	<section className="form tabs-block__pick-up">
			<h2 className="visually-hidden">Форма самовывоза</h2>
			<form action="#" method="POST">
				<h3>Самовывоз</h3>
				<div className="input-wrapper input-wrapper--radio-group">
					<h4>Город</h4>
					<input id="pick-up-led" type="radio" name="city" value="lED" checked />
					<label htmlFor="pick-up-led">Санкт-Петербург</label>
					<input id="pick-up-mow" type="radio" name="city" value="mow" />
					<label htmlFor="pick-up-mow">Москва</label>
					<input id="pick-up-goj" type="radio" name="city" value="goj" />
					<label htmlFor="pick-up-goj">Нижний Новгород</label>
					<input id="pick-up-krr" type="radio" name="city" value="krr" />
					<label htmlFor="pick-up-krr">Краснодар</label>
				</div>
				<div className="input-wrapper input-wrapper--radio-group">
					<h4>Адрес пункта выдачи заказов</h4>
					<input id="pick-up-led-address-1" type="radio" name="led-address" value="Ленина, 10" checked />
					<label htmlFor="pick-up-led-address-1">Ленина, 10</label>
					<input id="pick-up-led-address-2" type="radio" name="led-address" value="Сталина, 20" />
					<label htmlFor="pick-up-led-address-2">Сталина, 20</label>
					<input id="pick-up-led-address-3" type="radio" name="led-address" value="Хрущёва, 30" />
					<label htmlFor="pick-up-led-address-3">Хрущёва, 30</label>
					<input id="pick-up-led-address-4" type="radio" name="led-address" value="Брежнева, 40" />
					<label htmlFor="pick-up-led-address-4">Брежнева, 40</label>
					<input id="pick-up-led-address-5" type="radio" name="led-address" value="Андропова, 50" />
					<label htmlFor="pick-up-led-address-5">Андропова, 50</label>
				</div>
				<div className="map"></div>
				<h3>Способ оплаты</h3>
				<div className="input-wrapper input-wrapper--radio-group input-wrapper--payment-method">
					<input id="payment-card" type="radio" name="payment-method" value="card" checked />
					<label htmlFor="payment-card">Карта</label>
					<input id="payment-cash" type="radio" name="payment-method" value="cash" />
					<label htmlFor="payment-cash">Наличные</label>
				</div>
				<div className="input-wrapper input-wrapper--error input-wrapper--input-group">
					<h4>Номер карты</h4>
					<input id="card-fields-1" type="text" required />
					<label htmlFor="card-fields-1" aria-label="Первые четыре цифр с карты"></label>
					<input id="card-fields-2" type="text" required />
					<label htmlFor="card-fields-2" aria-label="Вторые четыре цифр с карты"></label>
					<input id="card-fields-3" type="text" required />
					<label htmlFor="card-fields-3" aria-label="Третьи четыре цифр с карты"></label>
					<input id="card-fields-4" type="text" required />
					<label htmlFor="card-fields-4" aria-label="Четвёртые четыре цифр с карты"></label>
					<div className="input-wrapper__error">Введите верный номер карты</div>
				</div>
				<div className="input-wrapper input-wrapper--input">
					<h4>Номер телефона</h4>
					<input id="phone" name="phone" type="text" placeholder="+7(999)999-99-99" />
					<label htmlFor="phone" aria-label="Введите верный номер телефона, он должен начинаться с +7"></label>
					<div className="input-wrapper__error">Введите верный номер телефона, он должен начинаться с +7</div>
				</div>
				<span className="form__info">Товар на складе будет привязан к номеру телефона. В пункте выдачи назовите номер телефона, чтобы получить
					ваш заказ.</span>
				<div className="form__submit-block">
					<button className="form__submit-btn" type="submit" disabled>Заказать</button>
					<div className="form__submit-state">
					<p className="form__submit-header">
						Осталось заполнить:
					</p>
					<p className="form__submit-help"><span>номер карты</span> и <span>телефон</span></p>
					</div>
				</div>
			</form>
	</section>
    );
}

export default Cities;