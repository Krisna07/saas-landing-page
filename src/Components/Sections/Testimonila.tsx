import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegStar,
  FaStar,
} from "react-icons/fa";

const Testimonila = () => {
  const testimonials = [
    {
      stars: 4,
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, facilis!",
      customerName: "Brroklyn simmons",
      workDes: "Bank of America",
      userImage:
        "https://imgs.search.brave.com/V5d4QnM3WMSaHAdmrVvddD28A3tBvEQY1BTTGjVGoes/rs:fit:738:554:1/g:ce/aHR0cHM6Ly9zZ3Vy/dS5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTcvMDYvY29v/bC1wcm9maWxlLXBp/Y3R1cmVzLUFub255/bW91cy1oYWNrZXIt/cHJvZmlsZS1waWN0/dXJlLmpwZw",
    },
    {
      stars: 4,
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, facilis!",
      customerName: "Brroklyn simmons",
      workDes: "Bank of America",
    },
    {
      stars: 5,
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, facilis!",
      customerName: "Brroklyn simmons",
      workDes: "Bank of America",
    },
    {
      stars: 4,
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, facilis!",
      customerName: "Brroklyn simmons",
      workDes: "Bank of America",
    },
    {
      stars: 4,
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, facilis!",
      customerName: "Brroklyn simmons",
      workDes: "Bank of America",
    },
  ];
  const [left, setLeft] = useState<number>(0);
  useEffect(() => {
    // setTimeout(() => {
    //   setLeft(left + 100);
    // }, 2000);
    // clearTimeout();
  });
  return (
    <>
      <div className="testimonialContainer" style={{ left: `-${left}px` }}>
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.customerName}>
            <div className="stars">
              {Array(testimonial.stars)
                .fill("0")
                .map((stars, x) => (
                  <FaStar key={x} />
                ))}
              {Array(5 - testimonial.stars)
                .fill("0")
                .map((stars, y) => (
                  <FaRegStar key={y} />
                ))}
            </div>
            <div className="comment">"{testimonial.comment}"</div>
            <div className="userDetails">
              <div className="profileContainer">
                <img
                  width={"100%"}
                  height={"100%"}
                  src="https://imgs.search.brave.com/V5d4QnM3WMSaHAdmrVvddD28A3tBvEQY1BTTGjVGoes/rs:fit:738:554:1/g:ce/aHR0cHM6Ly9zZ3Vy/dS5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTcvMDYvY29v/bC1wcm9maWxlLXBp/Y3R1cmVzLUFub255/bW91cy1oYWNrZXIt/cHJvZmlsZS1waWN0/dXJlLmpwZw"
                  alt=""
                />
              </div>
              <div className="username">
                <h4>{testimonial.customerName}</h4>
                <p>{testimonial.workDes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FaChevronLeft className="backwards sliderBtn" />
      <FaChevronRight className="forwards sliderBtn" />
      <div className="dotsContainer">
        {Array(testimonials.length)
          .fill("0")
          .map((dots) => (
            <div className="navDots" key={dots}></div>
          ))}
      </div>
    </>
  );
};

export default Testimonila;
