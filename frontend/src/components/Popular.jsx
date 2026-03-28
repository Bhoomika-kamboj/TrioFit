import { topProducts, bottomProducts, ethnicProducts, kidEthnicProducts } from "../data/products";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const popularItems = [
    topProducts[0],
    bottomProducts[0],
    ethnicProducts[0],
    kidEthnicProducts[0],
    topProducts[1],
    bottomProducts[1],
  ];

  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });

  const handleSeeMore = (id) => {
    navigate(`/see-more/${id}`);
  };

  return (
    <section className="popular-slider-section">
      <h1 className="Title">Popular nearby</h1>
      <div className="slider-container">
        <button className="arrow left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="slider" ref={sliderRef}>
          {popularItems.map((item) => (
            <div
              className="slider-item"
              key={item.id}
              onClick={() => handleSeeMore(item.id)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Popular;