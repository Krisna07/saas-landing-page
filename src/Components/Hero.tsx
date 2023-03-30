import React from "react";
import Button from "./Button";
const Tube = ({ left, top, rotate, zindex }: any) => {
  return (
    <div
      className="tube"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        rotate: `${rotate}`,
        zIndex: `${zindex}`,
      }}
    ></div>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="herocontainer">
        <Tube left="-30" top="-190" rotate="-40deg" />
        <Tube left="50" top="-150" rotate="-40deg" />

        <Tube left="-40" top="-40" rotate="-35deg" />
        <Tube left="120" top="40" rotate="140deg" zindex="10" />
        <Tube left="40" top="-80" rotate="-40deg" />
        <Tube left="110" top="-80" rotate="40deg" zindex="11" />
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
      <div className="laptopMockupContainer">
        <div className="laptopContainer">
          <div className="laptopMockup">
            <img
              src="https://s3-alpha-sig.figma.com/img/590d/59e7/46e6e2148986c4d0850c4434393b07c0?Expires=1681084800&Signature=pGe8cB8TnwZ5bIzFgWwzsguDUsYuzZyUOnidQU3NmR2CYu~rZBlfQ2kbYJepCu7-4POfP8~2-aGnFLK3olh92M6LceUsZMaJqla1Pw6tedEZKPDyKHFiy1TwNCQzQVj7OXsWTxjP9r8RC0ZyeruRgKxQfpYMye27vOWCNxrViin5yl8LUTl8tOk7z61t6VL-1262~sJiWtPiah1vOlXczESvlsO3WO4hZ~W4WAc8VLNze0d8GUSlSCmf2X2YcUgkqfd-Llc0vVpKwjezFOvavvgMWBj8hJTOykIvSiyB287uI5IjXXHEveeKxB~4LlERDdZm1X8MnJlJuMwFpd1~BQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width={"1000px"}
              alt=""
            />
            <img
              className="camera"
              src="https://s3-alpha-sig.figma.com/img/2a87/89ed/b56d282b5aa545a970dfbe5ff401e172?Expires=1681084800&Signature=fkl3gFaObngac7D6m2tGJ~hode-P6yPWa1AmF5fUs23FKD0~IOAYIQ1d9spmRdlNCAIiG5h3m~G8aUonNStc-W5XnKVy~TmEmIhDLuJ3pqfBUHOhX~b1kblM0hgQCCtaR17Z~F8FId2sGXIDulcCoQXznx-ciXnRh5dGKXtwXuu3kIuPxcEhXcB7y19JRUdc1KEJn9FC6M-n9PfPlZqVUU288KSFBH0uFmsX1cDgKUz1CGQtQK8SklLPIwbGVkQgtmk5IPl9y8krH7fMO7pRCAfP7XzfaZ20Hw-6A9WwOgEZP~7Sa9TUbm~WHbzdPKG1yEfcK~-yjY3kc6LqzltadA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div className="analytics">
              <img
                className="analytics_image"
                src="https://s3-alpha-sig.figma.com/img/3a82/b254/7ad7b570982e89338bc2c12e7e3b3b7c?Expires=1681084800&Signature=BcBNABO4TWXkO~NqKHrZJeXB7YenUZi0yFD0ND-~2MeDZy8CabTdvHfDAPy6F6CYpfYioHehS3g7WAQIOT0CgLcPqw2aZTUxQc8PXZDBK4zy3EFAplwGbFnY-E4~ektg-eXihrgqEla~av3OqSrHXNu-lUcF1JhGBEZq0PScUlJQavD1RU2VDzG-653~cD1slx3O1it04Pfs4CdY7bHgnj~aGVOfeKxlKRmEzcIAKfR0gjn8PmGLmxYNzDqubCHOHuOfqtHWU0D7Hwi0GKtk7FMgJlg2pdrLOYaxLw0vkUBytRMBqVjgvFLri18C05ihR6Lr1ED9Urf~E5ZI4-vrHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <span className="laptopName">Macbook Pro</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
