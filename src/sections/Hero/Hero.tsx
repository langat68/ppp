//import React from "react";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        {/* Text Section */}
        <div className="hero-text">
          <p>Frontend Developer</p>

          <h1>
            Hi, I'm <span>Alex Chen</span>
          </h1>

          <p>
            I craft pixel-perfect, accessible, and performant web experiences
            with modern technologies. Let's build something amazing together.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              View Projects <ArrowDown size={16} />
            </a>

            <a href="#contact">
              Contact Me <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image">
          <div>
            <span>👨‍💻</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
