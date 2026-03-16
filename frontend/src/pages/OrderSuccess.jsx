import { Link, useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.orderId;

  return (
    <div className="order-success-page">
      <h2>Order Confirmed!</h2>
      <p>Your order has been placed successfully.</p>
      {orderId && <p>Order ID: <strong>{orderId}</strong></p>}
      <p>Thank you for shopping with us. We’re packing your items and will notify you soon.</p>
      <div className="order-success-actions">
        <Link className="btn" to="/">Continue Shopping</Link>
        <Link className="btn" to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
