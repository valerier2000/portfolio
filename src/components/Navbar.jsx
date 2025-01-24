import "./Navbar.css";

const navbarLinks = [
  { name: "About me", href: "#about-me" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

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
          {navbarLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
