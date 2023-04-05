import React from "react";

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar/Navbar";
import "./Styles/Hero.css";
import "./Styles/Section.css";
import "./Styles/Navbar.css";
import Features from "./Components/Sections/Features";
import MoreFeatures from "./Components/Sections/MoreFeatures";
import SectionType from "./Components/Sections/SectionType";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SectionType
        heading="Software Solutions That Fit Your Needs"
        sectionDes={" The Features to boost your productivity"}
        sectionItems={<Features />}
      />
      {/* <Navbar />
    
      <div className="features">
        <div className="heading">
          <h2 className="headingMain">
            Software Solutions That <br /> Fits Your Needs
          </h2>
          <p className="paragraphMain">
            The Features to boost your productivity
          </p>
        </div>
        <div className="featursItems">
          <Features />
        </div>
      </div>
      <MoreFeatures /> */}
    </div>
  );
}

export default App;
