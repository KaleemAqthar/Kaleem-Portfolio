

import {
  Code2,
  Database,
  BrainCircuit,
} from "lucide-react";

const cards = [
 {
  icon: Code2,
  title: "Full Stack Development",
  description:
    "Building responsive, user-focused interfaces and scalable backend systems with modern technologies, REST APIs, and efficient database integration.",
},

 {
  icon: Database,
  title: "Backend & Database",
  description:
    "Developing secure REST APIs, authentication systems, and scalable backend solutions with efficient MySQL database integration.",
},

{
  icon: BrainCircuit,
  title: "Artificial Intelligence",
  description:
    "Building intelligent applications using machine learning, computer vision, and AI-driven solutions for real-world problems.",
},
];

export default function About() {
  return (
    <section
      id="about"
      className="px-5 py-28"
    >

      <div className="mx-auto max-w-5xl">

        <div className="mb-14 text-center">
          <div className="section-divider">

  <div className="section-divider-line" />

  <span className="section-divider-label">
    About Me
  </span>

  <div className="section-divider-line" />

</div>
          <h2
            className="
              mt-7
              text-4xl
              font-bold
              tracking-tight
              md:text-6xl
            "
          >
            Building ideas into
            <br />
            real applications
          </h2>

        </div>

        <p
          className="
            mx-auto
            max-w-3xl
            text-center
            text-lg
            leading-8
            text-neutral-400
          "
        >
         I'm a Computer Science Engineering graduate specializing in Artificial Intelligence, with hands-on training in Python Full Stack Development at Codegnan IT Solutions. I have experience building end-to-end web applications using Python, Flask, React.js, JavaScript, MySQL, and REST APIs. I enjoy working across frontend, backend, and database technologies to transform ideas into scalable, functional, and user-friendly software solutions.

        </p>

        <div
          className="
            mt-14
            grid
            gap-5
            md:grid-cols-3
          "
        >

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#111111]/60
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                  "
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-400">
                  {card.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}