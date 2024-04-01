import React, { Fragment } from "react";
import Banner from "./Banner";
import NavBar from "./Navigation";
import HeroSection from "./Hero";
import SmallBanner from "./SmallBanner";
import ItemCarousal from "./ItemCarousal";
import ItemCompare from "./ItemCompare";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Banner />
      <NavBar />
      <HeroSection />
      <SmallBanner />
      <ItemCarousal />
      <ItemCompare />
      <section className="two-items"></section>
      <section className="customer-testimonials"></section>
      <section className="cta"></section>
      <section className="item-carousal"></section>
      <footer></footer>
    </Fragment>
  );
};

export default HomePage;
