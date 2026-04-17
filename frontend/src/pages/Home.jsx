import Offer from "../components/Offer"; // <-- import karo
import Popular from "../components/Popular";
import Category from "../components/Category";
import TwentyPercentOff from "./twentypercentoff";
import FiftyPercentOff from "./fiftypercentoff";
import ThirtyPercentOff from "./thirtypercentoff";
import SixtyPercentOff from "./sixtypercentoff";

const Home = () => {
  return (
    <main className="home">

      {/* Header ke niche offer slider */}
      <Offer />
    
      {/* Popular picks */}
      <Popular />
        {/* Discounted products */}
      <TwentyPercentOff />
      <FiftyPercentOff />
      <ThirtyPercentOff />
      <SixtyPercentOff />
      {/* Category section */}
      <Category />



      
    </main>
  );
};

export default Home;
