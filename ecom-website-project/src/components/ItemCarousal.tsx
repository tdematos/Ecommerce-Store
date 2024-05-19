import React, { Fragment } from "react";
import "../style/itemCarousal.css";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import spyro from "../assets/spyro.png";
import smash from "../assets/smash.png";
import mario from "../assets/mariobros.png";
import soccer from "../assets/marioSoccer.png";

interface ItemCarousalInt {}

const ItemCarousal: React.FC<ItemCarousalInt> = (props) => {
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
            <ItemCard
              itemImage={spyro}
              altText="spyro game"
              itemTitle="Spyro"
              itemDesc="Switch Game"
              itemPrice={49}
            />
            <ItemCard
              itemImage={smash}
              altText="Super Smash Bros Game"
              itemTitle="Super Smash Bros Ultimate"
              itemDesc="Switch Game"
              itemPrice={49}
            />
            <ItemCard
              itemImage={mario}
              altText="Super Mario Maker Game"
              itemTitle="Super Mario Maker 2"
              itemDesc="Switch Game"
              itemPrice={49}
            />
            <ItemCard
              itemImage={soccer}
              altText="Mario Striker Soccer Game"
              itemTitle="Mario Strikers Football"
              itemDesc="Switch Game"
              itemPrice={49}
            />
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
