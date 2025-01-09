import "./Skills.css";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/reactjs.svg";
import ts from "../assets/ts.svg";
import sass from "../assets/sass.svg";
import materialui from "../assets/material-ui.svg";
import devextreme from "../assets/devextreme.png";
import tailwind from "../assets/tailwind-css.svg";
import zustand from "../assets/zustand.svg";
import postgresql from "../assets/postgresql.svg";
import mongodb from "../assets/mongodb.svg";
import git from "../assets/git.svg";

const skills = [
  {
    name: "HTML5",
    src: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    src: css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    src: js,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "React", src: react, link: "https://reactjs.org/" },
  { name: "TypeScript", src: ts, link: "https://www.typescriptlang.org/" },
  { name: "SASS", src: sass, link: "https://sass-lang.com/" },
  { name: "Material-UI", src: materialui, link: "https://mui.com/" },
  { name: "DevExtreme", src: devextreme, link: "https://js.devexpress.com/" },
  { name: "Tailwind CSS", src: tailwind, link: "https://tailwindcss.com/" },
  {
    name: "Zustand",
    src: zustand,
    link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
  { name: "PostgreSQL", src: postgresql, link: "https://www.postgresql.org/" },
  { name: "MongoDB", src: mongodb, link: "https://www.mongodb.com/" },
  { name: "Git", src: git, link: "https://git-scm.com/" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <a href={skill.link} target="_blank" rel="noopener noreferrer">
              <img src={skill.src} alt={skill.name} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
