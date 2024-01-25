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
  },
  {
    titel: "Role Playing Game",
    img: require("./assets/RPG.png"),
    url: "https://github.com/Karlgit13/Role-Playing-Game",
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
