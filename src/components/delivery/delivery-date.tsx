function DeliveryDate() {
    return(
        <div className="input-wrapper input-wrapper--success input-wrapper--input">
            <h4>Дата доставки</h4>
            <input id="delivery-user-date-delivery" type="text" required />
            <label htmlFor="delivery-user-date-delivery" aria-label="Укажите дату доставки"></label>
            <div className="input-wrapper__error">Укажите дату доставки</div>
        </div>
    );
}

export default DeliveryDate;