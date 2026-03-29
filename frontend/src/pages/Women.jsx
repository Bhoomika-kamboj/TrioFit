import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { topProducts, bottomProducts, ethnicProducts} from "../data/products";

const Women = () => {
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
      const womenProducts = data.products.filter((p) => p.category === "Women");
      
      setExtraProducts({
        topwear: womenProducts.filter((p) => p.subcategory === "Topwear"),
        bottomwear: womenProducts.filter((p) => p.subcategory === "Bottomwear"),
        ethnic: womenProducts.filter((p) => p.subcategory === "Ethnic"),
      });
    } catch (error) {
      console.error("Error fetching seller products:", error);
    }
  };

  return (
    <div>
      <h1 className='Title'>Women</h1>
      <br />

      <h3 className='mini-title'>TopWear</h3>
      <br />
      <div className="products">
        {topProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {extraProducts.topwear.map((p) => (
          <ProductCard key={p._id} product={{ ...p, id: p._id }} />
        ))}
      </div>

      <br />
      <h3 className='mini-title'>BottomWear</h3>
      <br />
      <div className="products">
        {bottomProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {extraProducts.bottomwear.map((p) => (
          <ProductCard key={p._id} product={{ ...p, id: p._id }} />
        ))}
      </div>

      <br />
      <h3 className='mini-title'>Ethnicwear</h3>
      <br />
      <div className="products">
        {ethnicProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {extraProducts.ethnic.map((p) => (
          <ProductCard key={p._id} product={{ ...p, id: p._id }} />
        ))}
      </div>

    </div>
  )
}

export default Women
