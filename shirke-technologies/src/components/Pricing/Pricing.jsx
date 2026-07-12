import "./Pricing.css";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      title: "Starter Website",
      price: "Starting at",
      amount: "₹4,999",
      description:
        "Perfect for startups, freelancers and local businesses looking for a professional online presence.",
      features: [
        "Responsive Design",
        "Up to 5 Pages",
        "WhatsApp Integration",
        "Contact Form",
      ],
      button: "Get Started",
      featured: false,
    },
    {
      title: "Business Website",
      price: "Starting at",
      amount: "₹9,999",
      description:
        "Ideal for growing businesses that need a premium website with additional features.",
      features: [
        "Everything in Starter",
        "Premium UI Design",
        "SEO Ready",
        "Google Maps",
      ],
      button: "Most Popular",
      featured: true,
    },
    {
      title: "Custom Solution",
      price: "",
      amount: "Let's Talk",
      description:
        "Need something unique? We'll build a solution tailored specifically for your business.",
      features: [
        "Custom Development",
        "ERP / Dashboard",
        "Booking Systems",
        "API Integration",
      ],
      button: "Request Quote",
      featured: false,
    },
  ];

  return (
    <section className="pricing" id="pricing" data-aos="fade-up">

      <div className="pricing-heading">

        <span>OUR PRICING</span>

        <h2>Simple Pricing. Honest Value.</h2>

        <p>
          Whether you're launching your first website or growing your business,
          we have a solution that fits your needs.
        </p>

      </div>

      <div className="pricing-grid">

        {plans.map((plan, index) => (

          <div
            key={index}
            className={`pricing-card ${plan.featured ? "featured" : ""}`}
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >

            {plan.featured && (
              <div className="popular-badge">
                ⭐ Most Popular
              </div>
            )}

            <h3>{plan.title}</h3>

            <small>{plan.price}</small>

            <h1>{plan.amount}</h1>

            <p>{plan.description}</p>

            <ul>

              {plan.features.map((item, i) => (

                <li key={i}>
                  <FaCheckCircle />
                  {item}
                </li>

              ))}

            </ul>

            <a href="#contact" className="pricing-btn">

              {plan.button}

              <FaArrowRight />

            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Pricing;