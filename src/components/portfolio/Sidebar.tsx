import { Mail, Github, Linkedin, ChevronRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import profileAvatar from "@/assets/profile-avatar.png";
import cvFile from "@/assets/Mahajurul_Karim_Software_Engineer.pdf";

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] flex-col items-center bg-gradient-sidebar p-6 lg:flex border-r border-border overflow-y-auto"
    >
      {/* Avatar with animated border */}
      <div className="relative mt-4 mb-4 group">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-accent opacity-60 blur-sm animate-pulse group-hover:opacity-100 transition-opacity" />
        <div className="relative h-44 w-44 overflow-hidden rounded-2xl border-2 border-primary/50 shadow-glow">
          <motion.img
            src={profileAvatar}
            alt="Mahajurul Karim"
            className="h-full w-full object-cover"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Available
        </span>
      </div>

      {/* Name */}
      <p className="text-sm text-muted-foreground">👋 Hello, I'm</p>
      <h1 className="mt-1 text-2xl font-bold text-gradient leading-tight text-center">
        Mahajurul Karim
      </h1>
      <p className="mt-2 text-sm font-medium text-foreground/80 border-b border-border pb-3">
        Senior Software Engineer
      </p>

      {/* Bio */}
      <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
        Building scalable web applications. Expert in PHP, FastAPI,DevOps and and creating seamless user experiences.
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {["Backend", "DevOps", "Agile","System Design"].map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
            🔹 {tag}
          </span>
        ))}
      </div>

      {/* Social */}
      <div className="mt-4 flex gap-3">
        {[
          { icon: Mail, href: "mailto:mahajur77@gmail.com" },
          { icon: Github, href: "https://github.com/inversemaha" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/maha-karim" },
        ].map(({ icon: Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            <Icon size={16} />
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto flex w-full flex-col gap-2 pt-6">
        <a href="#contact"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-accent py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
          Get In Touch <ChevronRight size={16} />
        </a>
        <a href={cvFile}
          download="Mahajurul_Karim_Software_Engineer.pdf"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-xl border border-border bg-muted py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary">
          Get My CV <Download size={16} />
        </a>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
