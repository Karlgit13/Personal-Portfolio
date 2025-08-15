import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import gymImg from "./assets/gym5.0.png";
import pokeImg from "./assets/pokeupdate.png";
import ehandelImg from "./assets/e-handelUpdaterad.png";
import ehandelTwImg from "./assets/eHandelTailwind.png";
import lemonImg from "./assets/LittleLemon.png";

const ProjektLista = [
  {
    titel: "Gym-App",
    img: gymImg,
    url: "https://workout-tau-cyan.vercel.app/",
    buttonText: "LIVE DEMO",
    githubRepoUrl: "https://github.com/Karlgit13/Tr-nings-Tracker",
    beskrivning:
      "Detta projekt hostas på Vercel.com med Serverlösa funktioner, och använder MongoDB för databas. För lokal produktion har jag skapat en egen Express backend Server som kommunicerar med Front-enden via API. Kolla gärna min Github repository om du är nyfiken på filerna!",
  },
  {
    titel: "Pokemon Arena",
    img: pokeImg,
    url: "https://karlgit13.github.io/pokemon/",
    buttonText: "LIVE DEMO",
    githubRepoUrl: "https://github.com/Karlgit13/pokemon",
    beskrivning:
      "Det här projektet är en applikation jag utvecklade för att fördjupa mina färdigheter i att integrera och hantera data från externa API:er, specifikt genom att använda PokeAPI. Appen är ett Pokemon-arenaspel där allt från attack- och försvarsstatistik till andra grundläggande egenskaper för varje Pokemon hämtas direkt från PokeAPI.",
  },
  {
    titel: "E-Handel",
    img: ehandelImg,
    url: "https://karlgit13.github.io/E-handel/",
    buttonText: "LIVE DEMO",
    githubRepoUrl: "https://github.com/Karlgit13/E-handel",
    beskrivning:
      "Detta är en responsiv e-handelsplattform, skapad från grunden med Create React App (CRA). Den är designad för att ge en sömlös shoppingupplevelse på alla enheter, med enkel navigering och en intuitiv användarinterface.",
  },
  {
    titel: "E-Handel TailwindCSS",
    img: ehandelTwImg,
    url: "https://karlgit13.github.io/e-handel-tailwind/",
    buttonText: "LIVE DEMO",
    githubRepoUrl: "https://github.com/Karlgit13/e-handel-tailwind",
    beskrivning: "Samma E-handel projekt fast total remake med TailwindCSS.",
  },
  {
    titel: "Little Lemon Restaurant",
    img: lemonImg,
    url: "https://karlgit13.github.io/React-Little-Lemon-Restaurant/",
    buttonText: "LIVE DEMO",
    githubRepoUrl: "https://github.com/Karlgit13/React-Little-Lemon-Restaurant",
    beskrivning:
      "Det här är mitt första projekt i React.js, som jag utvecklade under tiden jag genomgick ett online-kurspaket i Front-end-utveckling. Det har varit en enormt givande erfarenhet som inte bara utvecklat mina tekniska färdigheter, utan också gett mig insikter i responsiv design för både desktop och mobila enheter.",
  },
];

export default function App() {
  return (
    <div className="app">
      <div>
        <Nav />
      </div>
      <div>
        <Section1 />
      </div>
      <div>
        <Section2 ProjektLista={ProjektLista} />
      </div>
      <div>
        <Section3 />
      </div>
    </div>
  );
}
