import "./Navbar.css";

const handleLogoClick = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo" onClick={handleLogoClick}>
          Valeriia Rohatynska
        </a>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <a href="#about-me" className="nav-link">
              About me
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
