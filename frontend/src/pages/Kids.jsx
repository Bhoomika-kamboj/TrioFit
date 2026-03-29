import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProductCard from '../components/ProductCard'
import { 
  kidEthnicProducts, 
  kidJeansProducts, 
  kidShirtsProducts, 
  kidTShirtsProducts,
  kidGirlsBottomProducts,
  kidGirlsDressProducts,
  kidGirlsEthnicProducts,
  kidGirlsTopProducts
} from '../data/products'

const Kids = () => {
  const [extraProducts, setExtraProducts] = useState({
    boys: [],
    girls: [],
  });

  useEffect(() => {
    fetchSellerProducts();
  }, []);

  const fetchSellerProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products/all");
      const kidsProducts = data.products.filter((p) => p.category === "Kids");
      
      setExtraProducts({
        boys: kidsProducts.filter((p) => p.subcategory === "Boys clothing"),
        girls: kidsProducts.filter((p) => p.subcategory === "Girls clothing"),
      });
    } catch (error) {
      console.error("Error fetching seller products:", error);
    }
  };

  return (
    <div>
    <h1 className='Title'>Kids </h1>
      <br />
      <h3 className='mini-title'>Kids Ethnicwear</h3>
      <br />
      <div className="products">
        {kidEthnicProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h3 className='mini-title'>Kids Jeans</h3>
      <br />
      <div className="products">
        {kidJeansProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h3 className='mini-title'>Kids Shirts</h3>
      <br />
      <div className="products">
        {kidShirtsProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h3>Kids T-Shirts</h3>
      <br />
      <div className="products">
        {kidTShirtsProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* New Girls Sections */}
      <h3>Girls Bottoms</h3>
      <br />
      <div className="products">
        {kidGirlsBottomProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {extraProducts.girls.map((p) => (
          <ProductCard key={p._id} product={{ ...p, id: p._id }} />
        ))}
      </div>

      <h3>Girls Dresses</h3>
      <br />
      <div className="products">
        {kidGirlsDressProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h3>Girls Ethnicwear</h3>
      <br />
      <div className="products">
        {kidGirlsEthnicProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h3>Girls Tops</h3>
      <br />
      <div className="products">
        {kidGirlsTopProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {extraProducts.boys.map((p) => (
          <ProductCard key={p._id} product={{ ...p, id: p._id }} />
        ))}
      </div>
    </div>
  )
}

export default Kids