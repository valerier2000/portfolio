import OnTrack from "../../assets/projects/OnTrackLogo.png";
import "./Projects.css";

const projects = [
  {
    img: OnTrack,
    name: "OnTrack",
    url: "https://adrgri.github.io/OnTrack.Frontend.React/",
    description:
      "A web application designed to streamline project management across industries by replacing traditional methods with a digital Kanban board. OnTrack enables users to add projects and tasks, move tasks between columns (To Do, Doing, Done),and utilize drag-and-drop functionality for easy task management",
  },
  {
    img: OnTrack,
    name: "7 Wonders Table Calculator",
    url: "https://adrgri.github.io/OnTrack.Frontend.React/",
    description:
      "A web-based calculator designed to simplify score tracking for the board game 7 Wonders. The application allows players to input scores across various categories, calculates totals dynamically, and provides a user-friendly interface for managing game scoring.",
  },
  {
    img: OnTrack,
    name: "Project 3",
    url: "https://adrgri.github.io/OnTrack.Frontend.React/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam voluptatem quia laborum rem, distinctio incidunt facere eius mollitia enim odio optio aliquid et nesciunt dignissimos nam. Enim, assumenda rem",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      {/* <Carousel slides={slides} /> */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.name}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={`Project ${project.name}`} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
