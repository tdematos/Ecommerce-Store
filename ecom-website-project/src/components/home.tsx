import React, { Fragment } from "react";
import Banner from "./Banner";
import NavBar from "./Navigation";
import HeroSection from "./Hero";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Banner />
      <NavBar />
      <HeroSection />
      <section className="item-carousal"></section>
      <section className="item-compare"></section>
      <section className="two-items"></section>
      <section className="customer-testimonials"></section>
      <section className="cta"></section>
      <section className="item-carousal"></section>
      <footer></footer>
    </Fragment>
  );
};

export default HomePage;
