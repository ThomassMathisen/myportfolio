import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Icons from "../../components/icons/Icons";
import Intro from "../../components/intro/Intro";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import Toggle from "../../components/toggle/Toggle";
import "./home.css";

export default function home() {
  return (
    <>
      <Toggle />
      <Icons />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
