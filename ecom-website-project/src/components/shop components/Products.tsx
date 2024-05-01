import React from "react";
import BreadCrumb from "../BreadCrumb";
import "../../style/products.css";

const Products: React.FC = () => {
  return (
    <div>
      <BreadCrumb
        home="Home"
        arrow1="&gt;"
        shop="Shop"
        arrow2="&gt;"
        products="Products"
      />
      <div className="item-Disp-container">
        <div className="photo-carousal">
          <div className="item-select">
            <div className="sm-photo">
              <a href=""></a>
            </div>
            <div className="sm-photo">
              <a href=""></a>
            </div>
          </div>
          <div className="main-item-display">
            <div className="main-item">
              <a href=""></a>
            </div>
          </div>
        </div>
        <div className="item-disp-info">
          <div className="title-text">
            <h4 className="item-disp-title">Club Max Z</h4>
            <p className="item-disp-desc">
              Extremely strong titanium which is made for the pro's
            </p>
            <p className="item-price">$10.00</p>
          </div>

          <div className="item-descriptioin-container">
            <p className="item-description">
              Club is made out of titanium, and has unbelieveable power when
              using on the field. Will make anyone feel like a pro.
            </p>
            <ul id="item-list-info">
              <li>Made out of unique titanium</li>
              <li>Lighter than a feather</li>
              <li>Comes in one color</li>
              <li>handle is unbreakable</li>
            </ul>
          </div>

          <div className="quantity-container">
            <div className="quant-title">Quantity</div>
            <div className="quatity-box">
              <div className="quant-counter">
                <div className="number-count">
                  <p>1</p>
                </div>
                <div className="count-direction">
                  <button className="count-up">&#9650;</button>
                  <button className="count-down">&#9660;</button>
                </div>
              </div>
              <button className="count-cta">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
