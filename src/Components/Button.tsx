import React from "react";

const Button = ({
  btnText,
  btnIcon,
  btnBackground,
  btnBorder,
  color,
  btnPadding,
}: any) => {
  const btnStyle = {
    background: btnBackground ? btnBackground : "transparent",
    border: btnBorder ? btnBorder : "none",
    color: color ? color : "white",
    padding: btnPadding ? btnPadding : "",
  };
  return (
    <button className="pageBtn" style={btnStyle}>
      {btnText}
    </button>
  );
};

export default Button;
