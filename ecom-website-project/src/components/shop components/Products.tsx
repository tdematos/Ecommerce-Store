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
        <div className="photo-carousal"></div>
        <div className="item-disp-info">
          <div className="title-text">
            <h4 className="item-title">Club Max Z</h4>
            <p>Extremely strong titanium which is made for the pro's</p>
            <p className="item-price">$10</p>
          </div>

          <div className="quantity-container">
            <div className="quant-title">Quantity</div>
            <div className="quatity-box">
              <div className="quant-counter">
                <div className="number-count">
                  <p>1</p>
                </div>
                <div className="count-direction">
                  <div className="count-up">Up</div>
                  <div className="count-down">Down</div>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
