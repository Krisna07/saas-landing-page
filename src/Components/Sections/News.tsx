import React, { useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

import Button from "../Navbar/Button";

const ReadMoreBtn = () => {
  const [icon, setIcon] = useState<Boolean>(true);
  return (
    <div
      className="readbtn"
      onMouseOver={() => setIcon(false)}
      onMouseLeave={() => setIcon(true)}
    >
      Read more {icon ? <FaChevronRight /> : <FaArrowRight />}
    </div>
  );
};
const News = () => {
  const news = [
    {
      type: "Social media",
      title: "Our favourite product thins is saasup",
      readStatus: false,
      image:
        "/Images/saas.png",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempora facere odio laboriosam cupiditate necessitatibus veniam nam sequi vel voluptatibus?",
    },
    {
      type: "Productive",
      readStatus: false,
      image:
        "/Images/startup.jpg",
      title: "Young Startups With SaaSup In Full Throttle",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facere ducimus deleniti sint consequuntur magni adipisci delectus dignissimos, nostrum sapiente!",
    },
    {
      type: "Category",
      readStatus: false,
      image:
        "/Images/reality.jpg",
      title: "The perfect integration for all real time a reality services",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facere ducimus deleniti sint consequuntur magni adipisci delectus dignissimos, nostrum sapiente!",
    },
  ];

  return (
    <div className="sections" id="story">
      <div className="sectionContainer newsComponent">
        <div className="headingConatiner">
          <div className="headingInfo">
            <h2>Recent News</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              assumenda!
            </p>
          </div>
          <Button
            btnText="View all"
            color="black"
            btnBorder="1px solid var(--primaryColor)"
          />
        </div>
        <div className="newsSlider">
         
          <div className="newsSection">
            {news.map((item) => (
              <div key={item.type} className="newsContainer">
                <div className="newsImage">
                  <img src={item.image} alt="" width={"100%"} height="100%"  />
                </div>
                <div className="newsdes">
                  <div className="newsReadDes">
                    <span className="newstab">{item.type}</span>
                    <span className="newstab">5 min read</span>
                  </div>
                  <h2 className="newsHeading">{item.title}</h2>
                  <p>{item.des}</p>
                  <ReadMoreBtn />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
