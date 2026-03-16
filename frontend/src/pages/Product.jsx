import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { topProducts, bottomProducts, ethnicProducts, kidEthnicProducts } from "../data/products";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productId = Number(id);

  const product =
    topProducts.find(p => p.id === productId) ||
    bottomProducts.find(p => p.id === productId) ||
    ethnicProducts.find(p => p.id === productId) ||
    kidEthnicProducts.find(p => p.id === productId);

  if (!product) return <p>Product not found 😢</p>;

  const handleSeeMore = () => navigate(`/see-more/${product.id}`);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        selectedVariant: product.variants?.[0] || product.image,
        image: product.image,
      })
    );
    alert(`${product.name} added to cart 🛒`);
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>

        <div className="product-actions">
          <button className="add-btn" onClick={handleAddToCart}>
            Add to Cart 🛒
          </button>

          <button className="see-more-btn" onClick={handleSeeMore}>
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;