import "./Services.css";
import {
  FaGlobe,
  FaLaptopCode,
  FaShoppingCart,
  FaRocket,
  FaTools,
  FaChartLine,
} from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services" data-aos="fade-up">

      <div className="services-title">

        <span>OUR SERVICES</span>

        <h2>
          Everything You Need To Grow Online
        </h2>

        <p>
          From business websites to custom web applications, 
          we create digital solutions that help businesses build trust, 
          attract customers and grow online.
        </p>

      </div>

      <div className="services-grid">

        <div className="service-card" data-aos="zoom-in">
          <FaGlobe />
          <h3>Business Website</h3>
          <p>
            Professional websites designed for startups,
            local businesses and service providers.
          </p>
        </div>

        <div className="service-card" data-aos="zoom-in">
          <FaLaptopCode />
          <h3>Web Applications</h3>
          <p>
            Custom web applications built using modern
            technologies like React and Spring Boot.
          </p>
        </div>

        <div className="service-card" data-aos="zoom-in">
          <FaShoppingCart />
          <h3>E-Commerce</h3>
          <p>
            Sell your products online with secure,
            responsive and easy-to-manage stores.
          </p>
        </div>

        <div className="service-card">
          <FaChartLine />
          <h3>Website Redesign</h3>
          <p>
            Transform outdated websites into modern,
            fast and responsive experiences.
          </p>
        </div>

        <div className="service-card" data-aos="zoom-in">
          <FaTools />
          <h3>Website Support & Updates</h3>
          <p>
            Keep your website secure, updated,
            optimized and running smoothly.
          </p>
        </div>

        <div className="service-card" data-aos="zoom-in">
          <FaRocket />
          <h3>SEO & Performance</h3>
          <p>
            Improve website speed, visibility and
            search engine performance.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;