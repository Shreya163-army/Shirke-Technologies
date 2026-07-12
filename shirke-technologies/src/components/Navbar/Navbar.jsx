import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">

        <div className="logo">
          <img src={logo} alt="Shirke Technologies" />
          <div className="logo-text">
            <h2>Shirke</h2>
            <span>Technologies</span>
          </div>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>

          <a
            className="quote-btn mobile"
            href="https://wa.me/918668961856"
            target="_blank"
            rel="noreferrer"
          >
            Free Consultation
          </a>
        </ul>

        <a
          className="quote-btn desktop"
          href="https://wa.me/918668961856"
          target="_blank"
          rel="noreferrer"
        >
          Free Consultation
        </a>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;