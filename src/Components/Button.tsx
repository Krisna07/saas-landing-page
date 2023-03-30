import React from "react";

const Button = ({ btnText, btnIcon, btnBackground, btnBorder, color }: any) => {
  const btnStyle = {
    background: btnBackground ? btnBackground : "transparent",
    border: btnBorder ? btnBorder : "none",
    color: color ? color : "white",
  };
  return (
    <button className="Pagebutton" style={btnStyle}>
      {btnText}
    </button>
  );
};

export default Button;
