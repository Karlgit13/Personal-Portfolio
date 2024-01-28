import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

// lätt tillgänglig.
const ProjektLista = [
  {
    titel: "Little Lemon Restaurant",
    img: require("./assets/LittleLemon.png"),
    url: "https://karlgit13.github.io/React-Little-Lemon-Restaurant/",
    buttonText: "LIVE DEMO =>",
    beskrivning:
      "Det här är mitt första projekt i React.js, som jag utvecklade under tiden jag genomgick ett online-kurspaket i Front-end-utveckling. Det har varit en enormt givande erfarenhet som inte bara utvecklat mina tekniska färdigheter, utan också gett mig insikter i responsiv design för både desktop och mobila enheter.",
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
