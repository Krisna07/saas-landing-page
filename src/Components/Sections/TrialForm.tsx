import React from "react";
import Button from "../Navbar/Button";

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
           <button className="trailBtn">Signup</button>
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
