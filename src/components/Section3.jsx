import "../style/section3.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Section3;
