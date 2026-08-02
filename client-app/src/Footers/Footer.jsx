import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-about">
          <Link to="/" className="footer-logo">
            Yash<span>.</span>
          </Link>

          <p>
            Web Developer & Data Science Enthusiast
            passionate about building modern and
            meaningful digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>

        
        <div className="footer-social">
          <h3>Connect With Me</h3>

          
          <a
            href="https://github.com/codewithyash580"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yash-chauhan-29ab3a306"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          
          <a href="mailto:your-email@gmail.com">
            Email
          </a>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Yash Chauhan.
          All Rights Reserved.
        </p>

        <p>
          Built with React ⚛️
        </p>
      </div>
    </footer>
  );
}

export default Footer;