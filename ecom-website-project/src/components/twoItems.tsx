import React, { Fragment } from "react";
import "../style/twoItems.css";

const TwoItems: React.FC = () => {
  return (
    <Fragment>
      <section className="two-items">
        <div className="item-one">
          <div className="item-round-pic1"></div>
          <div className="item-text">
            <p className="item-headline">PST... THE BEST DEAL IS RIGHT HERE</p>
            <button className="item-cta2">GET ITEM NOW</button>
          </div>
        </div>
        <div className="item-two">
          <div className="item-round-pic2"></div>
          <div className="item-text">
            <button className="item-cta2">GET ITEM NOW</button>
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
