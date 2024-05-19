import React from "react";
import { Link } from "react-router-dom";
import "../style/itemCarousal.css";

interface ItemCardInt {
  itemImage: string;
  altText: string;
  itemTitle: string;
  itemDesc: string;
  itemPrice: number;
}

const ItemCard: React.FC<ItemCardInt> = (props) => {
  return (
    <div className="item-card">
      <div className="item-img">
        <img
          className="item-card-img"
          src={props.itemImage}
          alt={props.altText}
        />
      </div>
      <div className="item-info">
        <p className="item-title">
          <Link to="/shop/products">{props.itemTitle}</Link>
        </p>
        <p className="item-description">{props.itemDesc}</p>
        <p className="item-price">${props.itemPrice}</p>
      </div>
    </div>
  );
};

export default ItemCard;
