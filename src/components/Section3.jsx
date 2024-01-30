import "../style/section3.css";
import FrontEndCert from "../assets/FrontEndCert.jpg";
import FrontEndBadge from "../assets/FrontEndBadge.png";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mejlIkon = [
  {
    icon: faEnvelope,
    url: "mailto: karl.vareskog@gmail.com",
    className: "envelope",
  },
];

const p = "Klicka på brevet för att mejla mig =>";

const Section3 = () => {
  return (
    <div id="section3" className="section3">
      <h1 className="section3-heading">Om mig</h1>

      <div>
        <Accordion className="accordion">
          <AccordionSummary
            className="accordion"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Bakgrund</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Som en nybliven front-end utvecklare har jag en stark grund genom
              ett omfattande kurspaket från META, vilket resulterade i ett
              certifikat inom front-end utveckling. Parallellt studerar jag
              spelutveckling på distans, men mitt hjärta och största intresse
              ligger i front-end utveckling, där jag särskilt dras till HTML,
              CSS, JavaScript och framför allt React.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Min Resa</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Min teknikresa började med en fascination för att skapa och förstå
              digitala produkter. Genom META:s front-end utbildning, lärde jag
              mig inte bara grunderna i kodning och design utan också betydelsen
              av användarcentrerad utveckling. Även om jag breddar mina
              kunskaper genom studier i spelutveckling, är det inom front-end
              utveckling, med dess dynamiska och kreativa möjligheter, som jag
              finner min största passion.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Passion och Hobby</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Utanför mitt professionella arbete har jag ett starkt intresse för
              webbdesign och front-end utveckling. Jag tillbringar mycket av min
              fritid med att utforska och experimentera inom området, särskilt
              med att skapa engagerande användargränssnitt med HTML, CSS och
              JavaScript. React är mitt verktyg av val för dess förmåga att
              skapa interaktiva och responsiva webbupplevelser.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Vad jag har lärt mig</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Min utbildning har gett mig en fast grund inom front-end
              utveckling, där jag har fördjupat mig i moderna teknologier och
              verktyg. Även om min nuvarande studie inom spelutveckling breddar
              mina perspektiv, är det inom front-end jag har samlat de mest
              värdefulla erfarenheterna, särskilt inom gränssnittsdesign och
              användarupplevelse. Denna kombination av utbildning och praktisk
              erfarenhet gör mig till en mångsidig utvecklare, redo att ta mig
              an utmanande projekt.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Framtidsutsikter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Jag ser fram emot att fortsätta utvecklas som front-end
              utvecklare, med en särskild passion för att skapa användarvänliga
              och estetiskt tilltalande webblösningar. Med en grund i både
              front-end utveckling och grunderna i spelutveckling, ser jag en
              spännande framtid där jag kan bidra med min unika kompetens till
              att skapa innovativa digitala upplevelser.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="cert-container">
        <img className="cert" src={FrontEndCert} alt="cert" />
        <img className="badge" src={FrontEndBadge} alt="badge" />
      </div>
      <div className="kontakta-mig">
        <p className="brev">{p}</p>
        {mejlIkon.map(({ url, icon, className }) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={icon}
              size="3x"
              className={`${className} blue-icon`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section3;
