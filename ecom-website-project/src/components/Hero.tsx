import React, { Fragment, useEffect, useState } from "react";
import "../style/hompage.css";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtext: string;
  text: string;
  btntext: string;
  btntext2: string;
}

const HeroSection: React.FC<HeroProps> = (props) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
          {products.length > 0 && (
            <img
              className="hero-image"
              src={products[0].image}
              alt="backpack"
            />
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;
