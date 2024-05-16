import React, { Fragment } from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";

interface FooterProps {
  shopLink?: string;
  aboutLink?: string;
  tosLink?: string;
  privacyPolicyLink?: string;
  contactUsLink?: string;
}

const Footer: React.FC<FooterProps> = ({
  shopLink,
  aboutLink,
  tosLink,
  privacyPolicyLink,
  contactUsLink,
}) => {
  let currentDate: Date = new Date();
  let currentYear: number = currentDate.getFullYear();

  return (
    <Fragment>
      <footer>
        <div className="site-links-container">
          <ul className="link-list">
            <li>
              <Link to={shopLink}>Shop</Link>
            </li>
            <li>
              <Link to={aboutLink}>About Us</Link>
            </li>
            <li>
              <Link to={tosLink}>Terms of Service</Link>
            </li>
            <li>
              <Link to={privacyPolicyLink}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={contactUsLink}>Contact US</Link>
            </li>
          </ul>
        </div>
        <div className="social-media-links"></div>
        <div className="copyright-links">
          <p>{`© ${currentYear}, Won Stop Shop. All Rights Reserved.`}</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
