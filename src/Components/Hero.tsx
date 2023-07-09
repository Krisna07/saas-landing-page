import React, { useEffect, useState } from "react";
import Button from "./Navbar/Button";
import { FaLocationArrow, FaSignal, FaWifi } from "react-icons/fa";
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
    setTime(
      (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
        ":" +
        date.getMinutes().toFixed()
    );
  }, [date]);

  return (
    <div className="hero" id="home">
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
           <img src="/Images/laptopmockup.png" alt="" className="laptopImage"  />
            
            <div className="analytics">
           <img className="analytics_image" src="/Images/analytics.jpg" alt=""/>
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
                  <div className="camera"></div>

                  </div>
                </div>
                <div className="timeContainer">
                  <FaSignal />
                  <FaWifi />
                  <BsBatteryHalf fontSize={"20px"} />
                </div>
              </div>

              <div className="analytics">
              <img className="analytics_image" src="/Images/analytics.jpg" alt=""/>

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
              <div className="camera"></div>
              </div>
              <div className="analytics">
              <img className="analytics_image" src="/Images/analytics.jpg" alt=""/>

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
