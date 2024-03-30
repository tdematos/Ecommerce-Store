import "../style/hompage.css";
import { FaCartShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import NavLinks from "./NavLinks";
import Link from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">WON STOP SHOP</h2>
        <NavLinks aboutme="ABOUT" shop="SHOP" />
        <div className="checkout">
          <a href="" className="checkout-link">
            <IoPerson className="icon" />
            Sign In
          </a>
          <a href="" className="checkout-link">
            <FaCartShopping className="icon" />
            (0)
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
