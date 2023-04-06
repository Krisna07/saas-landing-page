import React from "react";

import { FaCheck } from "react-icons/fa";
import Button from "../Button";

const Pricings = () => {
  const pricings = [
    {
      title: "Basic Plan",
      price: "19",
      annual: "199",
      features: [
        "Unlimited Memebers",
        "Unlimited Feedbacks",
        "Weekly team feedback friday",
        "Custom kudos +9 illustration",
        "Team feedback history",
      ],
    },
    {
      title: "Business Plan",
      price: "29",
      annual: "299",
      features: [
        "Unlimited Memebers",
        "Unlimited Feedbacks",
        "Weekly team feedback friday",
        "Custom kudos +9 illustration",
        "Team feedback history",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "49",
      annual: "499",
      features: [
        "Unlimited Memebers",
        "Unlimited Feedbacks",
        "Weekly team feedback friday",
        "Personal feedback history(6 items)",
        "Team feedback history(30 items)",
      ],
    },
  ];
  return (
    <div className="sections">
      <div className="sectionContainer">
        <div className="sectionHeading">
          <h2 className="headingMain">Simple and Flexible pricings</h2>
          <p className="paragraphMain">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            omnis.
          </p>
        </div>
        <div className="sectionFeatures">
          <div className="featureSection">
            {pricings.map((price, x) => (
              <div className=" featureContainer" key={x}>
                <div className="priceingHead">
                  <div className="planName">{price.title}</div>
                  <h3 className="price">${price.price}/mo</h3>
                  <p>or ${price.annual} yearly</p>
                </div>
                <div className="priceFeatures">
                  {price.features.map((features) => (
                    <span key={features}>
                      <FaCheck />
                      {features}
                    </span>
                  ))}
                </div>
                <Button
                  btnText="Get Started"
                  btnBackground={"var(--primaryColor)"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
