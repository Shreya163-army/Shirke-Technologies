import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    FaPaperPlane,
} from "react-icons/fa";

function Contact() {

    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs
            .sendForm(
                "service_rbapb4z",
                "template_1ol9i27",
                form.current,
                "sAgIOwkmPNuOfrvxy"
            )
            .then(() => {
                setLoading(false);

                toast.success(
                    "Thank you! Your enquiry has been sent successfully."
                );

                form.current.reset();
            })
            .catch((error) => {
                console.error(error);

                setLoading(false);
0
                toast.error(
                    "Something went wrong. Please try again."
                );
            });
    };

    return (

        <section
            className="contact"
            id="contact"
            data-aos="fade-up"
        >

            <div className="contact-title">

                <span>CONTACT US</span>

                <h2>Let's Build Something Amazing Together</h2>

                <p>

                    Have a project in mind?

                    We'd love to hear your ideas and help bring
                    them to life.

                </p>

            </div>

            <div className="contact-container">

                {/* LEFT */}

                <div
                    className="contact-info"
                    data-aos="fade-right"
                >

                    <div className="info-card">

                        <div className="icon">

                            <FaPhoneAlt />

                        </div>

                        <div>

                            <h3>Phone</h3>

                            <p>

                                +91 86689 61856

                            </p>

                        </div>

                    </div>

                    <div className="info-card">

                        <div className="icon">

                            <FaEnvelope />

                        </div>

                        <div>

                            <h3>Email</h3>

                            <p>

                                hello@shirketechnologies.com

                            </p>

                        </div>

                    </div>

                    <div className="info-card">

                        <div className="icon">

                            <FaWhatsapp />

                        </div>

                        <div>

                            <h3>WhatsApp</h3>

                            <p>

                                Usually replies within a few hours

                            </p>

                        </div>

                    </div>

                    <div className="contact-note">

                        <h4>

                            🚀 Serving Clients Across India

                        </h4>

                        <p>

                            From business websites to custom web
                            applications, we're here to help you
                            establish a strong online presence.

                        </p>

                    </div>

                </div>

                {/* RIGHT */}

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="contact-form"
                    data-aos="fade-left"
                >

                    <div className="input-group">

                        <input
                            type="text"
                            name="user_name"
                            placeholder="Full Name"
                            required
                        />

                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email Address"
                            required
                        />

                    </div>

                    <div className="input-group">

                        <input
                            type="tel"
                            name="user_phone"
                            placeholder="Phone Number"
                            required
                        />

                        <select
                            name="project_type"
                            required
                        >

                            <option value="">

                                Select Project

                            </option>

                            <option>

                                Business Website

                            </option>

                            <option>

                                E-Commerce Website

                            </option>

                            <option>

                                Web Application

                            </option>

                            <option>

                                Website Redesign

                            </option>

                            <option>

                                Other

                            </option>

                        </select>

                    </div>

                    <select
                        name="budget"
                        required
                    >

                        <option value="">

                            Select Budget

                        </option>

                        <option>

                            Under ₹10,000

                        </option>

                        <option>

                            ₹10,000 - ₹25,000

                        </option>

                        <option>

                            ₹25,000+

                        </option>

                        <option>

                            Let's Discuss

                        </option>

                    </select>

                    <textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        required
                    ></textarea>

                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                </form>

            </div>

        </section>

    );

}

export default Contact;