import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ThreeHero from "../Components/ThreeHero";

import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const experienceRef = useRef(null);

  const experiences = [
    {
      year: "2026",
      title: "Web Development Intern",
      company: "Internship",
      description:
        "Worked on modern web development projects using React.js, JavaScript, HTML and CSS. Built responsive user interfaces and worked with component-based architecture.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },

    {
      year: "2026",
      title: "Data Science & ML Projects",
      company: "Personal Projects",
      description:
        "Built data science and machine learning projects using Python, Pandas, NumPy and Scikit-learn. Worked on data preprocessing, model training and prediction systems.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
      ],
    },

    {
      year: "2025 - Present",
      title: "Full Stack Web Development",
      company: "Learning & Projects",
      description:
        "Learning and building full-stack applications using React.js, Node.js, Express.js and MongoDB. Exploring REST APIs, authentication and backend development.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },

    {
      year: "2024 - Present",
      title: "B.Tech Computer Science",
      company: "Computer Science & Engineering",
      description:
        "Pursuing B.Tech in Computer Science and Engineering while developing skills in programming, web development, data science and machine learning.",
      technologies: [
        "Python",
        "JavaScript",
        "Data Structures",
        "SQL",
      ],
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      

      gsap.from(".experience-subtitle", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".experience-title", {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
      });

      gsap.from(".experience-description", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
      });


      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: ".experience-timeline",
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },

        scaleY: 0,

        transformOrigin: "top center",
      });

      // ========================================
      // EXPERIENCE ITEMS
      // ========================================

      gsap.from(".experience-item", {
        scrollTrigger: {
          trigger: ".experience-timeline",
          start: "top 80%",
        },

        y: 100,

        opacity: 0,

        stagger: 0.3,

        duration: 1,

        ease: "power3.out",
      });

      

      gsap.from(".timeline-dot", {
        scrollTrigger: {
          trigger: ".experience-timeline",
          start: "top 80%",
        },

        scale: 0,

        opacity: 0,

        stagger: 0.3,

        duration: 0.5,

        ease: "back.out(2)",
      });

      

      gsap.from(".tech-tag", {
        scrollTrigger: {
          trigger: ".experience-timeline",
          start: "top 75%",
        },

        scale: 0,

        opacity: 0,

        stagger: 0.08,

        duration: 0.4,

        ease: "back.out(1.7)",
      });
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  

  const handleMouseMove = (e) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;

    const rotateY = (centerX - x) / 20;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.02,
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
      className="experience-page"
      ref={experienceRef}
    >
      

      <ThreeHero />

      

      <section className="experience-content">

        <p className="experience-subtitle">
          My Journey
        </p>

        <h1 className="experience-title">
          Experience & Education
        </h1>

        <p className="experience-description">
          My journey of learning, development,
          internships and building real-world
          projects.
        </p>

        <div className="experience-timeline">


          <div className="timeline-line"></div>

          {experiences.map(
            (experience, index) => (
              <div
                className={`experience-item ${
                  index % 2 === 0
                    ? "left"
                    : "right"
                }`}
                key={index}
              >


                <div className="timeline-dot">
                  <span></span>
                </div>

                

                <div
                  className="experience-card"
                  onMouseMove={
                    handleMouseMove
                  }
                  onMouseLeave={
                    handleMouseLeave
                  }
                >

                  <span className="experience-year">
                    {experience.year}
                  </span>

                  <h2>
                    {experience.title}
                  </h2>

                  <h3>
                    {experience.company}
                  </h3>

                  <p>
                    {experience.description}
                  </p>

                  

                  <div className="experience-tech">

                    {experience.technologies.map(
                      (technology, techIndex) => (
                        <span
                          className="tech-tag"
                          key={techIndex}
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </section>

    </main>
  );
}

export default Experience;