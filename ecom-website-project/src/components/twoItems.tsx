import React, { Fragment, useState, useEffect } from "react";
import "../style/twoItems.css";
import { Link } from "react-router-dom";

const TwoItems: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Set the array of products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Fragment>
      <section className="two-items">
        <div className="item-one">
          <div className="item-round-pic1">
            <img
              className="twoprod-img"
              src={products[4] && products[4].image}
              alt="A brown jacket"
            />
          </div>
          <div className="item-text">
            <p className="item-headline">PST... THE BEST DEAL IS RIGHT HERE</p>
            <button className="item-cta2">
              <Link
                to={`/shop/products/${encodeURIComponent(
                  (products[4] && products[4].title) || ""
                )}`}
              >
                GET ITEM NOW
              </Link>
            </button>
          </div>
        </div>
        <div className="item-two">
          <div className="item-round-pic2">
            <img
              className="twoprod-img"
              src={products[5] && products[5].image}
              alt="Blue long sleeeve shirt"
            />
          </div>
          <div className="item-text">
            <button className="item-cta2">
              <Link
                to={`/shop/products/${encodeURIComponent(
                  (products[5] && products[5].title) || ""
                )}`}
              >
                GET ITEM NOW
              </Link>
            </button>
            <p className="item-headline-two">
              FOR A LIMITED TIME GET 50% OFF YOUR PURCHASE WHEN YOU SPEND OVER
              $30...
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TwoItems;
