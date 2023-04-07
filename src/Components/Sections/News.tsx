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
      Read more {icon ? <FaChevronRight color="black" /> : <FaArrowRight />}
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
        "https://s3-alpha-sig.figma.com/img/2901/a2ae/da8d67132c46648999973524a1a21e5d?Expires=1681689600&Signature=ppsO7S29wArU9LnsQxwXreOQHfGMLgqTy1zU-bTLHswnverhYnMFcAO3-GUeC8Ru~HO3dQ5a2-d-802Ffprw0w1yzeIcu4gyoNqeQVdRvQtudTm401FgA~BAXtFygc1Jv8qDf2~uRqHtrOqqZkL~Wn618r0eTDIFqwJYrl8-CAbicG2BO6L3bmO9Y9FP1-Ez6-NiDLej9u9w9ACv1o7ziWkAJeiyTyOp2bDG2QqyliKrlRZmsAtRSW0B3AOAViQNdvNvQZY1LcAFp9fVZIuP0tcxE10coddEJs4OnH8ZwIGR1N-LPUXT4HN4cz0NBlqfTncha3rhXRGbu~pgjfeLJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempora facere odio laboriosam cupiditate necessitatibus veniam nam sequi vel voluptatibus?",
    },
    {
      type: "Productive",
      readStatus: false,
      image:
        "https://s3-alpha-sig.figma.com/img/f075/388e/c3b7079603909835fc38ecb7cbbb8b2f?Expires=1681689600&Signature=O8TuDAfz6UikXJLk~oOgw0AInC1lTX8lMib0abV03LLjOnXFH98jSIsrP3HIP3aHe1VjHSDnp4SsSEfcl9iJdDXdNgG~RC8ZMg6lwpzvpE5yG-oqwJA5bJZMlWcj8hj6BjYYcIusSRKTWhF4GAidWEPZX3Cjy5an6j6-NXrj~8IZdUhxXXmtCDIDN1QSxb6PWeNXqqVBaCrvo8ZQgMoUDjpH46Ku8-4icaGaeY-2Q9PzHMEN7wSxYg7tYS2JedODQtztxtHGLr9VOdvEiqkP54HFFT8kZxb4s61H8beESnXZjafLr2g3I~TcXdhHF2jddIQOyewvSPwhRGn1WBnp7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Young Startups With SaaSup In Full Throttle",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facere ducimus deleniti sint consequuntur magni adipisci delectus dignissimos, nostrum sapiente!",
    },
    {
      type: "Category",
      readStatus: false,
      image:
        "https://s3-alpha-sig.figma.com/img/f4ee/ccd8/f32b0ba92b24a51a06904482d87bfbed?Expires=1681689600&Signature=O2aq0dTX5OvSq7x~DU1dCXSBcEXtjn7620z4W3RXoZ5RNmMhBC3QqWFv6~fd25aUBqqYiyJj2F8XYppUhDwjub7Y6rRxEBioJTAnLBohJunZNJdN6jVI~MoQAWzRL5JTQGPf7GAGKeiDhYFmVeAIywyMjhUr25-qb8BMX~5nRskFp~cmIFE0xyf-hyJxml4mGtTRq0X72kmFjfyjrRVTDqXDVJFtNP0G6U~4cQYjYoKAA-1FqovC912ZrzoRy3zBQ1apHqIdzzf83XvIyujwBfSmTxzaUjfCmVvyrQcjVD0RDF8sNlTvrdbrwmkjT3kVjBmgA2020y6POn4HH-USkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
          {" "}
          <div className="newsSection">
            {news.map((item) => (
              <div key={item.type} className="newsContainer">
                <div className="newsImage">
                  <img src={item.image} alt="" width={"100%"} height="100%" />
                </div>
                <div className="newsdes">
                  <div className="newsReadDes">
                    <span>{item.type}</span>
                    <span>5 min read</span>
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
