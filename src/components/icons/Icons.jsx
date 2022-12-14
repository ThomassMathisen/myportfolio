import "./icons.css";
import { LinkedIn, GitHub } from "@material-ui/icons";
import { ThemeContext } from "../../context";
import { useContext } from "react";

export default function Icons() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="iconContainer">
      <a
        href="https://github.com/ThomassMathisen"
        className="github"
        style={{
          backgroundColor: darkMode && "#1F2937",
          color: darkMode && "white",
        }}
      >
        <GitHub />
      </a>
      <a
        href="https://www.linkedin.com/in/thomas-storbakk-mathisen-315617106/"
        className="linkedIn"
        style={{
          backgroundColor: darkMode && "#1F2937",
          color: darkMode && "white",
        }}
      >
        <LinkedIn />
      </a>
      <a
        className="blogLink"
        href="blog"
        style={{
          backgroundColor: darkMode && "#1F2937",
          color: darkMode && "white",
          fontFamily: "courier",
        }}
      >
        blog.
      </a>
    </div>
  );
}
