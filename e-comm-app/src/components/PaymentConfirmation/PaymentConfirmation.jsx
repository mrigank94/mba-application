import { Link } from "react-router-dom";
import "./PaymentConfirmation.css";

const PaymentConfirmation = () => {
  return (
    <div className="payment-container">
      <div className="confirm-payment-success-msg">Order confirmed</div>
      <Link className="continue-shopping-btn btn btn-secondary" to="/">
        Continue shopping
      </Link>
    </div>
  );
};

export default PaymentConfirmation;
