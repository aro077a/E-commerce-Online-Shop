import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return <button className="custom-button">{children}</button>;
};

export default CustomButton;
