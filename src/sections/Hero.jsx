import {
  ArrowDown,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-5
        pb-28
        pt-20
      "
    >
      <div className="mx-auto max-w-5xl text-center">

        <p
          className="
            mb-4
            text-base
            font-medium
            tracking-wide
            text-neutral-400
            sm:text-lg
          "
        >
          Hello, I'm
        </p>

        <h1
          className="
            text-5xl
            font-semibold
            tracking-[-0.04em]
            text-white
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          S. Kaleem Aqthar
        </h1>

        <h2
          className="
            mt-5
            text-xl
            font-medium
            text-neutral-300
            sm:text-2xl
            md:text-3xl
          "
        >
          Python Full Stack Developer
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-[15px]
            font-normal
            leading-7
            text-neutral-400
            sm:text-base
            md:text-lg
            md:leading-8
          "
        >
          I build modern web applications with React, Python,
          Flask, MySQL and REST APIs, focusing on clean interfaces,
          reliable backend systems and practical user experiences.
        </p>

        <div
          className="
            mt-9
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          <a
            href="#projects"
            className="
              rounded-full
              bg-white
              px-7
              py-3
              text-sm
              font-semibold
              text-black
              transition
              duration-300
              hover:scale-[1.03]
              hover:bg-neutral-200
              sm:text-base
            "
          >
            View Projects
          </a>

          <a
  href="/Kaleem_Aqthar_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-full
    border
    border-white/15
    bg-white/[0.03]
    px-7
    py-3
    text-sm
    font-semibold
    text-white
    transition
    duration-300
    hover:border-white/30
    hover:bg-white/[0.07]
    sm:text-base
  "
>
  View Resume
</a>
        </div>

        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <a
            href="https://github.com/KaleemAqthar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              text-neutral-400
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-white/25
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/kaleem-aqthar-0230562b0/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              text-neutral-400
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-white/25
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            <FaLinkedin size={19} />
          </a>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="
            absolute
            bottom-24
            left-1/2
            hidden
            -translate-x-1/2
            text-neutral-600
            transition
            hover:text-neutral-300
            md:block
          "
        >
          <ArrowDown size={22} />
        </a>

      </div>
    </section>
  );
}