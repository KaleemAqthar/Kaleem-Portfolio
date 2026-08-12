
import {
  ArrowLeft,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  useForm,
  ValidationError,
} from "@formspree/react";


export default function ContactForm() {

  const [state, handleSubmit] = useForm(
    "xwleoglk"
  );


  if (state.succeeded) {
    return (
      <main className="contact-page">

        <div className="contact-page-card">

          <div className="contact-page-icon">
            <CheckCircle size={25} />
          </div>

          <h1>
            Message sent
          </h1>

          <p>
            Thank you for reaching out.
            I'll get back to you as soon
            as possible.
          </p>

          <Link
            to="/"
            className="message-submit"
          >
            Back to Portfolio
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="contact-page">

      <div className="contact-page-card">

        <Link
          to="/"
          className="contact-back"
        >
          <ArrowLeft size={17} />
          Back to Portfolio
        </Link>


        <div className="contact-page-icon">
          <Mail size={24} />
        </div>


        <h1>
          Send me a message
        </h1>


        <p>
          Have a project, opportunity,
          or question? Fill out the form
          and I'll get back to you as
          soon as possible.
        </p>


        <form
          onSubmit={handleSubmit}
          className="message-form"
        >

          <div className="message-form-row">

            {/* NAME */}

            <div className="message-field">

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />

              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

            </div>


            {/* EMAIL */}

            <div className="message-field">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

            </div>

          </div>


          {/* SUBJECT */}

          <div className="message-field">

            <label htmlFor="subject">
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              required
            />

          </div>


          {/* MESSAGE */}

          <div className="message-field">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              required
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

          </div>


          {/* SUBMIT */}

          <button
            type="submit"
            className="message-submit"
            disabled={state.submitting}
          >

            <Send size={17} />

            {state.submitting
              ? "Sending..."
              : "Send Message"}

          </button>

        </form>

      </div>

    </main>
  );
}