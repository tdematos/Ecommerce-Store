import React, { Fragment, useState, useEffect } from "react";
import "../style/cta-section.css";

const CTASection: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Set the array of products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Fragment>
      <section className="cta-section">
        <div className="small-banner">
          <p>IT'S MORE THAN JUST AN ITEM.</p>
        </div>
        <div className="cta-container">
          <div className="cta-image">
            <img
              className="cta-image-1"
              src={products[1] && products[1].image}
              alt=""
            />
          </div>
          <div className="cta-text">
            <div className="cta-box">
              <h3 className="cta-title">EVERY ITEM IS HAND CRAFTED</h3>
              <p className="cta-subtitle">Find the perfect item in our store</p>
              <button className="cta-btn">Shop Site Wide</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CTASection;
