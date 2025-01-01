import "./AboutMe.css";
import profilePic from "../assets/Aayush.png";

function AboutMe() {
  return (
    <section className="paralax">
      <div className="about-me">
        <div className="about-me-container">
          <div className="about-me-img">
            <img src={profilePic} alt="Aayush" />
          </div>
          <div className="about-me-text">
            <h2>About me</h2>
            <p>
              Hi, I am Valeriia. I am a passionate frontend developer with a
              focus on React.js and building responsive, user-friendly web
              applications. I have a background in computer science and
              experience as a Junior React Developer, where I worked on projects
              such as a university analytics system and a CRM system for sports
              teams. I also bring strong skills in JavaScript, CSS, HTML, and
              state management libraries like Zustand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
