import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Adventure Dhaka Ltd.",
    location: "Banani, Dhaka",
    period: "Nov 2024 – Present",
    desc: "Contributing to Skyticket, Japan's largest OTA platform, handling bug fixing, performance tuning, and production stability.",
    achievements: [
      "Owning production issue resolution for high-traffic booking systems",
      "Collaborating on performance optimization across microservices",
    ],
    tags: ["PHP", "Laravel", "Docker", "CI/CD"],
  },
  {
    title: "Senior Software Engineer",
    company: "a2i (Ekshop), ICT Division",
    location: "Dhaka, Bangladesh",
    period: "Jun 2022 – Oct 2024",
    desc: "Played a pivotal role building high-impact government digital platforms under the a2i program.",
    achievements: [
      "Led development of Toll Dukaanye marketplace for South Sudan",
      "Built management systems, LMS, and e-commerce solutions at scale",
    ],
    tags: ["Laravel", "Bootstrap", "Docker", "MySQL", "Digital Ocean"],
  },
  {
    title: "Software Engineer",
    company: "Qubit Solutions Lab",
    location: "Dhaka, Bangladesh",
    period: "Jan 2020 – May 2022",
    desc: "Designed and built custom web applications for national institutions and consumer platforms.",
    achievements: [
      "Developed Bangabandhu Military Museum's digital platform",
      "Architected AdmissionTrack and Chorki Invitation platforms",
    ],
    tags: ["Laravel", "React", "MySQL", "DigitalOcean"],
  },
  {
    title: "Software Engineer",
    company: "AllTech Innovations Limited",
    location: "Dhaka, Bangladesh",
    period: "Jan 2018 – Dec 2019",
    desc: "Provided server and system support, including built and maintained courier management and facial attendance systems for internal workflow automation, POS transaction systems for Mercantile Bank PLC.",
    achievements: [
      "Built and maintained courier management and facial attendance systems for internal workflow automation",
      "Collaborated with teams to analyze requirements, implement features, and optimize performance across multiple modules",
    ],
    tags: ["ASP", ".NET", "MSSQL", "Oracle", "MVC", "IIS", "Linux"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="scroll-mt-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="mb-2 text-center text-3xl font-bold text-foreground"
    >
      Professional Experience
    </motion.h2>
    <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-accent" />

    <div className="relative space-y-6">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:block" />

      {experiences.map((exp, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.1 }}
          className="relative rounded-xl border border-border bg-gradient-card p-5 shadow-card md:ml-10">
          {/* Timeline dot */}
          <div className="absolute -left-[2.85rem] top-6 hidden h-3 w-3 rounded-full bg-primary shadow-glow md:block" />

          <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-foreground">{exp.title}</h3>
              <p className="text-sm text-primary">{exp.company}</p>
              <p className="text-xs text-muted-foreground">{exp.location}</p>
            </div>
            <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
              {exp.period}
            </span>
          </div>

          <p className="mb-3 text-sm text-muted-foreground">{exp.desc}</p>

          <ul className="mb-3 space-y-1">
            {exp.achievements.map((a, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {a}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
