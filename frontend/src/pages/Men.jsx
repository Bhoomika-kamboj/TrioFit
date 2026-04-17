import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import {
  menBottomProducts,
  menEthnicProducts,
  menTopProducts,
} from "../data/products";

const Men = () => {
  const [extraProducts, setExtraProducts] = useState({
    topwear: [],
    bottomwear: [],
    ethnic: [],
  });

  useEffect(() => {
    fetchSellerProducts();
  }, []);

  const fetchSellerProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products/all");
      const menProducts = data.products.filter((p) => p.category === "Men");
      
      setExtraProducts({
        topwear: menProducts.filter((p) => p.subcategory === "Topwear"),
        bottomwear: menProducts.filter((p) => p.subcategory === "Bottomwear"),
        ethnic: menProducts.filter((p) => p.subcategory === "Ethnic wear"),
      });
    } catch (error) {
      console.error("Error fetching seller products:", error);
    }
  };

  return (
    <main className="catalog-page">
    <section className="catalog-hero">
      <div className="catalog-hero-card">
        <h1 className="Title">Men</h1>
        <p>Sharper browsing, stronger cards, and mobile spacing that holds together better.</p>
      </div>
      <div className="catalog-hero-panel">
        <div className="catalog-stat">
          <strong>Bottoms</strong>
          <p>Cargos, joggers, trousers, and denim in a cleaner grid.</p>
        </div>
        <div className="catalog-stat">
          <strong>Ethnic wear</strong>
          <p>Festive options with quick jump into the gallery view.</p>
        </div>
        <div className="catalog-stat">
          <strong>Topwear</strong>
          <p>Casual staples and textured shirts with faster preview flow.</p>
        </div>
      </div>
    </section>

      <section className="catalog-section">
      <h3 className="mini-title">Bottoms</h3>
      <div className="products">
        {menBottomProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {extraProducts.bottomwear.map((product) => (
          <ProductCard key={product._id} product={{ ...product, id: product._id }} />
        ))}
      </div>
      </section>

      <section className="catalog-section">
      <h3 className="mini-title">Ethnic Wear</h3>
      <div className="products">
        {menEthnicProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {extraProducts.ethnic.map((product) => (
          <ProductCard key={product._id} product={{ ...product, id: product._id }} />
        ))}
      </div>
      </section>

      <section className="catalog-section">
      <h3 className="mini-title">Topwear</h3>
      <div className="products">
        {menTopProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {extraProducts.topwear.map((product) => (
          <ProductCard key={product._id} product={{ ...product, id: product._id }} />
        ))}
      </div>
      </section>
    </main>
  );
};

export default Men;