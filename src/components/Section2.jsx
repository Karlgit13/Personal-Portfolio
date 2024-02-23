import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/section2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const handleClick = (url) => {
  window.open(url, "_blank");
};

const Section2 = ({ ProjektLista }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    className: "Karusell",
  };

  return (
    <div id="section2" className="section2">
      <div className="heading-div">
        <h1 className="section2-heading">Mina Projekt</h1>
      </div>
      <Slider {...settings}>
        {ProjektLista.map(
          ({ titel, img, url, beskrivning, buttonText, githubRepoUrl }) => (
            <div key={titel} className="projekt-div">
              <h2 className="projekt-titel">{titel}</h2>
              <img className="projekt-bild" src={img} alt={titel} />
              <p className="projekt-paragraph">{beskrivning}</p>
              <div>
                <button
                  className="projekt-knapp"
                  onClick={() => handleClick(url)}
                >
                  {buttonText}
                </button>
                <button
                  onClick={() => handleClick(githubRepoUrl)}
                  className="projekt-knapp"
                >
                  <FontAwesomeIcon icon={faGithub} /> Repository
                </button>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Section2;
