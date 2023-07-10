import React, { useState } from "react";

const Button = ({
  btnText,
  btnIcon,
  btnBackground,
  btnBorder,
  color,
  btnPadding,
}: any) => {
  const [hover, setHover] = useState<boolean>(false);
  const btnStyle = {
    background: !hover
      ? btnBackground
        ? btnBackground
        : "transparent"
      : "transparent",
    border: !hover
      ? btnBorder
        ? btnBorder
        : "1px solid var(--primaryColor)"
      : "1px solid var(--primaryColor)",
    color: !hover ? (color ? color : "white") : "black",
    padding: btnPadding ? btnPadding : "",
    width:"fit-content"
  };

  return (
    <button
      className="pageBtn"
      style={btnStyle}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {btnText}
    </button>
  );
};

export default Button;
