import "./portfolio.css";
import Projects from "../projects/Projects";
import { projects } from "../../projects";

const Portfolio = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Take a look at some of the website that I have created and designed.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
