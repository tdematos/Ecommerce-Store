import React from "react";
import ItemCard from "../ItemCard";

const ItemContainer: React.FC = () => {
  return (
    <div className="item-Container">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
};

export default ItemContainer;
