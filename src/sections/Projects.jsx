


import {
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
  title: "Shopii – Full Stack E-Commerce Platform",

  year: "2026",

  description:
    "A production-ready full-stack e-commerce platform with secure authentication, email OTP verification, product search and filtering, dynamic cart management, Razorpay payments, order tracking, PDF invoice generation, automated email notifications, and admin inventory management. Deployed with Vercel and AWS EC2.",

  technologies: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Python",
    "Flask",
    "MySQL",
    "REST APIs",
    "Razorpay",
    "AWS EC2",
    "Gunicorn",
    "Nginx",
    "Vercel",
  ],

  github:
    "https://github.com/KaleemAqthar/shopii_frontend",

  live:
    "https://shopii-m.vercel.app",
},
  {
  title: "EasyRental – Property Rental Web Application",

  year: "2026",

  description:
    "A responsive property rental web application that enables users to browse, search, filter, and manage property listings with authentication, favorites, protected routes, and complete CRUD functionality.",

  technologies: [
    "React.js",
    "JavaScript",
    "Redux Toolkit",
    "React Router",
    "Axios",
    "JSON Server",
    "HTML5",
    "CSS3",
    "React Toastify",
    "Netlify",
  ],

  github:
    "https://github.com/KaleemAqthar/Easyrental-frontend-",

  live:
    "https://easyrentalkaleem.netlify.app/",
},
  

  {
    title:
      "Notes Management System",

    year: "2026",

    description:
      "A Flask-based notes management application supporting notes, file uploads, searching, file previews, authentication and password recovery.",

    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github:
      "https://github.com/KaleemAqthar/Simple-Notes-Mnanagement-Sysytem.git",

    live: "https://github.com/KaleemAqthar/Simple-Notes-Mnanagement-Sysytem.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-5 py-28"
    >

      <div className="mx-auto max-w-5xl">

        <div
          className="
            mb-8
            flex
            items-center
            gap-5
          "
        >
          <div className="h-px flex-1 bg-white/10" />

          <span
            className="
              whitespace-nowrap
              rounded-full
              bg-neutral-200
              px-7
              py-3
              font-semibold
              text-black
            "
          >
            My Projects
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mb-14 text-center">

          <h2
            className="
              text-4xl
              font-bold
              tracking-[-0.04em]
              md:text-6xl
            "
          >
            Check out my latest work
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-neutral-400
              md:text-lg
            "
          >
            I've built a range of full-stack projects, combining responsive frontend interfaces, scalable backend systems, REST APIs, and databases to create complete, real-world web applications. Here are a few of my favorites.

          </p>

        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
          "
        >

          {projects.map(
            (project) => (
              <article
                key={project.title}
                className="
                  group
                  flex
                  min-h-[430px]
                  flex-col
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#111111]/70
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-[#141414]
                "
              >

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >

                  <h3
                    className="
                      max-w-[85%]
                      text-xl
                      font-semibold
                      leading-snug
                      md:text-2xl
                    "
                  >
                    {project.title}
                  </h3>

                  <a
                    href={
                      project.live
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowUpRight
                      className="
                        text-neutral-500
                        transition
                        group-hover:text-white
                      "
                      size={24}
                    />
                  </a>

                </div>

                <p className="mt-2 text-lg text-neutral-500">
                  {project.year}
                </p>

                <p
                  className="
                    mt-6
                    leading-7
                    text-neutral-400
                  "
                >
                  {
                    project.description
                  }
                </p>

                <div className="mt-auto pt-8">

                  <div className="flex flex-wrap gap-2">

                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={
                            technology
                          }
                          className="
                            rounded-xl
                            border
                            border-white/10
                            px-3
                            py-1.5
                            text-sm
                            font-medium
                            text-neutral-300
                          "
                        >
                          {
                            technology
                          }
                        </span>
                      )
                    )}

                  </div>

                  <div
                    className="
                      mt-5
                      flex
                      gap-3
                    "
                  >

                    <a
                      href={
                        project.github
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-black
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-neutral-800
                      "
                    >

                      <FaGithub
                        size={17}
                      />

                      GitHub

                    </a>

                    {project.live !==
                      "#" && (
                      <a
                        href={
                          project.live
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-white/10
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          transition
                          hover:bg-white/10
                        "
                      >
                        Live Demo

                        <ArrowUpRight
                          size={16}
                        />
                      </a>
                    )}

                  </div>

                </div>

              </article>
            )
          )}

        </div>

      </div>

    </section>
  );
}