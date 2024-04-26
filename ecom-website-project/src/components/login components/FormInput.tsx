import React from "react";
import "../../style/login.css";

interface InputProps {
  label?: string;
  type?: string;
}

const FormInput: React.FC<InputProps> = (props) => {
  return (
    <div className="email-container ic">
      <label className="login-label">{props.label}</label>
      <input type={props.type} className="login-input" />
    </div>
  );
};

export default FormInput;
