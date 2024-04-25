import React from "react";
import { Link } from "../../../node_modules/react-router-dom/dist/index";

const Register: React.FC = () => {
  return (
    <div>
      <section className="login-container">
        <div className="login-box">
          <div className="login-text">
            <h3>Log In</h3>
            <p>
              Already have an account? <a href="">Log In</a>
            </p>
            <p className="login-p-3">
              Sign up below to check out and view or manage your one-time or
              subscription purchase.
            </p>
          </div>
          <div className="form-container">
            <form action="" className="form">
              <div className="email-container ic">
                <label htmlFor="" className="login-label">
                  FIRST NAME
                </label>
                <input type="text" className="login-input" />
              </div>
              <div className="password-container ic">
                <label htmlFor="" className="login-label">
                  LAST NAME
                </label>
                <input type="text" className="login-input" />
              </div>

              <button className="form-button">Sign In</button>
            </form>
          </div>
          <div className="forgot-signup">
            <Link to="/account/passwordreset" className="reset-links">
              Forgot/Reset password
            </Link>
            <Link to="/account/register" className="reset-links">
              Not a member? Join us!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
