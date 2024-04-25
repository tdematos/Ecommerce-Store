import React from "react";
import "../style/hompage.css";
import { Link } from "../../node_modules/react-router-dom/dist/index";

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
          <Link to="about" className="nav-link">
            {props.aboutme}
          </Link>
        </li>
        <li>
          <Link to="shop" className="nav-link" onMouseOver={props.onMouseOver}>
            {props.shop}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
