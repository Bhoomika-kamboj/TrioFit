import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { 
  topProducts, 
  bottomProducts, 
  ethnicProducts, 
  menTopProducts,
  menBottomProducts,
  menEthnicProducts,
  kidEthnicProducts,
  kidJeansProducts,
  kidShirtsProducts,
  kidTShirtsProducts,
  kidGirlsBottomProducts,
  kidGirlsDressProducts,
  kidGirlsEthnicProducts,
  kidGirlsTopProducts
} from "../data/products";
const SeeMore = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productId = Number(id);

  const product =
  topProducts.find((p) => p.id === productId) ||
  bottomProducts.find((p) => p.id === productId) ||
  ethnicProducts.find((p) => p.id === productId) ||
  menTopProducts.find((p) => p.id === productId) ||
  menBottomProducts.find((p) => p.id === productId) ||
  menEthnicProducts.find((p) => p.id === productId) ||
  kidEthnicProducts.find((p) => p.id === productId) ||
  kidJeansProducts.find((p) => p.id === productId) ||
  kidShirtsProducts.find((p) => p.id === productId) ||
  kidTShirtsProducts.find((p) => p.id === productId) ||
  kidGirlsBottomProducts.find((p) => p.id === productId) ||
  kidGirlsDressProducts.find((p) => p.id === productId) ||
  kidGirlsEthnicProducts.find((p) => p.id === productId) ||
  kidGirlsTopProducts.find((p) => p.id === productId);

  if (!product) return <p>Product not found 😢</p>;

  const [main, setMain] = useState(product.variants[0] || product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : "M");
  const [quantity, setQuantity] = useState(1);

  const [review, setReview] = useState("");
  const [showReviewSuccess, setShowReviewSuccess] = useState(false);
  const [comments, setComments] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`reviews-${productId}`)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(`reviews-${productId}`, JSON.stringify(comments));
  }, [comments, productId]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        selectedVariant: main,
        image: product.image,
        size: selectedSize,
        quantity: Number(quantity),
      })
    );
    alert(`${product.name} added to cart 🛒`);
  };

  const handleOrderNow = () => {
    navigate("/checkout", {
      state: {
        selectedProduct: {
          id: product.id,
          name: product.name,
          image: main || product.image,
          price: product.price,
          size: selectedSize,
          quantity,
        },
      },
    });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!review.trim()) {
      alert("Please write a review before submitting.");
      return;
    }
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: review.trim(),
        createdAt: new Date().toLocaleString(),
      },
    ]);
    setReview("");
    setShowReviewSuccess(true);
    setTimeout(() => setShowReviewSuccess(false), 3000);
  };

  return (
    <main className="see-more-page">
      <h1>{product.name}</h1>
      <p className="price">₹{product.price}</p>

      <div className="see-more-container">
        <div className="main-image">
          <img src={main} alt={product.name} />
        </div>

        <div className="variants-column">
          {product.variants.map((v, idx) => (
            <img
              key={idx}
              src={v}
              alt={`${product.name}-${idx}`}
              className={`variant-img ${v === main ? "active" : ""}`}
              onClick={() => setMain(v)}
            />
          ))}
        </div>
      </div>

      <div className="selection-container">
        <label>
          Size:
          <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            {(product.sizes || ["S", "M", "L", "XL"]).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>

        <label>
          Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          />
        </label>
      </div>

      <div className="actions-container">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart 🛒
        </button>

        <button className="order-now-btn" onClick={handleOrderNow}>
          Order Now 🚚
        </button>
      </div>

      <div className="review-container">
        <form className="review-form" onSubmit={handleSubmitReview}>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
            rows={3}
          />
          <button type="submit" className="review-btn">
            Submit Review ✍️
          </button>
        </form>

        {showReviewSuccess && <p className="review-success">Review submitted. Thanks!</p>}

        <section className="comment-section">
          <h3>Comments ({comments.length})</h3>
          {comments.length === 0 ? (
            <p className="no-comments">No comments yet. Be the first to leave feedback!</p>
          ) : (
            <ul className="comment-list">
              {comments.map((item) => (
                <li key={item.id} className="comment-item">
                  <p className="comment-text">{item.text}</p>
                  <small className="comment-time">{item.createdAt}</small>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default SeeMore;