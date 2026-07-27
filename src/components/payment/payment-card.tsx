function PaymentCard() {
    return(
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
    );
}

export default PaymentCard;