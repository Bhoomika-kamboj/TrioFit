import React from "react";
import ProductCard from "../components/ProductCard";
import {
  menBottomProducts,
  menEthnicProducts,
  menTopProducts,
} from "../data/products";

const Men = () => {
  return (
    <div>
      <br />
      <h3>Men Bottoms</h3>
      <br />
      <div className="products">
        { menBottomProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h3>Men Ethnic Wear</h3>
      <br />
      <div className="products">
        {menEthnicProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h3>Men Topwear</h3>
      <br />
      <div className="products">
        {menTopProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Men;