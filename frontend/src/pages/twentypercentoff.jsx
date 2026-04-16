import React from 'react'
import ProductCard from '../components/ProductCard';
import { topProducts, bottomProducts, ethnicProducts } from '../data/products';

const TwentyPercentOff = () => {
  const allWomenProducts = [
    ...topProducts,
    ...bottomProducts,
    ...ethnicProducts,
  ];

  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <div className="catalog-hero-card">
          <h1 className="Title">20% OFF - Women Collection</h1>
          <p>Exclusive discounts on women's fashion. Shop now and save big!</p>
        </div>
        <div className="catalog-hero-panel">
          <div className="catalog-stat">
            <strong>Topwear</strong>
            <p>Tops, shirts, and blouses with 20% off.</p>
          </div>
          <div className="catalog-stat">
            <strong>Bottom Wear</strong>
            <p>Jeans, trousers, and skirts discounted.</p>
          </div>
          <div className="catalog-stat">
            <strong>Ethnic Wear</strong>
            <p>Sarees, kurtas, and traditional outfits.</p>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <h3 className="mini-title">All Women Products - 20% OFF</h3>
        <div className="products">
          {allWomenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default TwentyPercentOff;