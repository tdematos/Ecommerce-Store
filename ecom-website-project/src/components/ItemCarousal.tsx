import React, { Fragment } from "react/jsx-runtime";
import "../style/itemCarousal.css";

const ItemCarousal: React.FC = () => {
  return (
    <Fragment>
      <section className="item-carousal">
        <div className="inner-item-container">
          <div className="item-menu-access">
            <h3>SELECT ITEMS</h3>
            <button className="item-menu-btn">View All</button>
          </div>
          <div className="left-select">
            <p>&lt;</p>
          </div>
          <div className="item-box">
            <div className="item-card">
              <div className="item-img"></div>
              <div className="item-info">
                <p className="item-title">Extreme Golf Club</p>
                <p className="item-description">Carbon fiber driver</p>
                <p className="item-price">$75.99</p>
              </div>
            </div>

            <div className="item-card">
              <div className="item-img"></div>
              <div className="item-info">
                <p className="item-title">Extreme Golf Club</p>
                <p className="item-description">Carbon fiber driver</p>
                <p className="item-price">$75.99</p>
              </div>
            </div>

            <div className="item-card">
              <div className="item-img"></div>
              <div className="item-info">
                <p className="item-title">Extreme Golf Club</p>
                <p className="item-description">Carbon fiber driver</p>
                <p className="item-price">$75.99</p>
              </div>
            </div>

            <div className="item-card">
              <div className="item-img"></div>
              <div className="item-info">
                <p className="item-title">Extreme Golf Club</p>
                <p className="item-description">Carbon fiber driver</p>
                <p className="item-price">$75.99</p>
              </div>
            </div>

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
