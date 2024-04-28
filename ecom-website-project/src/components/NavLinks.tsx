import React from "react";
import "../style/hompage.css";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  aboutme: string;
  shop: string;
  onMouseOver?: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavLinks: React.FC<NavLinksProps> = (props) => {
  return (
    <div className="menu-selection">
      <ul>
        <li>
          <NavLink to="/about" className="nav-link">
            {props.aboutme}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/collection"
            className="nav-link"
            onMouseOver={props.onMouseOver}
          >
            {props.shop}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
