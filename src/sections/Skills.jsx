// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaReact,
//   FaPython,
//   FaGitAlt,
//   FaGithub,
//   FaAws,
// } from "react-icons/fa";

// import {
//   SiJavascript,
//   SiNextdotjs,
//   SiBootstrap,
//   SiTailwindcss,
//   SiFlask,
//   SiDjango,
//   SiMysql,
//   SiVercel,
//   SiNetlify,
//   SiPandas,
//   SiNumpy,
//   SiScikitlearn,
// } from "react-icons/si";

// import {
//   Braces,
//   ShieldCheck,
//   PlugZap,
//   BrainCircuit,
//   ScanEye,
//   Network,
//   Workflow,
// } from "lucide-react";


// /* =========================================================
//    SKILLS DATA
// ========================================================= */

// const skillGroups = [
//   {
//     title: "Frontend",

//     skills: [
//       {
//         name: "HTML5",
//         icon: FaHtml5,
//         color: "#E34F26",
//       },
//       {
//         name: "CSS3",
//         icon: FaCss3Alt,
//         color: "#1572B6",
//       },
//       {
//         name: "React.js",
//         icon: FaReact,
//         color: "#61DAFB",
//       },
//       {
//         name: "JavaScript",
//         icon: SiJavascript,
//         color: "#F7DF1E",
//       },
//       {
//         name: "Next.js",
//         icon: SiNextdotjs,
//         color: "#FFFFFF",
//       },
//       {
//         name: "Bootstrap",
//         icon: SiBootstrap,
//         color: "#7952B3",
//       },
//       {
//         name: "Tailwind CSS",
//         icon: SiTailwindcss,
//         color: "#06B6D4",
//       },
//     ],
//   },


//   {
//     title: "Backend",

//     skills: [
//       {
//         name: "Python",
//         icon: FaPython,
//         color: "#3776AB",
//       },
//       {
//         name: "Flask",
//         icon: SiFlask,
//         color: "#FFFFFF",
//       },
//       {
//         name: "Django",
//         icon: SiDjango,
//         color: "#44B78B",
//       },
//       {
//         name: "REST APIs",
//         icon: Braces,
//         color: "#A3A3A3",
//       },
//       {
//         name: "Authentication",
//         icon: ShieldCheck,
//         color: "#A3A3A3",
//       },
//       {
//         name: "API Integration",
//         icon: PlugZap,
//         color: "#A3A3A3",
//       },
//     ],
//   },


//   {
//     title: "Database & Tools",

//     skills: [
//       {
//         name: "MySQL",
//         icon: SiMysql,
//         color: "#4479A1",
//       },
//       {
//         name: "Git",
//         icon: FaGitAlt,
//         color: "#F05032",
//       },
//       {
//         name: "GitHub",
//         icon: FaGithub,
//         color: "#FFFFFF",
//       },
//       {
//         name: "AWS EC2",
//         icon: FaAws,
//         color: "#FF9900",
//       },
//       {
//         name: "Vercel",
//         icon: SiVercel,
//         color: "#FFFFFF",
//       },
//       {
//         name: "Netlify",
//         icon: SiNetlify,
//         color: "#00C7B7",
//       },
//     ],
//   },


//   {
//     title: "AI & Data",

//     skills: [
//       {
//         name: "Machine Learning",
//         icon: BrainCircuit,
//         color: "#A78BFA",
//       },
//       {
//         name: "Computer Vision",
//         icon: ScanEye,
//         color: "#60A5FA",
//       },
//       {
//         name: "Deep Learning",
//         icon: Network,
//         color: "#F472B6",
//       },
//       {
//         name: "Automations",
//         icon: Workflow,
//         color: "#34D399",
//       },
//       {
//         name: "Pandas",
//         icon: SiPandas,
//         color: "#E70488",
//       },
//       {
//         name: "NumPy",
//         icon: SiNumpy,
//         color: "#4DABCF",
//       },
//       {
//         name: "Scikit-learn",
//         icon: SiScikitlearn,
//         color: "#F7931E",
//       },
//     ],
//   },
// ];


// /* =========================================================
//    SKILLS COMPONENT
// ========================================================= */

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="px-5 py-28"
//     >

//       <div className="mx-auto max-w-7xl">


//         {/* =================================================
//             SECTION HEADER
//         ================================================= */}

//         <div className="text-center">

      

//   <div className="section-divider">

//   <div className="section-divider-line" />

//   <span className="section-divider-label">
//     My Skills
//   </span>

//   <div className="section-divider-line" />

// </div>


