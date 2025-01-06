import "./Skills.css";
import project3 from "../assets/Valeriia.jpg";

const skills = [
  { name: "HTML5", src: project3 },
  { name: "CSS3", src: project3 },
  { name: "JavaScript", src: project3 },
  { name: "React", src: project3 },
  { name: "TypeScript", src: project3 },
  { name: "SASS", src: project3 },
  { name: "Material-UI", src: project3 },
  { name: "DevExtreme", src: project3 },
  { name: "Tailwind CSS", src: project3 },
  { name: "Zustand", src: project3 },
  { name: "PostgreSQL", src: project3 },
  { name: "MongoDB", src: project3 },
  { name: "Git", src: project3 },
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
