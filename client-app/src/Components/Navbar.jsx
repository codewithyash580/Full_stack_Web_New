import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      
      <NavLink
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        Yash<span>.</span>
      </NavLink>

      
      <div
        className={`nav-links ${
          menuOpen ? "open" : ""
        }`}
      >
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/skills" onClick={closeMenu}>
          Skills
        </NavLink>

        <NavLink to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>

        <NavLink to="/experience" onClick={closeMenu}>
          Experience
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        
        <NavLink
          to="/resume"
          className="mobile-resume"
          onClick={closeMenu}
        >
          Resume
        </NavLink>
      </div>

      
      <NavLink
        to="/resume"
        className="resume-btn"
      >
        Download Resume
      </NavLink>

      
      <button
        className="menu-btn"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </nav>
  );
}

export default Navbar;