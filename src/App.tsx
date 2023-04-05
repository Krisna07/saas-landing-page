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
      <section className="sections">
        <MoreFeatures />
      </section>
    </div>
  );
}

export default App;
