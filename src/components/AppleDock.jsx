import {
  FolderKanban,
  Home,
  Mail,
  User,
  Wrench,
} from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "./ui/dock";

const navigation = [
  {
    title: "Home",
    icon: Home,
    href: "#home",
  },

  {
    title: "About",
    icon: User,
    href: "#about",
  },

  {
    title: "Skills",
    icon: Wrench,
    href: "#skills",
  },

  {
    title: "Experience",
    icon: BriefcaseBusiness,
    href: "#experience",
  },

  {
    title: "Projects",
    icon: FolderKanban,
    href: "#projects",
  },

  {
    title: "GitHub",
    icon: FaGithub,
    href: "https://github.com/KaleemAqthar?tab=repositories",
  },

  {
    title: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/kaleem-aqthar-0230562b0/",
  },

  {
    title: "Contact",
    icon: Mail,
    href: "#contact",
  },
];

export default function AppleDock() {
  return (
    <div
  className="fixed z-[100]"
  style={{
    left: "50%",
    bottom: "16px",
    transform: "translateX(-50%)",
    width: "max-content",
    maxWidth: "calc(100vw - 24px)",
  }}
>

<Dock
  panelHeight={55}
  magnification={50}
  distance={115}
  className="portfolio-dock"
>
  {navigation.map((item) => {
    const Icon = item.icon;

    return (
      <DockItem
        key={item.title}
        className="portfolio-dock-item"
      >
       <DockLabel
  className="
    !-top-10
    !rounded-lg
    !border-white/10
    !bg-[#181818]
    !px-3
    !py-2
    !font-[Poppins]
    !text-[11px]
    !font-medium
    !text-neutral-200
    !shadow-[0_8px_25px_rgba(0,0,0,0.45)]
    !backdrop-blur-md
  "
>
  {item.title}
</DockLabel>

        <DockIcon className="portfolio-dock-icon">
          <a
            href={item.href}
            target={
              item.href.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              item.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={item.title}
          >
            <Icon />
          </a>
        </DockIcon>
      </DockItem>
    );
  })}
</Dock>

    </div>
  );
}