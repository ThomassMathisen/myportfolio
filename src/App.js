import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Icons from "./components/icons/Icons";
import Skills from "./components/skills/Skills";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="app"
      style={{
        backgroundColor: darkMode ? "#1F2937" : "white",
        color: darkMode ? darkMode && "white" : "#1F2937",
      }}
    >
      <Toggle />
      <Icons />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
