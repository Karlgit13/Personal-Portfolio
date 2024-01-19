import React from "react";
import "../style/section3.css";

const certificates = [
  {
    id: 1,
    image: require("../assets/AdvancedReact.jpg"),
    alt: "AdvancedReact",
  },
  {
    id: 2,
    image: require("../assets/DeveloperCapstone.jpg"),
    alt: "DeveloperCapstone",
  },
  {
    id: 3,
    image: require("../assets/HTML and CSS in depth_page-0001.jpg"),
    alt: "HTMLCSS",
  },
  {
    id: 4,
    image: require("../assets/IntroFrontEnd_Meta_page-0001.jpg"),
    alt: "IntroFrontEnd",
  },
  {
    id: 5,
    image: require("../assets/Principles of UX-UI Design_page-0001.jpg"),
    alt: "UX-UI",
  },
  {
    id: 6,
    image: require("../assets/Programming_With_Javascript_Meta_page-0001.jpg"),
    alt: "ProgrammingWithJavascript",
  },

  {
    id: 8,
    image: require("../assets/React_Basics_Meta_page-0001.jpg"),
    alt: "ReactBasics",
  },
  {
    id: 9,
    image: require("../assets/Version_Controll_Meta_page-0001.jpg"),
    alt: "VersionControl",
  },
];

const Section3 = () => {
  return (
    <div id="section3" className="section3">
      <div className="certsContainer">
        {certificates.map((certificate) => (
          <img
            key={certificate.id}
            className="certsImage"
            src={certificate.image}
            alt={certificate.alt}
          />
        ))}
      </div>
      <div className="infoDiv">
        <h1 className="intoTitle">Om mig</h1>
        <p className="infoText">
          Med 28 år i bagaget och en uppväxt i Tyresö, har jag sedan tidig
          ungdom drivits av ett djupt intresse för programmering och
          mjukvaruutveckling. Min väg har dock varit allt annat än rak. Efter
          att ha fullföljt en gymnasieutbildning inom el-teknik och utforskat
          olika yrkesvägar, insåg jag att det var i kodens värld jag verkligen
          hörde hemma. Det är först nyligen som jag bestämt mig för att
          helhjärtat satsa på min passion. Jag har påbörjat en
          spelutvecklingsutbildning via Komvux samt ett
          frontend-utvecklingsprogram genom META. Dessa studier har inte bara
          bekräftat min kärlek för fältet utan också skärpt min förmåga att ta
          mig an komplicerade projekt. Jag är en person som trivs med att
          ständigt utmanas och ser varje nytt projekt som en möjlighet att växa.
          Programmering är inte bara ett yrke för mig – det är en livslång
          passion och det jag vill ägna min karriär åt. Jag ser fram emot att
          dyka ner i komplexa problem och fortsätta växa min kompetens
          tillsammans med likasinnade i branschen.
        </p>
      </div>
    </div>
  );
};

export default Section3;
