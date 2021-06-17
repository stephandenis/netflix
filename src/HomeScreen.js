import Banner from "./Banner";
import "./HomeScreen.css";
import Navbar from "./Navbar";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Rows */}
    </div>
  );
};

export default HomeScreen;
