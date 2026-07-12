import "./Hero.css";
import {
  FaReact,
  FaJava,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiVite,
} from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">

      <div className="hero-bg"></div>

      <div className="hero-left">

        <span className="hero-badge">
          🚀 Modern Websites for Growing Businesses
        </span>

        <h1>
          Modern Websites <br />
          for Growing <br />
          <span>Businesses</span>
        </h1>

        <p>
          Helping businesses build a strong online presence with
          modern, responsive and custom websites that are designed
          to attract customers and grow your brand.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="btn-primary">
            Start Your Project
            <FaArrowRight />
          </a>

          <a href="#portfolio" className="btn-outline">
            See Our Work
          </a>

        </div>

        <div className="hero-features">

          <div className="feature">
            ⚡ On-Time Delivery
          </div>

          <div className="feature">
            📱 Fully Responsive
          </div>

          <div className="feature">
            🎨 Custom Design
          </div>

          <div className="feature">
            🔒 Secure & SEO Ready
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="tech-circle"></div>

        <div className="tech-card react">
          <FaReact />
          <span>React</span>
        </div>

        <div className="tech-card java">
          <FaJava />
          <span>Java</span>
        </div>

        <div className="tech-card spring">
          <SiSpringboot />
          <span>Spring Boot</span>
        </div>

        <div className="tech-card postgres">
          <SiPostgresql />
          <span>PostgreSQL</span>
        </div>

        <div className="tech-card vite">
          <SiVite />
          <span>Vite</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;