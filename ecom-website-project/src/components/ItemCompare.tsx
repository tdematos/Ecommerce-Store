import React, { Fragment, useState, useEffect } from "react";
import CompareColumn from "./CompairColumn";
import "../style/itemCompare.css";

const ItemCompare: React.FC = () => {
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
      <section className="compare-section">
        <div className="two-item-pics">
          <div className="compare-heading">
            <h3>THIS ONE IS BETTER...</h3>
            <p className="compare-subheading">
              This limited time promotion is running out soon.
            </p>
            <div className="pic-container">
              <div className="item-container">
                <div className="item-photo-one">
                  {products[2] && (
                    <img
                      className="comp-image"
                      src={products[2].image}
                      alt="shirt"
                    />
                  )}
                </div>
                <h4>{products[2].title}</h4>
                <button className="item-cta">BUY FOR $30</button>
              </div>

              <div className="item-container">
                <div className="item-photo-two">
                  {products[3] && (
                    <img
                      className="comp-image"
                      src={products[3].image}
                      alt="shirt"
                    />
                  )}
                </div>
                <h4>{products[3].title}</h4>
                <button className="item-cta">BUY FOR $30</button>
              </div>
            </div>
          </div>
        </div>
        ;
        <div className="item-benefits">
          <h3 className="benefit-header">Benefits</h3>
          <hr />
          <div className="compare-container">
            <CompareColumn />
            <CompareColumn />
          </div>
        </div>
        <div className="verticle-compare"></div>
      </section>
    </Fragment>
  );
};

export default ItemCompare;
