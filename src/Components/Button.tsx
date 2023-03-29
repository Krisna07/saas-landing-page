import React from "react";

const Button = ({ btnText, btnIcon, btnBackground, btnBorder }: any) => {
  const btnStyle = {
    background: btnBackground ? btnBackground : "transparent",
    border: btnBorder ? btnBorder : "none",
  };
  return (
    <button className="Pagebutton" style={btnStyle}>
      {btnText}
    </button>
  );
};

export default Button;
