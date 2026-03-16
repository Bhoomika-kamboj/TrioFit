import React from "react";
import "@google/model-viewer";
import { useNavigate, useParams } from "react-router-dom";
import { topProducts, bottomProducts, ethnicProducts, kidEthnicProducts } from "../data/products";

const TryOn3D = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productId = Number(id);
  const product =
    topProducts.find((p) => p.id === productId) ||
    bottomProducts.find((p) => p.id === productId) ||
    ethnicProducts.find((p) => p.id === productId) ||
    kidEthnicProducts.find((p) => p.id === productId);

  if (!product) return <p>Product not found for 3D try-on 😢</p>;

  const modelUrl =
    product.modelUrl ||
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

  return (
    <main className="tryon-page">
      <h1>3D Try-On: {product.name}</h1>
      <p className="price">₹{product.price}</p>

      <div className="tryon-viewer-grid">
        <div className="tryon-photo">
          <img src={product.image} alt={product.name} />
        </div>

        <model-viewer
          src={modelUrl}
          alt={`3D model of ${product.name}`}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          style={{ width: "100%", height: "420px", borderRadius: "15px" }}
        />
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </main>
  );
};

export default TryOn3D;
