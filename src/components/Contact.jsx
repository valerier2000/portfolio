import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Contact.css";

const links = [
  {
    name: "Email",
    icon: <EmailIcon className="contact-icon" />,
    url: "mailto:valeriiarohatynska@gmail.com",
  },
  {
    name: "Phone",
    icon: <LocalPhoneIcon className="contact-icon" />,
    url: "tel:+48575246082",
  },
  {
    name: "GitHub",
    icon: <GitHubIcon className="contact-icon" />,
    url: "https://github.com/valerier2000",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon className="contact-icon" />,
    url: "https://www.linkedin.com/in/valerier2000/",
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        {links.map((link) => (
          <a
            href={link.url}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link">{link.icon}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
