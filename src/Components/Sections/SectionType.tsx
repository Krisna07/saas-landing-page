import React from "react";
interface section {
  heading: string;
  sectionDes: string;
  sectionItems: any;
}
const SectionType = ({ heading, sectionDes, sectionItems }: section) => {
  return (
    <div className="sections">
      <div className="sectionContainer">
        <div className="sectionHeading">
          <h2 className="headingMain">{heading}</h2>
          <p className="paragraphMain">{sectionDes}</p>
        </div>
        <div className="sectionFeatures">{sectionItems}</div>
      </div>
    </div>
  );
};

export default SectionType;
