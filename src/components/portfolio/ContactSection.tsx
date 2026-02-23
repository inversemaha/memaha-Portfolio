import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Globe,
  Send,
  Heart,
  Zap,
  Globe2,
  Server,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "mahajur77@gmail.com",
    href: "mailto:mahajur77@gmail.com",
    color: "bg-rose-500/20 text-rose-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/maha-karim",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View Projects",
    href: "https://github.com/inversemaha",
    color: "bg-purple-500/20 text-purple-400",
  },
];

const domainExpertise = [
  { icon: Heart, label: "Healthcare" },
  { icon: Zap, label: "Fintech" },
  { icon: Globe2, label: "OTA" },
  { icon: Server, label: "Gov-Tech" },
];

const techStack = ["Laravel", "PHP", "Python", "FastAPI", "React", "Docker", "DigitalOcean", "MySQL", "Redis"];

const cardAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.4 },
};

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 text-center text-3xl font-bold text-foreground"
      >
        Get In Touch
      </motion.h2>
      <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-accent" />
      <p className="mx-auto mb-8 max-w-md text-center text-sm text-muted-foreground">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* ── Top Row: Contact Cards (left) + Domain Expertise (right) ── */}
        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                {...cardAnim}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-gradient-card p-5 shadow-card transition-colors hover:border-primary/40"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${link.color}`}
                >
                  <link.icon size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{link.label}</h4>
                  <p className="text-xs text-muted-foreground">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Domain Expertise Card */}
        <motion.div
          {...cardAnim}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="row-span-1 rounded-xl border border-border bg-gradient-card p-5 shadow-card"
        >
          <div className="mb-3 flex items-center gap-2">
            <Globe2 size={18} className="text-primary" />
            <h4 className="text-sm font-semibold text-foreground">Domain Expertise</h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {domainExpertise.map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground"
              >
                <item.icon size={14} className="text-primary" />
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom Row: Availability (left) + Tech Stack & Location (right) ── */}
        <motion.div
          {...cardAnim}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="col-span-1 flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-gradient-card p-8 text-center shadow-card md:col-span-2"
        >
          {/* Pulsing green dot */}
          <span className="relative flex h-6 w-6">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-6 w-6 rounded-full bg-emerald-500" />
          </span>

          <h3 className="text-xl font-bold text-foreground">Available for New Opportunities</h3>
          <p className="max-w-md text-sm text-muted-foreground">
            Currently seeking senior-level positions in international, remote-friendly teams. Fluent
            in English and ready to contribute from day one.
          </p>

          <a
            href="mailto:mahajur77@gmail.com"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Mail size={16} />
            Send Message
          </a>
        </motion.div>

        {/* Right column: Tech Stack + Location stacked */}
        <div className="col-span-1 flex flex-col gap-4">
          {/* Tech Stack */}
          <motion.div
            {...cardAnim}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="rounded-xl border border-border bg-gradient-card p-5 shadow-card"
          >
            <div className="mb-3 flex items-center gap-2">
              <Server size={18} className="text-primary" />
              <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            {...cardAnim}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="rounded-xl border border-border bg-gradient-card p-5 shadow-card"
          >
            <h4 className="mb-3 text-sm font-semibold text-foreground">Location</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={14} className="text-primary" />
                Mohammadpur, Dhaka, Bangladesh
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Globe size={14} className="text-primary" />
                Remote-Friendly
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
