import React from "react";

import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar/Navbar";
import "./Styles/Hero.css";
import "./Styles/Section.css";
import "./Styles/Navbar.css";
import Features from "./Components/Sections/Features";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="features">
        <div className="heading">
          <h2>
            Software Solutions That <br /> Fits Your Needs
          </h2>
          <p>The Features to boost your productivity</p>
        </div>
        <div className="featursItems">
          <Features />
        </div>
      </div>
    </div>
  );
}

export default App;
