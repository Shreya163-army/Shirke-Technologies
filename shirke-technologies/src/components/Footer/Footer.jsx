import "./Footer.css";

import logo from "../../assets/images/logo.png";

import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
    FaArrowUp
} from "react-icons/fa";

function Footer() {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <div className="footer-top">

                <div className="footer-about">

                    <img src={logo} alt="Shirke Technologies" />

                    <h2>Shirke TECHNOLOGIES</h2>

                    <p>
                        Building modern, responsive and
                        high-performance websites that help
                        businesses establish a strong online
                        presence.
                    </p>

                    <div className="footer-contact">

                        <div>

                            <FaEnvelope />

                            <span>
                                <a href="mailto:hello@shirketechnologies.com">
                                    hello@shirketechnologies.com
                                </a>
                            </span>

                        </div>

                        <div>

                            <FaPhoneAlt />

                            <span>
                                <a href="tel:+918668961856">
                                    +91 86689 61856
                                </a>
                            </span>

                        </div>

                    </div>

                </div>

                {/* LINKS */}

                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <a href="#home">Home</a>

                    <a href="#services">Services</a>

                    <a href="#portfolio">Portfolio</a>

                    <a href="#pricing">Pricing</a>

                    <a href="#about">About</a>

                    <a href="#contact">Contact</a>

                </div>

                {/* SERVICES */}

                <div className="footer-links">

                    <h3>Services</h3>

                    <span>Business Websites</span>

                    <span>Web Applications</span>

                    <span>E-Commerce</span>

                    <span>Website Support</span>

                </div>

                {/* SOCIAL */}

                <div className="footer-links">

                    <h3>Follow Us</h3>

                    <div className="social-icons">

                        <a
                            href="https://instagram.com/shirketechnologies"
                            target="_blank"
                            rel="noreferrer"
                        >

                            <FaInstagram />

                        </a>

                        <a
                            href="https://www.linkedin.com/in/shreya-shirke-b1653621b"
                            target="_blank"
                            rel="noreferrer"
                        >

                            <FaLinkedin />

                        </a>

                        <a
                            href="https://github.com/Shreya163-army"
                            target="_blank"
                            rel="noreferrer"
                        >

                            <FaGithub />

                        </a>

                    </div>

                </div>

            </div>

            <div className="footer-bottom-left">

                <p>
                    © {year} Shirke TECHNOLOGIES. All Rights Reserved.
                </p>

                <span>
                    Designed & Developed by <strong>Shreya Shirke</strong>
                </span>

            </div>

        </footer>

    );

}

export default Footer;