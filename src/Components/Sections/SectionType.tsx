import React from "react";
interface section {
  heading: string;
  sectionDes: string;
  sectionItems: any;
  id: string;
}
const SectionType = ({ heading, sectionDes, sectionItems, id }: section) => {
  return (
    <div className="sections" id={id}>
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
