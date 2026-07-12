import "./About.css";
import logo from "../../assets/images/logo.png";

import {
    FaLaptopCode,
    FaHandshake,
    FaRocket,
    FaLightbulb,
} from "react-icons/fa";

function About() {
    return (
        <section className="about" id="about" data-aos="fade-up">

            <div className="about-left">

                <span>ABOUT SHIRKE TECHNOLOGIES</span>

                <h2>
                    Building Modern Websites
                    <br />
                    That Help Businesses Grow
                </h2>

                <p>
                    Shirke Technologies is a web development studio focused on creating
                    modern, responsive and user-friendly websites for startups, local
                    businesses and growing companies.
                </p>

                <p>
                    Every project is built with attention to design, performance and user
                    experience to ensure your business makes a strong first impression
                    online.
                </p>

                <div className="about-features">

                    <div className="feature-item">
                        <FaLaptopCode />
                        <div>
                            <h4>Modern Development</h4>
                            <p>
                                Built using React, Vite and the latest web technologies.
                            </p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <FaHandshake />
                        <div>
                            <h4>Transparent Communication</h4>
                            <p>
                                Clear updates throughout the entire project.
                            </p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <FaRocket />
                        <div>
                            <h4>Fast Delivery</h4>
                            <p>
                                Projects delivered on time without compromising quality.
                            </p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <FaLightbulb />
                        <div>
                            <h4>Creative Solutions</h4>
                            <p>
                                Every website is designed to match your business goals.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="about-right">

                <div className="founder-card">

                    <div className="founder-top">

                        <div className="founder-avatar">
                            <img src={logo} alt="Shirke Technologies" />
                        </div>

                        <div>

                            <h3>Shreya Shirke</h3>

                            <span>Founder & Web Developer</span>

                        </div>

                    </div>

                    <div className="divider"></div>

                    <p className="founder-message">

                        "I started Shirke Technologies with a simple mission — to help
                        businesses build a professional online presence through modern,
                        responsive and affordable websites that create real value."

                    </p>

                    <div className="company-values">

                        <div className="value">

                            <span>💙</span>

                            <div>
                                <h4>Quality First</h4>
                                <p>Every project is crafted with attention to detail.</p>
                            </div>

                        </div>

                        <div className="value">

                            <span>⚡</span>

                            <div>
                                <h4>Fast Delivery</h4>
                                <p>Projects delivered on time with clear communication.</p>
                            </div>

                        </div>

                        <div className="value">

                            <span>🤝</span>

                            <div>
                                <h4>Long-Term Support</h4>
                                <p>We're here even after your website goes live.</p>
                            </div>

                        </div>

                    </div>

                    <a href="#contact" className="founder-btn">

                        Start Your Project →

                    </a>

                </div>

            </div>

        </section>
    );
}

export default About;