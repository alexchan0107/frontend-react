import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./assests/scss/style.scss"
import "./assests/scss/responsive.scss"
import Banner from "./components/homepage/banner/Banner";
import Categories from "./components/homepage/categories/Categories"
import NewArrival from "./components/homepage/newArrivals/NewArrival";
import OurFavTees from "./components/homepage/ourFavouriteTees/OurFavTees";
import Subscribe from "./components/homepage/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Categories />
      <NewArrival />
      <OurFavTees />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
