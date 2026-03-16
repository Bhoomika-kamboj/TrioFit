import React from 'react'
import ProductCard from "../components/ProductCard";
import { topProducts, bottomProducts, ethnicProducts} from "../data/products";

const Women = () => {
  return (
    <div>
      <h1>Women✨</h1>
      <br />

      <h3>TopWear</h3>
      <br />
      <div className="products">
        {topProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <br />
      <h3>BottomWear</h3>
      <br />
      <div className="products">
        {bottomProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <br />
      <h3>Ethnicwear</h3>
      <br />
      <div className="products">
        {ethnicProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  )
}

export default Women
