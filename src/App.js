import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="#">
          TYSCF
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/harshal-thoke-356a74224/">
          Harshal Thoke
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://mitwpu.edu.in//">
          MIT WPU, PUNE
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
