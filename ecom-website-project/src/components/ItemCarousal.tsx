import React, { Fragment, useEffect, useState } from "react";
import "../style/itemCarousal.css";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

const ItemCarousal: React.FC = () => {
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
      <section className="item-carousal">
        <div className="inner-item-container">
          <div className="item-menu-access">
            <h3>SELECT ITEMS</h3>
            <button className="item-menu-btn">
              <Link to="shop/collection">View All</Link>
            </button>
          </div>
          <div className="left-select">
            <p>&lt;</p>
          </div>
          <div className="item-box">
            {products.map((product) => (
              <ItemCard
                key={product.id}
                itemImage={product.image}
                altText={product.title}
                itemTitle={product.title}
                itemDesc={truncateText(product.description, 50)} // Truncate description
                itemPrice={product.price}
              />
            ))}
            <div className="right-select">
              <p>&gt;</p>
            </div>
          </div>
          <div className="round-selectors">
            <div className="round-selector left"></div>
            <div className="round-selector middle"></div>
            <div className="round-selector right"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ItemCarousal;
