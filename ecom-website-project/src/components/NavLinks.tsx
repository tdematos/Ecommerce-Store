import React from "react";
import "../style/hompage.css";

interface NavLinksProps {
  aboutme: string;
  shop: string;
}

const NavLinks: React.FC<NavLinksProps> = (props) => {
  return (
    <div className="menu-selection">
      <ul>
        <li>
          <a href="" className="nav-link">
            {props.aboutme}
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            {props.shop}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
