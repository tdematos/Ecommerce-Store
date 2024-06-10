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
  const [selectedBall, setSelectedBall] = useState<number>(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBallClick = (index: number) => {
    setSelectedBall(index);
  };

  const getCarouselTransform = () => {
    switch (selectedBall) {
      case 1:
        return "translateX(-22vw)";
      case 2:
        return "translateX(-42vw)";
      default:
        return "translateX(0)";
    }
  };

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
          <div className="item-box">
            <div
              className="item-inner-box"
              style={{ transform: getCarouselTransform() }}
            >
              {products.map((product) => (
                <ItemCard
                  key={product.id}
                  itemImage={product.image}
                  altText={product.title}
                  itemTitle={product.title}
                  itemDesc={truncateText(product.description, 50)}
                  itemPrice={product.price}
                />
              ))}
            </div>
          </div>
          <div className="round-selectors">
            <div
              onClick={() => handleBallClick(0)}
              className={`round-selector ${
                selectedBall === 0 ? "selected" : ""
              }`}
            ></div>
            <div
              onClick={() => handleBallClick(1)}
              className={`round-selector ${
                selectedBall === 1 ? "selected" : ""
              }`}
            ></div>
            <div
              onClick={() => handleBallClick(2)}
              className={`round-selector ${
                selectedBall === 2 ? "selected" : ""
              }`}
            ></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ItemCarousal;
