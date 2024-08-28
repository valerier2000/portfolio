import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const links = [
    {
      name: "Email",
      icon: <EmailIcon className="contact-icon" />,
      url: "mailto:rautela4488@gmail.com",
    },
    {
      name: "Phone",
      icon: <LocalPhoneIcon className="contact-icon" />,
      url: "tel:+48577855970",
    },
    {
      name: "GitHub",
      icon: <GitHubIcon className="contact-icon" />,
      url: "https://github.com/aayushrautela",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon className="contact-icon" />,
      url: "https://www.linkedin.com/in/aayush-rautela-50471a240/",
    },
  ];

  return (
    <section className="contact">
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
