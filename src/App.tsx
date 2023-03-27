import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const tube = <div className="tube" style={{}}></div>;
  return (
    <div className="App">
      <Navbar />
      <div className="hero">{tube}</div>
    </div>
  );
}

export default App;
