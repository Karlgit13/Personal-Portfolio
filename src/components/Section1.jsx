import React, { useEffect } from "react";
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
import "aos/dist/aos.css";
import Aos from "aos";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Section1 = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      easing: "ease-out-cubic",
    });

    // Startar animationen när komponenten monteras
    const arrow = document.querySelector(".scroll-down-arrow");
    arrow.style.animation = "bounce 2s infinite";

    // Skapar en timer som stoppar animationen efter 5 sekunder
    const timer = setTimeout(() => {
      if (arrow) {
        arrow.style.animation = "none"; // Stoppar animationen
      }
    }, 5000);

    // Rensar timern när komponenten avmonteras
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div id="section1" className="section1">
      <img
        data-aos="fade-down"
        className="profileImage"
        src={ProfileImage}
        alt="Profile"
      />
      <h1 data-aos="fade-down" className="header1">
        Karl Vareskog
      </h1>
      <h4 data-aos="fade-down" className="header2">
        Webbutvecklare, <br />
        med kunskaper inom <br /> HTML, CSS, Javascript, React, Git osv.
      </h4>
      <p>
        <FontAwesomeIcon
          data-aos="fade-right"
          className="faIcon"
          icon={faHtml5}
          style={{ color: "#E34F26" }}
        />
        <FontAwesomeIcon
          data-aos="fade-right"
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
          data-aos="fade-left"
          className="faIcon"
          icon={faReact}
          style={{ color: "#61DAFB" }}
        />

        <FontAwesomeIcon
          data-aos="fade-left"
          className="faIcon"
          icon={faGitAlt}
          style={{ color: "#F05032" }}
        />
      </p>
      <FontAwesomeIcon
        icon={faChevronDown}
        className="scroll-down-arrow"
        onClick={() => handleClick("section2")}
      />
    </div>
  );
};

export default Section1;
