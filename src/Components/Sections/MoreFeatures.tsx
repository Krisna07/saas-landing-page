import React from "react";
import Button from "../Navbar/Button";
interface features {
  featuresLeft: any;
  featuresRight: any;
}
const MoreFeatures = ({ featuresLeft, featuresRight }: features) => {
  return (
    <div className="moreFeaturesContainer">
      <div className="featuresLeft">
        {featuresLeft.heading ? (
          <>
            <div className="heading">
              <h2 className="headingMain">{featuresLeft.heading}</h2>
              <p className="paragraphMain">{featuresLeft.des}</p>
            </div>
            <Button
              btnText="Read More"
              btnBorder="1px solid var(--primaryColor)"
              color="var(--primaryColor)"
            />
          </>
        ) : (
          <>
            <div className="featureImage" style={{ justifyContent: "start" }}>
              <img src={featuresLeft.img} alt="" width={"100%"} />
            </div>
            <div className="featureSvgs" style={{ left: "50%" }}>
              {featuresLeft.svg}
            </div>
          </>
        )}
      </div>

      <div className="featuresRight">
        {featuresRight.img ? (
          <>
            <div className="featureImage">
              <img src={featuresRight.img} alt="" width={"100%"} />
            </div>
            <div className="featureSvgs">{featuresRight.svg}</div>
          </>
        ) : (
          <>
            <div className="heading">
              <h2 className="headingMain">Easy Advance Protection</h2>
              <p className="paragraphMain">
                Use marketing automation to identify hot leads and email your
                sales team telling them to follow up. Nurture and contact leads
                at the opportune time to maximize.
              </p>
            </div>
            <Button
              btnText="Read More"
              btnBorder="1px solid var(--primaryColor)"
              color="var(--primaryColor)"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MoreFeatures;