//           <h2
//             className="
//               mt-8
//               text-4xl
//               font-bold
//               tracking-tight
//               md:text-6xl
//             "
//           >
//             Technologies I work with
//           </h2>


//           <p
//             className="
//               mx-auto
//               mt-5
//               max-w-2xl
//               text-lg
//               text-neutral-400
//             "
//           >
//             The technologies and tools I use to build scalable,
//             efficient, and user-focused applications—from intuitive
//             interfaces to powerful backend systems.
//           </p>

//         </div>


//         {/* =================================================
//             SKILL GROUPS
//         ================================================= */}

//         <div
//           className="
//             mt-14
//             grid
//             gap-5
//             md:grid-cols-2
//           "
//         >

//           {skillGroups.map((group) => (

//             <div
//               key={group.title}
//               className="
//                 rounded-3xl
//                 border
//                 border-white/10
//                 bg-[#111]/60
//                 p-7
//               "
//             >

//               {/* =================================================
//                   GROUP TITLE
//               ================================================= */}

//               <h3 className="mb-5 text-xl font-semibold">
//                 {group.title}
//               </h3>


//               {/* =================================================
//                   SKILLS
//               ================================================= */}

//               <div className="flex flex-wrap gap-2">

//                 {group.skills.map((skill) => {

//                   const Icon = skill.icon;

//                   return (

//                     <span
//                       key={skill.name}
//                       className="
//                         inline-flex
//                         items-center
//                         rounded-full
//                         border
//                         border-white/10
//                         bg-white/[0.02]
//                         px-4
//                         py-2
//                         text-sm
//                         text-neutral-300
//                         transition
//                         duration-300
//                         hover:-translate-y-[1px]
//                         hover:border-white/20
//                         hover:bg-white/[0.06]
//                         hover:text-white
//                       "
//                     >

//                       {/* =========================================
//                           BRAND ICON
//                       ========================================= */}

//                       <Icon
//                         size={17}
//                         style={{
//                           color: skill.color,
//                           display: "inline-block",
//                           verticalAlign: "middle",
//                           marginRight: "8px",
//                           flexShrink: 0,
//                         }}
//                       />


//                       {/* =========================================
//                           SKILL NAME
//                       ========================================= */}

//                       <span
//                         style={{
//                           verticalAlign: "middle",
//                         }}
//                       >
//                         {skill.name}
//                       </span>

//                     </span>

//                   );
//                 })}

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }



import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiFlask,
  SiDjango,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

import {
  Braces,
  ShieldCheck,
  PlugZap,
  BrainCircuit,
  ScanEye,
  Network,
  Workflow,
} from "lucide-react";


const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "React.js",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
  },
  {
    name: "Flask",
    icon: SiFlask,
    color: "#FFFFFF",
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "#44B78B",
  },
  {
    name: "REST APIs",
    icon: Braces,
    color: "#A3A3A3",
  },
  {
    name: "Authentication",
    icon: ShieldCheck,
    color: "#A3A3A3",
  },
  {
    name: "API Integration",
    icon: PlugZap,
    color: "#A3A3A3",
  },

  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#FFFFFF",
  },
  {
    name: "AWS EC2",
    icon: FaAws,
    color: "#FF9900",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#FFFFFF",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "#00C7B7",
  },

  {
    name: "Machine Learning",
    icon: BrainCircuit,
    color: "#A78BFA",
  },
  {
    name: "Computer Vision",
    icon: ScanEye,
    color: "#60A5FA",
  },
  {
    name: "Deep Learning",
    icon: Network,
    color: "#F472B6",
  },
  {
    name: "Automations",
    icon: Workflow,
    color: "#34D399",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "#E70488",
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "#4DABCF",
  },
  {
    name: "Scikit-learn",
    icon: SiScikitlearn,
    color: "#F7931E",
  },
];


export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        <div className="section-divider">

          <div className="section-divider-line" />

          <span className="section-divider-label">
            My Skills
          </span>

          <div className="section-divider-line" />

        </div>

        <div className="skills-heading-area">

          <span className="skills-mini-label">
            TECH STACK
          </span>

          <h2 className="skills-title">
            Tools I Build With
          </h2>

          <p className="skills-description">
           The technologies and tools I work with to build responsive, scalable, and reliable full-stack web applications.
          </p>

        </div>

        <div className="skills-pills">

          {skills.map((skill) => {

            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="skill-pill"
              >

                <Icon
                  size={16}
                  className="skill-pill-icon"
                  style={{
                    color: skill.color,
                  }}
                />

                <span className="skill-pill-name">
                  {skill.name}
                </span>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}