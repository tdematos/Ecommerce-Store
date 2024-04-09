import React, { Fragment } from "react";
import "../style/Footer.css";

const Footer: React.FC = () => {
  return (
    <Fragment>
      <footer>
        <div className="site-links-container">
          <ul className="link-list">
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Contact US</a>
            </li>
          </ul>
        </div>
        <div className="social-media-links"></div>
        <div className="copyright-links">
          <p>© 2024, Won Stop Shop. All Rights Reserved.</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
