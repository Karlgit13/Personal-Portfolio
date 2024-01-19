import React from "react";
import "../style/section1.css";
import ProfileImage from "../assets/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const Section1 = () => {
  return (
    <div id="section1" className="section1">
      <img className="profileImage" src={ProfileImage} alt="Profile" />
      <h1 className="header1">Karl Vareskog</h1>
      <h4 className="header2">
        Webbutvecklare, <br />
        med kunskaper inom HTML, CSS, Javascript, React, Git osv.
      </h4>
      <p>
        <FontAwesomeIcon
          className="faIcon"
          icon={faHtml5}
          style={{ color: "#E34F26" }}
        />
        <FontAwesomeIcon
          className="faIcon"
          icon={faCss3Alt}
          style={{ color: "#1572B6" }}
        />

        <FontAwesomeIcon
          className="faIcon"
          icon={faJsSquare}
          style={{ color: "#F7DF1E" }}
        />

        <FontAwesomeIcon
          className="faIcon"
          icon={faReact}
          style={{ color: "#61DAFB" }}
        />

        <FontAwesomeIcon
          className="faIcon"
          icon={faGitAlt}
          style={{ color: "#F05032" }}
        />
      </p>
    </div>
  );
};

export default Section1;
