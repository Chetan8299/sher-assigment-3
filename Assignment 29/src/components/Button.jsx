import React from "react";
import "./button.css";
import { RiArrowRightUpLongLine } from "@remixicon/react";

const Button = ({ content, showIcon }) => {
  return (
    <button className="btn-primary">
      {content}
      {showIcon && <RiArrowRightUpLongLine size={18} />}
    </button>
  );
};

export default Button;
