import React from "react";

import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Award,
  ExternalLink,
  Check,
} from "lucide-react";


/* =========================================================
   EXPERIENCE DATA

   In future:
   Just add another object inside this array.
========================================================= */

const experiences = [
  {
    id: 1,

    role: "Python Full Stack Developer Trainee",

    company: "Codegnan IT Solutions",

    location: "Vijayawada, Andhra Pradesh",

    duration: "April 2026 – August 2026",

    description:
      "Completed hands-on training in full-stack web development, gaining practical experience across frontend development, backend development, databases, REST APIs, debugging, and version control.",

    responsibilities: [
      "Developed full-stack web applications using Python, Flask, React.js, JavaScript, HTML, CSS, and MySQL.",

      "Built and integrated REST APIs for reliable communication between frontend applications and backend services.",

      "Worked with authentication, database operations, API integration, responsive interfaces, and application debugging.",

      "Used Git and GitHub for version control, source-code management, and maintaining project repositories.",
    ],
  },


  /* =======================================================
     FUTURE EXPERIENCE EXAMPLE

     In future, when you complete another internship/job,
     copy this object and place it below the first one.

  {
    id: 2,

    role: "Software Developer Intern",

    company: "XYZ Technologies",

    location: "Hyderabad, Telangana",

    duration: "January 2027 – June 2027",

    description:
      "Worked as a software development intern contributing to frontend development, backend services, APIs, databases, and application development.",

    responsibilities: [
      "Developed reusable frontend components using React.js.",

      "Worked with Python backend services and REST APIs.",

      "Integrated frontend applications with relational databases.",

      "Used Git and GitHub for collaborative development and version control.",
    ],
  },

  ======================================================= */
];


/* =========================================================
   CERTIFICATION DATA

   Put your certificate files directly inside:

   public/

   Example:

   public/
   ├── frontend_development.pdf
   ├── Python_Certificate.pdf
   ├── sql_certificate.pdf
   └── Kaleem_Aqthar_Resume.pdf

   IMPORTANT:
   The filename in href must match the actual file
   name exactly.
========================================================= */

const certifications = [
  {
    id: 1,
    category: "Frontend",
    title: "Frontend Development",
    href: "/frontend_development.pdf",
  },

  {
    id: 2,
    category: "Programming",
    title: "Python",
    href: "/Python_Certificate.pdf",
  },

  {
    id: 3,
    category: "Database",
    title: "SQL",
    href: "/sql_certificate.pdf",
  },
];


/* =========================================================
   EXPERIENCE COMPONENT
========================================================= */

function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
    >
      <div className="experience-container">


        {/* =================================================
            SECTION DIVIDER
        ================================================= */}

        <div className="section-divider">

          <div className="section-divider-line"></div>

          <span className="section-divider-label">
            Experience
          </span>

          <div className="section-divider-line"></div>

        </div>


        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <div className="experience-heading">

          <h2>
            Experience & Certifications
          </h2>

          <p>
            Practical development experience supported by
            hands-on training and technical certifications.
          </p>

        </div>


        {/* =================================================
            EXPERIENCE CARDS
        ================================================= */}

        <div className="experience-cards">

          {experiences.map((experience) => (

            <article
              className="experience-card"
              key={experience.id}
            >


              {/* ===========================================
                  EXPERIENCE HEADER
              =========================================== */}

              <div className="experience-top">

                <div className="experience-icon">

                  <BriefcaseBusiness size={23} />

                </div>


                <div className="experience-title">

                  <h3>
                    {experience.role}
                  </h3>

                  <h4>
                    {experience.company}
                  </h4>

                </div>

              </div>


              {/* ===========================================
                  DATE + LOCATION
              =========================================== */}

              <div className="experience-meta">

                <span>

                  <CalendarDays size={15} />

                  {experience.duration}

                </span>


                <span>

                  <MapPin size={15} />

                  {experience.location}

                </span>

              </div>


              {/* ===========================================
                  DESCRIPTION
              =========================================== */}

              <p className="experience-description">
                {experience.description}
              </p>


              {/* ===========================================
                  RESPONSIBILITIES
              =========================================== */}

              <ul className="experience-list">

                {experience.responsibilities.map(
                  (responsibility, index) => (

                    <li
                      key={`${experience.id}-${index}`}
                    >

                      <Check size={16} />

                      <span>
                        {responsibility}
                      </span>

                    </li>

                  )
                )}

              </ul>

            </article>

          ))}

        </div>


       


      </div>
    </section>
  );
}


export default Experience;