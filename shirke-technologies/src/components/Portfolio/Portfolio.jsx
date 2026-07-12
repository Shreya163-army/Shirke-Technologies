import "./Portfolio.css";
import { FaReact, FaMobileAlt } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";

import promax from "../../assets/images/promax-preview.png";

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio" data-aos="fade-up">

            <div className="portfolio-heading">

                <span>FEATURED PROJECT</span>

                <h2>Our Recent Work</h2>

                <p>
                    Every project is built with attention to detail, modern design,
                    and a focus on helping businesses establish a strong online presence.
                </p>

            </div>

            <div className="project-card">

                {/* LEFT */}

                <div className="project-image" data-aos="fade-right">

                    <div className="browser">

                        <div className="browser-top">

                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>

                        </div>

                        <img src={promax} alt="Promax Facility Website" />

                    </div>

                </div>

                {/* RIGHT */}

                <div className="project-content" data-aos="fade-left">

                    <span className="project-type">
                        Corporate Business Website
                    </span>

                    <span className="live-badge">
                        ● Live Client Project
                    </span>

                    <h3>
                        Promax Facility & Security Management
                    </h3>

                    <p>
                        Designed and developed the official corporate website for
                        Promax Facility & Security Management Services Pvt. Ltd.

                        The website showcases the company's services, leadership,
                        gallery and contact information through a modern,
                        responsive and user-friendly design that strengthens
                        their online presence.
                    </p>

                    <div className="tech-stack">

                        <div className="tech-pill">
                            <FaReact />
                            React
                        </div>

                        <div className="tech-pill">
                            <SiVite />
                            Vite
                        </div>

                        <div className="tech-pill">
                            <FaMobileAlt />
                            Responsive
                        </div>

                        <div className="tech-pill">
                            <HiOutlineSparkles />
                            Modern UI
                        </div>

                    </div>

                    <div className="project-buttons">

                        <a
                            href="https://promaxfacility.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="primary-btn"
                        >
                            Visit Website
                        </a>

                        <a
                            href="#contact"
                            className="secondary-btn"
                        >
                            Start Similar Project
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Portfolio;