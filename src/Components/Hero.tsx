import React from "react";
import Button from "./Button";
const Tube = ({ left, top, rotate }: any) => {
  return (
    <div
      className="tube"
      style={{ left: `${left}%`, top: `${top}%`, rotate: `${rotate}` }}
    ></div>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <Tube left="0" top="5" rotate="50deg" />
      <Tube left="40" top="-10" rotate="30deg" />
      <Tube left="80" top="30" rotate="20deg" />
      <Tube left="10" top="80" rotate="60deg" />
      <Tube left="50" top="30" rotate="40deg" />
      <div className="herocontainer">
        <h1>Your digital business is in good hands with us !</h1>
        <p>
          Make your work easier with an integrated ecosystem that lets all
          department work properly together.
        </p>
        <div className="btnContainer">
          <Button
            btnText={"Get Started"}
            btnBackground={"var(--primaryColor)"}
          />
          <Button btnText={"Watch Video"} btnBorder="1px solid white" />
        </div>
      </div>
      <div className="laptopMockup">
        <img
          src="https://s3-alpha-sig.figma.com/img/590d/59e7/46e6e2148986c4d0850c4434393b07c0?Expires=1681084800&Signature=pGe8cB8TnwZ5bIzFgWwzsguDUsYuzZyUOnidQU3NmR2CYu~rZBlfQ2kbYJepCu7-4POfP8~2-aGnFLK3olh92M6LceUsZMaJqla1Pw6tedEZKPDyKHFiy1TwNCQzQVj7OXsWTxjP9r8RC0ZyeruRgKxQfpYMye27vOWCNxrViin5yl8LUTl8tOk7z61t6VL-1262~sJiWtPiah1vOlXczESvlsO3WO4hZ~W4WAc8VLNze0d8GUSlSCmf2X2YcUgkqfd-Llc0vVpKwjezFOvavvgMWBj8hJTOykIvSiyB287uI5IjXXHEveeKxB~4LlERDdZm1X8MnJlJuMwFpd1~BQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={"1000px"}
          alt=""
        />
        <div className="analytics">
          {" "}
          <img
            className="image_anylytics"
            src="https://s3-alpha-sig.figma.com/img/3a82/b254/7ad7b570982e89338bc2c12e7e3b3b7c?Expires=1681084800&Signature=BcBNABO4TWXkO~NqKHrZJeXB7YenUZi0yFD0ND-~2MeDZy8CabTdvHfDAPy6F6CYpfYioHehS3g7WAQIOT0CgLcPqw2aZTUxQc8PXZDBK4zy3EFAplwGbFnY-E4~ektg-eXihrgqEla~av3OqSrHXNu-lUcF1JhGBEZq0PScUlJQavD1RU2VDzG-653~cD1slx3O1it04Pfs4CdY7bHgnj~aGVOfeKxlKRmEzcIAKfR0gjn8PmGLmxYNzDqubCHOHuOfqtHWU0D7Hwi0GKtk7FMgJlg2pdrLOYaxLw0vkUBytRMBqVjgvFLri18C05ihR6Lr1ED9Urf~E5ZI4-vrHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            width={"800px"}
            height={"500px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
