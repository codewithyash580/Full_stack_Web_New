import "./Resume.css";

function Resume() {
  return (
    <main className="resume-page">
      <h1>My Resume</h1>

      <p className="resume-intro">
        Download my resume to learn more about my skills,
        education, projects, and experience.
      </p>

      
      <div className="resume-actions">
        <a
          href="/resume.pdf"
          download="Yash-Chauhan-Resume.pdf"
          className="download-btn"
        >
          📄 Download Resume
        </a>

        <button
          className="print-btn"
          onClick={() => window.print()}
        >
          🖨️ Print Resume
        </button>
      </div>

      
      <section className="resume-preview">
        <div className="resume-header">
          <h2>Yash Chauhan</h2>

          <p>
            Web Developer | Data Science Enthusiast
          </p>

          <div className="resume-contact">
            <span>📧 chauhanyash098234@gmail.com</span>
            <span>📱 +91 7217458480</span>
            <span>📍 India</span>
          </div>
        </div>

        <div className="resume-section">
          <h3>Profile</h3>

          <p>
            B.Tech Computer Science student passionate about
            Web Development, Data Science, and Machine
            Learning. Interested in building real-world
            applications and learning modern technologies.
          </p>
        </div>

        <div className="resume-section">
          <h3>Education</h3>

          <h4>B.Tech in Computer Science and Engineering</h4>

          <p>
            Currently pursuing B.Tech in Computer Science
            and Engineering.
          </p>
        </div>

        <div className="resume-section">
          <h3>Technical Skills</h3>

          <div className="resume-skills">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Python</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Machine Learning</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="resume-section">
          <h3>Projects</h3>

          
          <h4>Mental Health Prediction</h4>
          <p>
            Machine Learning project using Python and
            Scikit-learn with FastAPI backend.
          </p>

          <h4>Personal Portfolio</h4>
          <p>
            Multi-page responsive portfolio website built
            using React and React Router.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Resume;