import PaymentMethod from "./payment-method";
import PaymentCard from "./payment-card";

function Payment() {
    return(
        <>
        <h3>Способ оплаты</h3>
        <PaymentMethod/>
        <PaymentCard />
        </>
    );
}

export default Payment;