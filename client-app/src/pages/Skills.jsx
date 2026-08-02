import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ThreeHero from "../components/ThreeHero";

import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);

  const skills = [
    {
      name: "HTML",
      level: "90%",
      category: "Frontend",
    },
    {
      name: "CSS",
      level: "85%",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      level: "80%",
      category: "Frontend",
    },
    {
      name: "React.js",
      level: "80%",
      category: "Frontend",
    },
    {
      name: "Node.js",
      level: "75%",
      category: "Backend",
    },
    {
      name: "Express.js",
      level: "70%",
      category: "Backend",
    },
    {
      name: "MongoDB",
      level: "70%",
      category: "Database",
    },
    {
      name: "Python",
      level: "85%",
      category: "Data Science",
    },
    {
      name: "Pandas",
      level: "80%",
      category: "Data Science",
    },
    {
      name: "NumPy",
      level: "80%",
      category: "Data Science",
    },
    {
      name: "Scikit-learn",
      level: "70%",
      category: "Machine Learning",
    },
    {
      name: "SQL",
      level: "75%",
      category: "Database",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ========================================
      // TITLE ANIMATION
      // ========================================

      gsap.from(".skills-subtitle", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".skills-title", {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
      });

      // ========================================
      // SKILL CARD ANIMATION
      // ========================================

      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },

        y: 80,
        opacity: 0,
        scale: 0.8,
        rotateX: 20,

        stagger: 0.1,

        duration: 0.8,

        ease: "back.out(1.5)",
      });

      // ========================================
      // SKILL BAR ANIMATION
      // ========================================

      gsap.fromTo(
        ".skill-progress",
        {
          width: "0%",
        },
        {
          width: (index) => skills[index].level,

          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },

          duration: 1.5,

          stagger: 0.15,

          ease: "power3.out",
        }
      );

      // ========================================
      // CATEGORY ANIMATION
      // ========================================

      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },

        opacity: 0,

        y: 20,

        stagger: 0.1,

        duration: 0.5,
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  // ========================================
  // MOUSE HOVER EFFECT
  // ========================================

  const handleMouseMove = (e) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;

    const rotateY = (centerX - x) / 15;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <main
      className="skills-page"
      ref={skillsRef}
    >
      {/* ========================================
          THREE.JS BACKGROUND
      ======================================== */}

      <ThreeHero />

      {/* ========================================
          SKILLS CONTENT
      ======================================== */}

      <section className="skills-content">
        <p className="skills-subtitle">
          My Technical Skills
        </p>

        <h1 className="skills-title">
          Skills & Technologies
        </h1>

        <p className="skills-description">
          Technologies and tools I use to build
          modern web applications and
          data-driven solutions.
        </p>

        {/* ========================================
            SKILLS GRID
        ======================================== */}

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Card Header */}

              <div className="skill-card-header">
                <h2>{skill.name}</h2>

                <span>
                  {skill.level}
                </span>
              </div>

              {/* Category */}

              <p className="skill-category">
                {skill.category}
              </p>

              {/* Progress Bar */}

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ========================================
            TECHNOLOGY SUMMARY
        ======================================== */}

        <div className="skills-summary">
          <div className="summary-card">
            <strong>Frontend</strong>

            <span>
              React.js • JavaScript • CSS
            </span>
          </div>

          <div className="summary-card">
            <strong>Backend</strong>

            <span>
              Node.js • Express.js
            </span>
          </div>

          <div className="summary-card">
            <strong>Data Science</strong>

            <span>
              Python • Pandas • NumPy
            </span>
          </div>

          <div className="summary-card">
            <strong>Database</strong>

            <span>
              MongoDB • SQL
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;