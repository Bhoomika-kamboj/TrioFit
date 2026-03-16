import { topProducts, bottomProducts, ethnicProducts, kidEthnicProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useRef } from "react";

const Popular = () => {
  // har category ka first item pick
  const popularItems = [
    topProducts[0],
    bottomProducts[0],
    ethnicProducts[0],
    kidEthnicProducts[0],
    topProducts[1], // extra item for slider
    bottomProducts[1],
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="popular-slider-section">
      <h2>Popular nearby</h2>
      <div className="slider-container">
        <button className="arrow left" onClick={scrollLeft}>&#10094;</button>
        <div className="slider" ref={sliderRef}>
          {popularItems.map((item) => (
            <div className="slider-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>&#10095;</button>
      </div>
    </section>
  );
};

export default Popular;