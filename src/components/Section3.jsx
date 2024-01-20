import "../style/section3.css";
import React from "react";
import TitlebarImageList from "./TitlebarImageList";

const Section3 = () => {
  return (
    <div id="section3" className="section3">
      <h1>Om mig</h1>
      <div className="certsContainer">
        <TitlebarImageList />
      </div>
      <div className="infoDiv"></div>
    </div>
  );
};

export default Section3;
