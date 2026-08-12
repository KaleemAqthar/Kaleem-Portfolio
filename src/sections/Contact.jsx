import {
  Mail,
  CalendarDays,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-card">

        <div className="contact-badge">
          Contact
        </div>

        <h2 className="contact-title">
          Get in Touch
        </h2>

        <p className="contact-description">
          Have a project idea, collaboration opportunity,
          or role that aligns with my skills? Feel free to
          reach out. I'd be happy to connect and discuss
          how I can contribute.
        </p>

        <div className="contact-actions">

          <Link
            to="/contact-me"
            className="contact-btn contact-btn-outline"
          >
            <Mail size={18} />
            <span>Send Message</span>
          </Link>

          <Link
            to="/book-call"
            className="contact-btn contact-btn-primary"
          >
            <CalendarDays size={18} />
            <span>Let's Talk</span>
          </Link>

        </div>

        <div className="contact-details">

          <a href="mailto:aqtherkaleem@gmail.com">
            aqtherkaleem@gmail.com
          </a>

          <span className="contact-dot">
            •
          </span>

          <span>
            Dharmavaram, India
          </span>

        </div>

      </div>
    </section>
  );
}