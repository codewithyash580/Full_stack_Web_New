import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ThreeHero from "../Components/ThreeHero";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      
      gsap.from(".about-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      
      gsap.to(".about-content", {
        scrollTrigger: {
          trigger: ".about-page",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -80,
      });

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className="about-page"
      ref={aboutRef}
    >

      
      <ThreeHero />

      
      <section className="about-content">

        <p className="about-subtitle">
          Get To Know Me
        </p>

        <h1 className="about-title">
          About Me
        </h1>

        <div className="about-grid">

          <div className="about-card">
            <h2>Who I Am</h2>

            <p>
              I'm Yash Chauhan, a B.Tech Computer
              Science student passionate about
              Web Development, Data Science and
              Machine Learning.
            </p>
          </div>

          <div className="about-card">
            <h2>My Journey</h2>

            <p>
              I'm continuously learning modern
              technologies and building real-world
              projects to improve my development
              and problem-solving skills.
            </p>
          </div>

          <div className="about-card">
            <h2>My Goal</h2>

            <p>
              My goal is to become a skilled software
              developer and build impactful digital
              solutions using modern technologies.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default About;