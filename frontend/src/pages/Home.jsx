
import Offer from "../components/Offer"; // <-- import karo
import Popular from "../components/Popular";
import Category from "../components/Category";

const Home = () => {
  return (
    <main className="home">

      {/* Header ke niche offer slider */}
      <Offer />
      {/* Popular picks */}
      <Popular />
      {/* Category section */}
      <Category />



      
    </main>
  );
};

export default Home;