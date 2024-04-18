import React, { Fragment } from "react";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import NavBar from "../Navigation";
import Footer from "../Footer";
import "../../style/login.css";

const Login: React.FC = () => {
  return (
    <Fragment>
      <NavBar />
      <section className="login-container">
        <div className="login-box">
          <div className="login-text">
            <h3>Log In</h3>
            <p>
              New customer? <a href="">Sign Up</a> to check out and view or
              manage your subscription or one-time purchase.
            </p>
            <hr className="hr-line" />
            <p className="login-p-2">
              Insert your email and password below to Log In. Utilize the forgot
              password link below if you do not remember your password.
            </p>
          </div>
          <div className="form-container">
            <form action="" className="form">
              <div className="email-container ic">
                <label htmlFor="" className="login-label">
                  EMAIL ADDRESS
                </label>
                <input type="text" className="login-input" />
              </div>
              <div className="password-container ic">
                <label htmlFor="" className="login-label">
                  PASSWORD
                </label>
                <input type="text" className="login-input" />
              </div>

              <button className="form-button">Sign In</button>
            </form>
          </div>
          <div className="forgot-signup">
            <Link to="passwordreset" className="reset-links">
              Forgot/Reset password
            </Link>
            <Link to="register" className="reset-links">
              Not a member? Join us!
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Login;
