import React from "react";

const PremiumEdit = () => {
  return (
    <section className="premium-section">
      <div className="premium-header">
        <h2>The Premium Edit</h2>
        <p>Timeless picks from premium brands</p>
      </div>

      <div className="premium-grid">
        <a href="#" className="premium-card pink">
          <img src="../assets/PremiumEdit/black.png" alt="Chrome Yellow Bag" />
          <span>chrome yellow</span>
        </a>

        <a href="#" className="premium-card peach-pink">
          <img src="../assets/PremiumEdit/blue.png" alt="Aqua Rush Bag" />
          <span>aqua rush</span>
        </a>

        <a href="#" className="premium-card peach">
          <img src="../assets/PremiumEdit/image.png" alt="Pink Peach Bag" />
          <span>pink peach</span>
        </a>

        <a href="#" className="premium-card green">
          <img src="../assets/PremiumEdit/green.png" alt="Matcha Green Bag" />
          <span>matcha green</span>
        </a>

        <a href="#" className="premium-card mint">
          <img src="../assets/PremiumEdit/white.png" alt="Cloud White Bag" />
          <span>cloud white</span>
        </a>

        <a href="#" className="premium-card sky">
          <img src="../assets/PremiumEdit/brown.png" alt="Back To Brown Bag" />
          <span>back to brown</span>
        </a>

        <a href="#" className="premium-card sky">
          <img src="../assets/PremiumEdit/cream.png" alt="Cream Delight Bag" />
          <span>cream delight</span>
        </a>

        <a href="#" className="premium-card lavender">
          <img src="../assets/PremiumEdit/black.png" alt="Back To Black Bag" />
          <span>back to black</span>
        </a>
      </div>
    </section>
  );
};

export default PremiumEdit;