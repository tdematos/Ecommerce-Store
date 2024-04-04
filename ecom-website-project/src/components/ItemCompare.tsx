import React, { Fragment } from "react";
import CompareColumn from "./CompairColumn";
import "../style/itemCompare.css";

const ItemCompare: React.FC = () => {
  return (
    <Fragment>
      <section className="compare-section">
        <div className="two-item-pics">
          <div className="compare-heading">
            <h3>THIS ONE IS BETTER...</h3>
            <p className="compare-subheading">
              This limited time promotion is running out soon.
            </p>
            <div className="pic-container">
              <div className="item-container">
                <div className="item-photo-one"></div>
                <h4>World Series Club</h4>
                <button className="item-cta">BUY FOR $30</button>
              </div>

              <div className="item-container">
                <div className="item-photo-two"></div>
                <h4>World Series Club</h4>
                <button className="item-cta">BUY FOR $30</button>
              </div>
            </div>
          </div>
        </div>
        ;
        <div className="item-benefits">
          <h3 className="benefit-header">Benefits</h3>
          <hr />
          <div className="compare-container">
            <CompareColumn />
            <CompareColumn />
          </div>
        </div>
        <div className="verticle-compare"></div>
      </section>
    </Fragment>
  );
};

export default ItemCompare;
