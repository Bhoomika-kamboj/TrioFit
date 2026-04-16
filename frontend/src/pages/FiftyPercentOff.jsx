import React from "react";
import ProductCard from "../components/ProductCard";
import {
  kidGirlsBottomProducts,
  kidGirlsDressProducts,
  kidGirlsEthnicProducts,
  kidGirlsTopProducts,
} from "../data/products";

const FiftyPercentOff = () => {
  const allGirlsProducts = [
    ...kidGirlsBottomProducts,
    ...kidGirlsDressProducts,
    ...kidGirlsEthnicProducts,
    ...kidGirlsTopProducts,
  ];

  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <div className="catalog-hero-card">
          <h1 className="Title">50% OFF - Girls Collection</h1>
          <p>Amazing discounts on all girls' clothing. Don't miss out on these exclusive offers!</p>
        </div>
        <div className="catalog-hero-panel">
          <div className="catalog-stat">
            <strong>Bottom Wear</strong>
            <p>Jeans, skirts, and more with 50% off.</p>
          </div>
          <div className="catalog-stat">
            <strong>Dresses</strong>
            <p>Elegant dresses and frocks at half price.</p>
          </div>
          <div className="catalog-stat">
            <strong>Ethnic Wear</strong>
            <p>Festive and traditional outfits discounted.</p>
          </div>
          <div className="catalog-stat">
            <strong>Tops & T-Shirts</strong>
            <p>Casual and party tops with great savings.</p>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <h3 className="mini-title">All Girls Products - 50% OFF</h3>
        <div className="products">
          {allGirlsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default FiftyPercentOff;