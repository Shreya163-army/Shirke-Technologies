import "./Process.css";

import {
  FaComments,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

function Process() {
  const steps = [
    {
      icon: <FaComments />,
      number: "01",
      title: "Free Consultation",
      description:
        "We understand your business, goals, and website requirements before starting the project.",
    },
    {
      icon: <FaClipboardList />,
      number: "02",
      title: "Planning",
      description:
        "We create the website structure, content plan, and timeline to ensure a smooth development process.",
    },
    {
      icon: <FaPencilRuler />,
      number: "03",
      title: "Design",
      description:
        "A modern, user-friendly interface is designed to match your brand identity and business goals.",
    },
    {
      icon: <FaCode />,
      number: "04",
      title: "Development",
      description:
        "Your website is developed using modern technologies with a focus on performance and responsiveness.",
    },
    {
      icon: <FaCheckCircle />,
      number: "05",
      title: "Review & Revisions",
      description:
        "You review the website, provide feedback, and we make the necessary revisions before launch.",
    },
    {
      icon: <FaRocket />,
      number: "06",
      title: "Launch & Support",
      description:
        "After approval, your website goes live and we provide post-launch support and guidance.",
    },
  ];

  return (
    <section className="process" id="process" data-aos="fade-up">
      <div className="process-heading">
        <span>OUR PROCESS</span>

        <h2>How We Bring Your Website To Life</h2>

        <p>
          A simple and transparent process that keeps you informed
          from the first consultation to the final website launch.
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div className="process-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="step-number">{step.number}</div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;