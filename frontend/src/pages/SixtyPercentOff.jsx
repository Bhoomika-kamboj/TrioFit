import React from "react";
import ProductCard from "../components/ProductCard";
import {
  menBottomProducts,
  menEthnicProducts,
  menTopProducts,
} from "../data/products";

const SixtyPercentOff = () => {
  const allMenProducts = [
    ...menBottomProducts,
    ...menEthnicProducts,
    ...menTopProducts,
  ];

  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <div className="catalog-hero-card">
          <h1 className="Title">60% OFF - Men Collection</h1>
          <p>Unbeatable discounts on men's fashion. Upgrade your wardrobe with these amazing deals!</p>
        </div>
        <div className="catalog-hero-panel">
          <div className="catalog-stat">
            <strong>Bottom Wear</strong>
            <p>Trousers, jeans, and joggers with 60% off.</p>
          </div>
          <div className="catalog-stat">
            <strong>Ethnic Wear</strong>
            <p>Kurtas and traditional wear at great prices.</p>
          </div>
          <div className="catalog-stat">
            <strong>Topwear</strong>
            <p>Shirts, t-shirts, and polos discounted.</p>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <h3 className="mini-title">All Men Products - 60% OFF</h3>
        <div className="products">
          {allMenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SixtyPercentOff;