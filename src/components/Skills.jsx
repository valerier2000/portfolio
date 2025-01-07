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
  { name: "HTML5", src: html },
  { name: "CSS3", src: css },
  { name: "JavaScript", src: js },
  { name: "React", src: react },
  { name: "TypeScript", src: ts },
  { name: "SASS", src: sass },
  { name: "Material-UI", src: materialui },
  { name: "DevExtreme", src: devextreme },
  { name: "Tailwind CSS", src: tailwind },
  { name: "Zustand", src: zustand },
  { name: "PostgreSQL", src: postgresql },
  { name: "MongoDB", src: mongodb },
  { name: "Git", src: git },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <img src={skill.src} alt={skill.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
