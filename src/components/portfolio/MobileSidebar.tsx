import { Mail, Github, Linkedin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import profileAvatar from "@/assets/profile-avatar.png";

const MobileSidebar = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center bg-gradient-sidebar p-6 lg:hidden border-b border-border"
  >
    <div className="relative group">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-accent opacity-60 blur-sm animate-pulse" />
      <div className="relative h-32 w-32 overflow-hidden rounded-2xl border-2 border-primary/50 shadow-glow">
        <motion.img
          src={profileAvatar}
          alt="Mahajurul Karim"
          className="h-full w-full object-cover"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
    <p className="mt-3 text-xs text-muted-foreground">👋 Hello, I'm</p>
    <h1 className="text-xl font-bold text-gradient">Mahajurul Karim</h1>
    <p className="text-sm text-foreground/80">Senior Software Engineer</p>

    <div className="mt-3 flex gap-3">
      {[
        { icon: Mail, href: "mailto:mahajur77@gmail.com" },
        { icon: Github, href: "https://github.com/inversemaha" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/maha-karim" },
      ].map(({ icon: Icon, href }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground hover:text-primary">
          <Icon size={16} />
        </a>
      ))}
    </div>

    <a href="#contact"
      className="mt-4 flex items-center gap-2 rounded-xl bg-gradient-accent px-6 py-2 text-sm font-semibold text-primary-foreground">
      Get In Touch <ChevronRight size={16} />
    </a>
  </motion.div>
);

export default MobileSidebar;
