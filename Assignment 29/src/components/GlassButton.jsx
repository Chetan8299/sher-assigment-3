import React from "react";
import "./glassbutton.css";

const GlassButton = ({ content, fontsize }) => {
  return (
    <button style={{ fontSize: fontsize }} className="glass-btn">
      {content}
    </button>
  );
};

export default GlassButton;
