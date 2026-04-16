
import Offer from "../components/Offer"; // <-- import karo
import Popular from "../components/Popular";
import Category from "../components/Category";
import TwentyPercentOff from "./twentypercentoff";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">

      {/* Header ke niche offer slider */}
      <Offer />

      {/* Popular picks */}
      <Popular />

      {/* Offer Navigation Sections */}
      <section className="offer-navigation">
        <h2 className="section-title">Special Offers</h2>
        <div className="offer-links">
          <Link to="/fifty-percent-off" className="offer-link">
            <div className="offer-card">
              <h3>Girls Offers - 50% OFF</h3>
              <p>Amazing discounts on girls' clothing</p>
            </div>
          </Link>
          <Link to="/sixty-percent-off" className="offer-link">
            <div className="offer-card">
              <h3>Men Offers - 60% OFF</h3>
              <p>Unbeatable deals on men's fashion</p>
            </div>
          </Link>
          <Link to="/twenty-percent-off" className="offer-link">
            <div className="offer-card">
              <h3>Women Offers - 20% OFF</h3>
              <p>Exclusive discounts on women's collection</p>
            </div>
          </Link>
          <Link to="/thirty-percent-off" className="offer-link">
            <div className="offer-card">
              <h3>Kids Offers - 30% OFF</h3>
              <p>Special offers on boys' clothing</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Discounted products */}
      <TwentyPercentOff />

      {/* Category section */}
      <Category />

    </main>
  );
};

export default Home;