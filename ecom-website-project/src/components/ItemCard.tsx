import React from "react";
import { Link } from "react-router-dom";
import "../style/itemCarousal.css";

const ItemCard: React.FC = () => {
  return (
    <div className="item-card">
      <div className="item-img"></div>
      <div className="item-info">
        <p className="item-title">
          <Link to="/shop/products">Extreme Golf Club</Link>
        </p>
        <p className="item-description">Carbon fiber driver</p>
        <p className="item-price">$75.99</p>
      </div>
    </div>
  );
};

export default ItemCard;
