import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

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
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
    </div>
  );
}
