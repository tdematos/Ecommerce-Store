import "../style/navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { Link } from "../../node_modules/react-router-dom/dist/index";

interface navLinks {
  about?: string;
  shop?: string;
  onMouseOver?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

const NavBar: React.FC<navLinks> = (props) => {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">
          <Link className="logo-link" to="/">
            WON STOP SHOP
          </Link>
        </h2>
        <NavLinks
          aboutme={props.about || ""}
          shop={props.shop || ""}
          onMouseOver={props.onMouseOver}
        />
        <div className="checkout">
          <Link to="account/login" className="checkout-link">
            <IoPerson className="icon" />
            Sign In
          </Link>
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
