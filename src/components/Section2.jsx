import React from "react";
import "../style/section2.css";

const handleClick = (url) => {
  window.open(url, "_blank");
};

const Section2 = ({ ProjektLista }) => {
  return (
    <div id="section2" className="section2">
      <div className="heading-div">
        <h1 className="section2-heading">Mina Projekt</h1>
      </div>
      <div>
        {ProjektLista.map(({ titel, img, url }) => (
          <div key={titel} className="projekt-div">
            <h2 className="projekt-titel">{titel}</h2>
            <img className="projekt-bild" src={img} alt={titel} />
            <p className="projekt-paragraph">info om projektet</p>
            <button onClick={() => handleClick(url)}>LiveDemo</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
