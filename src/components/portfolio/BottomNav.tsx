import { Home, User, Code, Briefcase, FolderOpen, GraduationCap, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { icon: Home, href: "#about", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Code, href: "#skills", label: "Skills" },
  { icon: Briefcase, href: "#experience", label: "Work" },
  { icon: FolderOpen, href: "#projects", label: "Projects" },
  { icon: GraduationCap, href: "#education", label: "Edu" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

const BottomNav = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 50);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 flex items-center gap-1 rounded-2xl border border-border glass px-3 py-2 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          title={label}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
        >
          <Icon size={18} />
        </a>
      ))}
    </nav>
  );
};

export default BottomNav;
