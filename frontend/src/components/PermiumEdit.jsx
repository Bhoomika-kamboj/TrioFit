import React from "react";
import premiumItems from "../data/PremiumEdit";

const PremiumEdit = () => {
  return (
    <section className="premium-section">
      <div className="premium-header">
        <h2>The Premium Edit</h2>
        <p>Timeless picks from premium brands</p>
      </div>

      <div className="premium-grid">
        {premiumItems.map((item) => (
          <a key={item.id} href="#" className={`premium-card ${item.colorClass}`}>
            <img src={item.img} alt={item.alt} />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PremiumEdit;