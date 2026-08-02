import { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Mental Health Score",
      category: "Machine Learning",
      description:
        "A machine learning project that predicts mental health scores using student data.",
      tech: ["Python", "Pandas", "Scikit-learn", "FastAPI"],
      github: "https://github.com/codewithyash580/Mental-Health-Score",
      demo: "https://mental-health-score-1-s1fl.onrender.com",
      icon: "🧠",
    },

    {
      title: "Portfolio Website",
      category: "Web Development",
      description:
        "A responsive portfolio website using React.js that shows my skills, projects, education, and experience.",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
      github: "https://github.com/codewithyash580/mern-portfolio",
      demo: "https://frontend-portfolio-l1ns.onrender.com",
      icon: "💻",
    },
  ];

  const filters = [
    "All",
    "Web Development",
    "Data Science",
    "Machine Learning",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <div>
      <main className="projects-page">
        <h1>My Projects</h1>

        <p className="projects-intro">
          Here are some of the projects I have built while
          learning and exploring Web Development, Data Science,
          and Machine Learning.
        </p>

        
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <span>{project.icon}</span>
              </div>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                
                <div className="tech-list">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>

                
                <div className="project-buttons">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🐙 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <section className="project-cta">
          <h2>Have a project in mind?</h2>

          <p>
            Let's work together and build something amazing.
          </p>

          <Link to="/contact">
            Contact Me →
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Projects;