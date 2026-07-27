function SubmitBlock() {
    return(
        <div className="form__submit-block">
            <button className="form__submit-btn" type="submit" disabled>Заказать</button>
            <div className="form__submit-state">
            <p className="form__submit-header">
                Осталось заполнить:
            </p>
            <p className="form__submit-help"><span>номер карты</span> и <span>телефон</span></p>
            </div>
        </div>
    );
}

export default SubmitBlock;