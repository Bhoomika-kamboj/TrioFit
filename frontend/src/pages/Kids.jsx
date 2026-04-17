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
    <main className="catalog-page">
    <section className="catalog-hero">
      <div className="catalog-hero-card">
        <h1 className='Title'>Kids</h1>
        <p>Playful browsing with cleaner spacing, faster image preview, and easier mobile taps.</p>
      </div>
      <div className="catalog-hero-panel">
        <div className="catalog-stat">
          <strong>Boys</strong>
          <p>Ethnicwear, jeans, shirts, and tees grouped into easier sections.</p>
        </div>
        <div className="catalog-stat">
          <strong>Girls</strong>
          <p>Bottoms, dresses, tops, and festive looks with the same see-more flow.</p>
        </div>
        <div className="catalog-stat">
          <strong>Responsive</strong>
          <p>Cards stack better on smaller screens without losing image focus.</p>
        </div>
      </div>
    </section>

      <section className="catalog-section">
      <h3 className='mini-title'>Kids Ethnicwear</h3>
      <div className="products">
        {kidEthnicProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      </section>

      <section className="catalog-section">
      <h3 className='mini-title'>Kids Jeans</h3>
      <div className="products">
        {kidJeansProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      </section>

      <section className="catalog-section">
      <h3 className='mini-title'>Kids Shirts</h3>
      <div className="products">
        {kidShirtsProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      </section>

      <section className="catalog-section">
      <h3 className='mini-title'>Kids T-Shirts</h3>
      <div className="products">
        {kidTShirtsProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      </section>

      <section className="catalog-section">
      <h3 className='mini-title'>Girls Bottoms</h3>
      <div className="products">
        {kidGirlsBottomProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {extraProducts.girls.map((p) => (
          <ProductCard key={p._id} product={{ ...p, id: p._id }} />
        ))}
      </div>
      </section>

      <section className="catalog-section">
      <h3 className='mini-title'>Girls Dresses</h3>
      <div className="products">
        {kidGirlsDressProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      </section>

      <section className="catalog-section">
      <h3 className='mini-title'>Girls Ethnicwear</h3>
      <div className="products">
        {kidGirlsEthnicProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      </section>

      <section className="catalog-section">
      <h3 className='mini-title'>Girls Tops</h3>
      <div className="products">
        {kidGirlsTopProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {extraProducts.boys.map((p) => (
          <ProductCard key={p._id} product={{ ...p, id: p._id }} />
        ))}
      </div>
      </section>
    </main>
  )
}

export default Kids