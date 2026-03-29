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
    <div>
    <h1 className="Title">Men </h1>
      <br />
      <h3 className="mini-title">Bottoms</h3>
      <br />
      <div className="products">
        {menBottomProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {extraProducts.bottomwear.map((product) => (
          <ProductCard key={product._id} product={{ ...product, id: product._id }} />
        ))}
      </div>

      <h3 className="mini-title">Ethnic Wear</h3>
      <br />
      <div className="products">
        {menEthnicProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {extraProducts.ethnic.map((product) => (
          <ProductCard key={product._id} product={{ ...product, id: product._id }} />
        ))}
      </div>

      <h3 className="mini-title">Topwear</h3>
      <br />
      <div className="products">
        {menTopProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {extraProducts.topwear.map((product) => (
          <ProductCard key={product._id} product={{ ...product, id: product._id }} />
        ))}
      </div>
    </div>
  );
};

export default Men;