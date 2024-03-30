import React, { Fragment } from "react";
import "../style/hompage.css";

const HeroSection: React.FC = () => {
  return (
    <Fragment>
      <section className="hero">
        <div className="hero-cta">
          <div className="hero-text">
            <h2>ALL OF THIS FOR 50% OFF</h2>
            <p className="hero-subtext">NEW MEMBERS GET ADDITIONAL DISCOUNT</p>
            <p>all you need is here at WON STOP SHOP.</p>
            <button className="cta-button">START SHOPPING</button>
            <p>FREE SHIPPING</p>
          </div>
        </div>
        <div className="hero-img"></div>
      </section>
    </Fragment>
  );
};

export default HeroSection;
