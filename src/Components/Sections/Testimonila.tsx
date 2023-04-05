import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

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
  return (
    <div className="testimonialContainer">
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
  );
};

export default Testimonila;
