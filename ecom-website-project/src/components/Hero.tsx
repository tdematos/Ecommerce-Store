import React, { Fragment } from "react";
import "../style/hompage.css";
import imgLogo from "../assets/hero-img.png";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtext: string;
  text: string;
  btntext: string;
  btntext2: string;
}

const HeroSection: React.FC<HeroProps> = (props) => {
  return (
    <Fragment>
      <section className="hero">
        <div className="hero-cta">
          <div className="hero-text">
            <h2>{props.title}</h2>
            <p className="hero-subtext">{props.subtext}</p>
            <p>{props.text}</p>
            <button className="cta-button">
              <Link to="shop/collection">{props.btntext}</Link>
            </button>
            <p className="hero-subtext">{props.btntext2}</p>
          </div>
        </div>
        <div className="hero-img">
          <img className="hero-image" src={imgLogo} alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;
