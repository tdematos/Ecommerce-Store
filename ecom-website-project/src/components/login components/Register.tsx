import React from "react";
import FormInput from "./FormInput";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import "../../style/login.css";

const Register: React.FC = () => {
  return (
    <div>
      <section className="login-container">
        <div className="login-box">
          <div className="login-text">
            <h3>Sign Up</h3>
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
              <FormInput label="FIRST NAME" type="text" />
              <FormInput label="LAST NAME" type="text" />
              <FormInput label="EMAIL" type="text" />
              <FormInput label="PASSWORD (MIN. 5 CHARACTERS)" type="text" />
              <p className="tos-link">
                By creating an account, you agree to our{" "}
                <Link to="/tos">Terms</Link>.
              </p>

              <button className="form-button">Sign In</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
