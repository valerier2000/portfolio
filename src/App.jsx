import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
