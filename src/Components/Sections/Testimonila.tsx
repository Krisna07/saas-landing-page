import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegStar,
  FaStar,
} from "react-icons/fa";

import "../../Styles/Testimonial.css";

const Testimonila = () => {
  const testimonials = [
    {
      stars: 4,
      comment: "Great service, would definitely recommend!",
      customerName: "John Smith",
      workDes: "Software Engineer",
      userImage: "https://example.com/user1.jpg",
    },
    {
      stars: 5,
      comment: "I had an amazing experience with this company!",
      customerName: "Emily Johnson",
      workDes: "Marketing Manager",
      userImage: "https://example.com/user2.jpg",
    },
    {
      stars: 3,
      comment: "Good product, but could use some improvement.",
      customerName: "Mark Davis",
      workDes: "Graphic Designer",
      userImage: "https://example.com/user3.jpg",
    },
    {
      stars: 4,
      comment: "The customer support was very helpful!",
      customerName: "Sarah Wilson",
      workDes: "Accountant",
      userImage: "https://example.com/user4.jpg",
    },
    {
      stars: 5,
      comment: "I am very impressed with the quality of the product!",
      customerName: "David Lee",
      workDes: "Sales Manager",
      userImage: "https://example.com/user5.jpg",
    },
  ];
  const [index, setIndex] = useState(0);
  const [testi, setTesti] = useState(testimonials[index]);
  const [left, setLeft] = useState<number>(0);
  const nextSlide = () => {
    if (index === testimonials.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(testimonials.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const navTesti = (dot: any) => {
    setIndex(dots.indexOf(dot));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => {
        const nextIndex = index + 1;
        if (nextIndex >= testimonials.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [nextSlide, prevSlide, navTesti]);

  useEffect(() => {
    setTesti(testimonials[index]);
  }, [index]);
  const visiTesti = [
    testimonials[index === 0 ? testimonials.length - 1 : index - 1],
    testimonials[index],
    testimonials[index === testimonials.length - 1 ? 0 : index + 1],
  ];
  const dots = Array.from({ length: testimonials.length }, (_, i) => i + 1);

  return (
    <>
      <div className="testimonialContainer" style={{ left: `-${0}px` }}>
        {visiTesti.map((testimonial, x) => (
          <div className="testimonial" key={x}>
            <div className="stars">
              {Array(testi.stars)
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
      <FaChevronLeft className="backwards sliderBtn" onClick={nextSlide} />
      <FaChevronRight className="forwards sliderBtn" onClick={prevSlide} />
      <div className="dotsContainer">
        {dots.map((dot, x) => (
          <div
            className="navDots"
            key={x}
            onClick={() => navTesti(dot)}
            style={
              dots.indexOf(dot) === index
                ? { border: "1px solid gray", background: "black" }
                : {}
            }
          ></div>
        ))}
      </div>
    </>
  );
};

export default Testimonila;
