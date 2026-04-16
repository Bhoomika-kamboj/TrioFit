import React from "react";
import ProductCard from "../components/ProductCard";
import {
  kidEthnicProducts,
  kidJeansProducts,
  kidShirtsProducts,
  kidTShirtsProducts,
} from "../data/products";

const ThirtyPercentOff = () => {
  const allKidsProducts = [
    ...kidEthnicProducts,
    ...kidJeansProducts,
    ...kidShirtsProducts,
    ...kidTShirtsProducts,
  ];

  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <div className="catalog-hero-card">
          <h1 className="Title">30% OFF - Kids Collection</h1>
          <p>Special offers on boys' clothing. Perfect for your little ones!</p>
        </div>
        <div className="catalog-hero-panel">
          <div className="catalog-stat">
            <strong>Ethnic Wear</strong>
            <p>Kurtas and traditional outfits with 30% off.</p>
          </div>
          <div className="catalog-stat">
            <strong>Jeans</strong>
            <p>Cargo pants and jeans at discounted prices.</p>
          </div>
          <div className="catalog-stat">
            <strong>Shirts</strong>
            <p>Casual and formal shirts for kids.</p>
          </div>
          <div className="catalog-stat">
            <strong>T-Shirts</strong>
            <p>Comfortable t-shirts and polos.</p>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <h3 className="mini-title">All Kids Products - 30% OFF</h3>
        <div className="products">
          {allKidsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ThirtyPercentOff;