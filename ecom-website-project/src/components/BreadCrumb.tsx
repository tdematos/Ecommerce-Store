import React from "react";
import { Link } from "react-router-dom";
import "../style/breadcrumb.css";

interface BcProps {
  home?: string;
  shop?: string;
  products?: string;
  arrow1?: string;
  arrow2?: string;
}

const BreadCrumb: React.FC<BcProps> = (props) => {
  return (
    <div className="bc-container">
      <Link className="bc-text bc-link" to="/">
        {props.home}
      </Link>
      <p className="bc-text">{props.arrow1}</p>
      <Link className="bc-text bc-link" to="/shop/collection">
        {props.shop}
      </Link>
      <p className="bc-text">{props.arrow2}</p>
      <Link className="bc-text bc-link" to="/shop/Products">
        {props.products}
      </Link>
    </div>
  );
};

export default BreadCrumb;
