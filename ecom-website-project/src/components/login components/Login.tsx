import React, { Fragment } from "react";
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
              passowrd link below if you do not remember your password.
            </p>
          </div>
          <div className="form-container"></div>
          <div className="forgot-signup"></div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Login;
