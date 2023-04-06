import React from "react";
import Button from "../Button";

const TrialForm = () => {
  return (
    <div className="sections" style={{ background: "#6B50FF", color: "white" }}>
      <div className="sectionContainer">
        <div className="sectionHeading">
          {" "}
          <h2 className="headingMain">Get started with a 15-day free trial</h2>
          <p className="paragraphMain">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            omnis.
          </p>
        </div>
        <div className="trailform">
          <label className="email">
            <input type="text" placeholder="Enter your email" />{" "}
            <Button btnText="Sign Up" btnBackground="var(--primaryColor)" />
          </label>
          <p className="termsCo">
            By clicking on signup you confirm that you agree with our Terms and
            Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrialForm;
