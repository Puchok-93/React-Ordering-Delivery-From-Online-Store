function PaymentMethod() {
    return(
        <div className="input-wrapper input-wrapper--radio-group input-wrapper--payment-method">
            <input id="payment-card" type="radio" name="payment-method" value="card" checked />
            <label htmlFor="payment-card">Карта</label>
            <input id="payment-cash" type="radio" name="payment-method" value="cash" />
            <label htmlFor="payment-cash">Наличные</label>
        </div>
    );
}

export default PaymentMethod;