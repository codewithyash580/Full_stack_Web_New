import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import ThreeHero from "../components/ThreeHero";

import "./Home.css";

function Home() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(".hero-subtitle", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".hero-title",
          {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-role",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-stats",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="home" ref={heroRef}>



      <ThreeHero />


      <section className="hero-content">

        

        <p className="hero-subtitle">
          👋 Hello, I'm
        </p>

        

        <h1 className="hero-title">
          Yash Chauhan
        </h1>

        

        <h2 className="hero-role">
          Web Developer &{" "}
          <span>Data Science Enthusiast</span>
        </h2>

      

        <p className="hero-description">
          I build modern web applications and explore
          Data Science and Machine Learning to create
          meaningful and impactful digital solutions.
        </p>

        {/* Buttons */}

        <div className="hero-buttons">

          <Link to="/projects">
            View My Work →
          </Link>

          <Link to="/contact">
            Contact Me
          </Link>

        </div>

        {/* =========================
            SOCIAL LINKS
        ========================= */}

        <div className="hero-socials">

          <a
            href="https://github.com/codewithyash580"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yash-chauhan-29ab3a306"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>


        <div className="hero-stats">

          <div className="stat-card">
            <strong>8+</strong>
            <span>Projects Completed</span>
          </div>

          <div className="stat-card">
            <strong>5+</strong>
            <span>Technologies</span>
          </div>

          <div className="stat-card">
            <strong>100+</strong>
            <span>Hours of Coding</span>
          </div>

          <div className="stat-card">
            <strong>∞</strong>
            <span>Learning & Growing</span>
          </div>

        </div>

      </section>

      

      <div className="scroll-indicator">
        <span>↓</span>
        Scroll Down
      </div>

    </main>
  );
}

export default Home;