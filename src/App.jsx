import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

const ProjektLista = [
  {
    titel: "Pokemon Arena",
    img: require("./assets/poke.png"),
    url: "https://karlgit13.github.io/pokemon/",
    buttonText: "LIVE DEMO =>",
    beskrivning:
      "Det här projektet är en applikation jag utvecklade för att fördjupa mina färdigheter i att integrera och hantera data från externa API:er, specifikt genom att använda PokeAPI. Appen är ett Pokemon-arenaspel där allt från attack- och försvarsstatistik till andra grundläggande egenskaper för varje Pokemon hämtas direkt från PokeAPI.",
  },
  {
    titel: "E-Handel",
    img: require("./assets/e-handelUpdaterad.png"),
    url: "https://karlgit13.github.io/E-handel/",
    buttonText: "LIVE DEMO =>",
    beskrivning:
      "Detta är en responsiv e-handelsplattform, skapad från grunden med Create React App (CRA). Den är designad för att ge en sömlös shoppingupplevelse på alla enheter, med enkel navigering och en intuitiv användarinterface.",
  },
  {
    titel: "Little Lemon Restaurant",
    img: require("./assets/LittleLemon.png"),
    url: "https://karlgit13.github.io/React-Little-Lemon-Restaurant/",
    buttonText: "LIVE DEMO =>",
    beskrivning:
      "Det här är mitt första projekt i React.js, som jag utvecklade under tiden jag genomgick ett online-kurspaket i Front-end-utveckling. Det har varit en enormt givande erfarenhet som inte bara utvecklat mina tekniska färdigheter, utan också gett mig insikter i responsiv design för både desktop och mobila enheter.",
  },
  {
    titel: "Tränings-Tracker",
    img: require("./assets/gymTracker.png"),
    url: "https://karlgit13.github.io/Tr-nings-Tracker/",
    buttonText: "LIVE DEMO =>",
    beskrivning:
      "Mitt problem: Jag gillar att gymma i stortsätt varje dag men är inte ett fan av att följa strikta gymscheman. Min lösning: En app som hjälper mig att hålla koll på vilka muskelgrupper jag har tränat under veckans gång (så jag får med hela kroppen) och även återhämtningstiden för musklerna. PS. detta är ett enkelt projekt skapat för att hjälpa mig. Projektet använder ingen databas utan använder sig av lokalminnet i webbläsaren och är inställd på att återställas när en ny vecka börjar!",
  },
  {
    titel: '"UNDER CONSTRUCTION"',
    img: require("./assets/UnderConstruction.png"),
    url: "",
    buttonText: null,
    beskrivning: "",
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
