import React, { Fragment } from "react";
import Banner from "./Banner";
import NavBar from "./Navigation";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Banner />
      <NavBar />
      <section className="hero">
        <h1>My store</h1>
      </section>
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
