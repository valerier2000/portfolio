import Carousel from "./Carousel";
import project3 from "../../assets/p3.jpg";
import "./Projects.css";

const slides = [
  {
    url: project3,
    name: "OnTrack",
    description:
      "A web application designed to streamline project management across industries by replacing traditional methods with a digital Kanban board. OnTrack enables users to add projects and tasks, move tasks between columns (To Do, Doing, Done),and utilize drag-and-drop functionality for easy task management",
  },
  {
    url: project3,
    name: "7 Wonders Table Calculator",
    description:
      "A web-based calculator designed to simplify score tracking for the board game 7 Wonders. The application allows players to input scores across various categories, calculates totals dynamically, and provides a user-friendly interface for managing game scoring.",
  },
  {
    url: project3,
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam voluptatem quia laborum rem, distinctio incidunt facere eius mollitia enim odio optio aliquid et nesciunt dignissimos nam. Enim, assumenda rem",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      {/* <h2>Projects</h2> */}
      <Carousel slides={slides} />
    </section>
  );
}

export default Projects;
