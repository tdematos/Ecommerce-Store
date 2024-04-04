import React, { Fragment } from "react";
import Banner from "./Banner";
import NavBar from "./Navigation";
import HeroSection from "./Hero";
import SmallBanner from "./SmallBanner";
import ItemCarousal from "./ItemCarousal";
import ItemCompare from "./ItemCompare";
import TwoItems from "./twoItems";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Banner />
      <NavBar />
      <HeroSection />
      <SmallBanner />
      <ItemCarousal />
      <ItemCompare />
      <TwoItems />
      <section className="customer-testimonials"></section>
      <section className="cta"></section>
      <ItemCarousal />
      <footer></footer>
    </Fragment>
  );
};

export default HomePage;
