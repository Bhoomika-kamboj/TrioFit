import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items || []);

  if (!cartItems.length) {
    return (
      <div className="cart-page">
        <h2>Your Cart</h2>
        <p>No items in cart 🛒</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, idx) => (
          <li
            key={idx}
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}
          >
            <img
              src={item.selectedVariant || item.image}
              alt={item.name}
              style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 6, cursor: "pointer" }}
              onClick={() => navigate(`/product/${item.id}`)}
            />
            <span>
              {item.name} — ₹{item.price} {item.quantity > 1 && `x${item.quantity}`}
              {item.selectedVariant && <span>(Selected variant)</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;