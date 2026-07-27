function DeliveryTime() {
    return(
		<div className="input-wrapper input-wrapper--range">
			<h4>Время доставки</h4>
			<input id="delivery-user-time-delivery" type="range" className="hidden" data-field-type="delivery" />
			<label htmlFor="delivery-user-time-delivery" aria-label="Укажите время доставки"></label>
			<div className="range-slider">
			<div className="range-slider-thumb-area js_range-slider-thumb-area">
				<div className="range-slider-thumb js_range-slider-thumb">
				<div className="range-slider-tooltip">
					10:00 - 12:00
				</div>
				<div className="range-slider-thumb__stripe"></div>
				<div className="range-slider-thumb__stripe"></div>
				<div className="range-slider-thumb__stripe"></div>
				</div>
			</div>
			<div className="range-slider-tips">
				<div className="range-slider-tip">10:00</div>
				<div className="range-slider-tip">13:00</div>
				<div className="range-slider-tip">16:00</div>
				<div className="range-slider-tip">19:00</div>
			</div>
			</div>
		</div>
    );
}

export default DeliveryTime;