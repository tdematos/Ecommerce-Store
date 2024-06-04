import React from "react";
import { Link } from "react-router-dom";
import "../style/itemCarousal.css";

interface ItemCardInt {
  itemImage?: string;
  altText?: string;
  itemTitle?: string;
  itemDesc?: string;
  itemPrice?: number;
}

const ItemCard: React.FC<ItemCardInt> = ({
  itemImage,
  altText,
  itemTitle,
  itemDesc,
  itemPrice,
}) => {
  return (
    <div className="item-card">
      <div className="item-img">
        <img className="item-card-img" src={itemImage} alt={altText} />
      </div>
      <div className="item-info">
        <p className="item-title">
          <Link to={`/shop/products/${encodeURIComponent(itemTitle || "")}`}>
            {itemTitle}
          </Link>
        </p>
        <p className="item-description">{itemDesc}</p>
        <p className="item-price">${itemPrice}</p>
      </div>
    </div>
  );
};

export default ItemCard;
