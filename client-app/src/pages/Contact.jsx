import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ThreeHero from "../components/ThreeHero";

import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    

      gsap.from(".contact-subtitle", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".contact-title", {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
      });

      gsap.from(".contact-description", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
      });


      gsap.from(".contact-info-card", {
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 80%",
        },

        x: -80,
        opacity: 0,

        duration: 1,

        ease: "power3.out",
      });

      gsap.from(".contact-form-card", {
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 80%",
        },

        x: 80,
        opacity: 0,

        duration: 1,

        delay: 0.2,

        ease: "power3.out",
      });

    

      gsap.from(".contact-field", {
        scrollTrigger: {
          trigger: ".contact-form-card",
          start: "top 80%",
        },

        y: 30,

        opacity: 0,

        stagger: 0.15,

        duration: 0.6,

        delay: 0.4,

        ease: "power3.out",
      });

      

      gsap.from(".contact-social-link", {
        scrollTrigger: {
          trigger: ".contact-socials",
          start: "top 90%",
        },

        scale: 0,

        opacity: 0,

        stagger: 0.15,

        duration: 0.5,

        ease: "back.out(1.7)",
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  // ========================================
  // FORM SUBMIT
  // ========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting me! I will get back to you soon."
    );

    e.target.reset();
  };

  return (
    <main
      className="contact-page"
      ref={contactRef}
    >
  

      <ThreeHero />

      

      <section className="contact-content">

        <p className="contact-subtitle">
          Get In Touch
        </p>

        <h1 className="contact-title">
          Let's Work Together
        </h1>

        <p className="contact-description">
          Have a project idea, collaboration
          opportunity or just want to say hello?
          Feel free to send me a message.
        </p>


        <div className="contact-container">


          <div className="contact-info-card">

            <h2>
              Contact Information
            </h2>

            <p>
              I'm always open to discussing
              new projects, ideas and
              opportunities.
            </p>


            {/* Email */}

            <div className="contact-info-item">

              <span className="contact-icon">
                ✉
              </span>

              <div>
                <small>
                  Email
                </small>

                <a href="mailto:yashchauhan@example.com">
                  yashchauhan@example.com
                </a>
              </div>

            </div>


            {/* Location */}

            <div className="contact-info-item">

              <span className="contact-icon">
                📍
              </span>

              <div>
                <small>
                  Location
                </small>

                <span>
                  India
                </span>
              </div>

            </div>


            {/* Availability */}

            <div className="contact-info-item">

              <span className="contact-icon">
                ●
              </span>

              <div>
                <small>
                  Availability
                </small>

                <span className="available">
                  Available for opportunities
                </span>
              </div>

            </div>


            <div className="contact-socials">

              <a
                className="contact-social-link"
                href="https://github.com/codewithyash580"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="contact-social-link"
                href="https://www.linkedin.com/in/yash-chauhan-29ab3a306"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>


          <div className="contact-form-card">

            <h2>
              Send Me a Message
            </h2>

            <form
              onSubmit={handleSubmit}
            >

            

              <div className="contact-field">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder = " Enter your name "
                  required
                />

              </div>


              {/* Email */}

              <div className="contact-field">

                <label>
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder = " Enter your email "
                  required
                />

              </div>


              {/* Subject */}

              <div className=" contact-field ">

                <label>
                  Subject
                </label>

                <input
                  type="text"
                  placeholder = " Enter subject "
                  required
                />

              </div>


              {/* Message */}

              <div className="contact-field">

                <label>
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder = " Write your message... "
                  required
                />

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
                <span>→</span>
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;