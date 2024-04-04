import React, { Fragment } from "react";
import "../style/twoItems.css";

const TwoItems: React.FC = () => {
  return (
    <Fragment>
      <section className="two-items">
        <div className="item-one">
          <div className="item-round-pic"></div>
          <div className="item-text">
            <p className="item-headline">
              PST... THE BEST DEAL IS RIGHT IN FRONT OF YOU
            </p>
            <button className="item-cta2">GET ITEM NOW</button>
          </div>
        </div>
        <div className="item-two"></div>
      </section>
    </Fragment>
  );
};

export default TwoItems;
