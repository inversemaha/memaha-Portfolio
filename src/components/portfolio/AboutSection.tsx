import { motion } from "framer-motion";
import { Code, Server, Users, Globe, Bug } from "lucide-react";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "5", label: "Teams Led" },
  { value: "4", label: "Industries Served" },
];

const highlights = [
  { icon: Users, title: "Tech Leadership", desc: "Led teams of 4–6 engineers in startup and gov-tech projects" },
  { icon: Server, title: "System Architect", desc: "Designed microservices, CI/CD pipelines & scalable backends" },
  { icon: Globe, title: "Global Projects", desc: "Delivered solutions for USA, Japan, South Sudan & Bangladesh govts" },
  { icon: Code, title: "DevOps", desc: "Cut deployment time with Docker & cloud infra" },
  { icon: Bug, title: "Performance Optimization", desc: "Improved app performance by 30% through code refactoring and caching strategies" },
];

const AboutSection = () => (
  <section id="about" className="scroll-mt-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="mb-2 text-center text-3xl font-bold text-foreground"
    >
      About Me
    </motion.h2>
    <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-accent" />

    {/* Stats */}
    <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.1 }}
          className="rounded-xl border border-border bg-gradient-card p-5 text-center shadow-card">
          <p className="text-3xl font-extrabold text-gradient">{s.value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
        </motion.div>
      ))}
    </div>

    {/* Summary + Highlights */}
    <div className="grid gap-6 md:grid-cols-5">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="rounded-xl border border-border bg-gradient-card p-6 shadow-card md:col-span-3">
        <h3 className="mb-3 text-lg font-semibold text-foreground">Professional Summary</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Backend-focused Software Engineer with over six years building scalable web applications in PHP (Laravel, CodeIgniter) and Python (FastAPI) , javascript (React, D3). Strong knowledge in system design—both high-level and low-level—paired with a strong command of SOLID principles and design patterns.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Experienced in containerization with Docker, CI/CD, GitHub Actions, and deployments across Digital Ocean, AWS, and Heroku. Proven ability to lead agile squads delivering mission-critical healthcare, fintech, OTA, and government solutions for international clients.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="rounded-xl border border-border bg-gradient-card p-6 shadow-card md:col-span-2">
        <h3 className="mb-4 text-lg font-semibold text-foreground">Key Highlights</h3>
        <div className="space-y-4">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
