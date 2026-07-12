import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/918668961856?text=Hi%20Shreya!%20I'm%20interested%20in%20a%20website."
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span className="tooltip">Chat on WhatsApp</span>
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;