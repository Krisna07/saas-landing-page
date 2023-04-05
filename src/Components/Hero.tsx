import React, { useEffect, useState } from "react";
import Button from "./Button";
import {
  FaBars,
  FaBatteryHalf,
  FaLocationArrow,
  FaNetworkWired,
  FaSignal,
  FaWifi,
} from "react-icons/fa";
import { BsBatteryHalf } from "react-icons/bs";

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
  const [time, setTime] = useState<String>();
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    // setInterval(() => {
    //   setDate(new Date());
    // }, 1000);
    setTime(
      (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
        ":" +
        date.getMinutes().toFixed()
    );

    // console.log(date);
    clearInterval();
  }, [date]);

  return (
    <div className="hero">
      <div className="tubeBackgroundContainer">
        <Tube left="-10" top="-10" rotate="-45deg" />
        <Tube left="45" top="-5" rotate="-45deg" />
        <Tube left="-10" top="10" rotate="-45deg" />
        <Tube left="20" top="-25" rotate="-45deg" />
        <Tube left="80" top="-20" rotate="-30deg" />
        <Tube left="100" top="10" />
      </div>
      <div className="herocontainer">
        <h1>
          Your digital business is in <br /> good hands with us !
        </h1>
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
          <div className="phoneContainer">
            <div className="iphoneMockup">
              <div className="iphoneTop">
                <div className="timeContainer">
                  <span>{time}</span>
                  <span
                    style={{
                      width: "15px",
                      height: "15px",
                      color: "white",
                      background: "blue",
                      borderRadius: "50%",
                      fontSize: "10px",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <FaLocationArrow />
                  </span>
                </div>
                <div className="iphoneCamera">
                  <div className="Frontcamera">
                    <img
                      className="camera"
                      src="https://s3-alpha-sig.figma.com/img/2a87/89ed/b56d282b5aa545a970dfbe5ff401e172?Expires=1681084800&Signature=fkl3gFaObngac7D6m2tGJ~hode-P6yPWa1AmF5fUs23FKD0~IOAYIQ1d9spmRdlNCAIiG5h3m~G8aUonNStc-W5XnKVy~TmEmIhDLuJ3pqfBUHOhX~b1kblM0hgQCCtaR17Z~F8FId2sGXIDulcCoQXznx-ciXnRh5dGKXtwXuu3kIuPxcEhXcB7y19JRUdc1KEJn9FC6M-n9PfPlZqVUU288KSFBH0uFmsX1cDgKUz1CGQtQK8SklLPIwbGVkQgtmk5IPl9y8krH7fMO7pRCAfP7XzfaZ20Hw-6A9WwOgEZP~7Sa9TUbm~WHbzdPKG1yEfcK~-yjY3kc6LqzltadA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                  </div>
                </div>
                <div className="timeContainer">
                  <FaSignal />
                  <FaWifi />
                  <BsBatteryHalf fontSize={"20px"} />
                </div>
              </div>

              <div className="analytics">
                <img
                  className="analytics_image"
                  src="https://s3-alpha-sig.figma.com/img/3a82/b254/7ad7b570982e89338bc2c12e7e3b3b7c?Expires=1681084800&Signature=BcBNABO4TWXkO~NqKHrZJeXB7YenUZi0yFD0ND-~2MeDZy8CabTdvHfDAPy6F6CYpfYioHehS3g7WAQIOT0CgLcPqw2aZTUxQc8PXZDBK4zy3EFAplwGbFnY-E4~ektg-eXihrgqEla~av3OqSrHXNu-lUcF1JhGBEZq0PScUlJQavD1RU2VDzG-653~cD1slx3O1it04Pfs4CdY7bHgnj~aGVOfeKxlKRmEzcIAKfR0gjn8PmGLmxYNzDqubCHOHuOfqtHWU0D7Hwi0GKtk7FMgJlg2pdrLOYaxLw0vkUBytRMBqVjgvFLri18C05ihR6Lr1ED9Urf~E5ZI4-vrHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div className="iphoneBottom"></div>
            </div>
            <div className="phoneButtons power"></div>
            <div className="phoneButtons volumeup"></div>
            <div className="phoneButtons volumedown"></div>
          </div>
          <div className="tabContainer">
            <div className="tabMockup">
              <div className="Frontcamera">
                <img
                  className="camera"
                  src="https://s3-alpha-sig.figma.com/img/2a87/89ed/b56d282b5aa545a970dfbe5ff401e172?Expires=1681084800&Signature=fkl3gFaObngac7D6m2tGJ~hode-P6yPWa1AmF5fUs23FKD0~IOAYIQ1d9spmRdlNCAIiG5h3m~G8aUonNStc-W5XnKVy~TmEmIhDLuJ3pqfBUHOhX~b1kblM0hgQCCtaR17Z~F8FId2sGXIDulcCoQXznx-ciXnRh5dGKXtwXuu3kIuPxcEhXcB7y19JRUdc1KEJn9FC6M-n9PfPlZqVUU288KSFBH0uFmsX1cDgKUz1CGQtQK8SklLPIwbGVkQgtmk5IPl9y8krH7fMO7pRCAfP7XzfaZ20Hw-6A9WwOgEZP~7Sa9TUbm~WHbzdPKG1yEfcK~-yjY3kc6LqzltadA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div className="analytics">
                <img
                  className="analytics_image"
                  src="https://s3-alpha-sig.figma.com/img/3a82/b254/7ad7b570982e89338bc2c12e7e3b3b7c?Expires=1681084800&Signature=BcBNABO4TWXkO~NqKHrZJeXB7YenUZi0yFD0ND-~2MeDZy8CabTdvHfDAPy6F6CYpfYioHehS3g7WAQIOT0CgLcPqw2aZTUxQc8PXZDBK4zy3EFAplwGbFnY-E4~ektg-eXihrgqEla~av3OqSrHXNu-lUcF1JhGBEZq0PScUlJQavD1RU2VDzG-653~cD1slx3O1it04Pfs4CdY7bHgnj~aGVOfeKxlKRmEzcIAKfR0gjn8PmGLmxYNzDqubCHOHuOfqtHWU0D7Hwi0GKtk7FMgJlg2pdrLOYaxLw0vkUBytRMBqVjgvFLri18C05ihR6Lr1ED9Urf~E5ZI4-vrHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div className="iphoneBottom"></div>
            </div>
          </div>
        </div>
        <div className="backgroundWhite"></div>
      </div>
    </div>
  );
};

export default Hero;
