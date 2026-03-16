import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const openSeeMore = () => {
    navigate(`/see-more/${product.id}`, { state: { variants: product.variants || [product.image], name: product.name } });
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        style={{ cursor: "pointer" }}
        onClick={openSeeMore}
      />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <div className="product-card-actions">
        <button onClick={openSeeMore}>See More</button>
      </div>
    </div>
  );
};

export default ProductCard;
