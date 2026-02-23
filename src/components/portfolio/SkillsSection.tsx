import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

type Skill = { name: string; level: number; badge: string; color: string };

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "PHP", level: 95, badge: "Expert", color: "bg-yellow-400" },
      { name: "Laravel", level: 95, badge: "Expert", color: "bg-yellow-400" },
      { name: "Python", level: 75, badge: "Proficient", color: "bg-cyan-400" },
      { name: "FastAPI", level: 70, badge: "Proficient", color: "bg-cyan-400" },
      { name: "CodeIgniter", level: 60, badge: "Proficient", color: "bg-cyan-400" },
      { name: "Tailwind CSS", level: 65, badge: "Proficient", color: "bg-cyan-400" },
      { name: "jQuery", level: 60, badge: "Proficient", color: "bg-cyan-400" },
      { name: "JavaScript", level: 60, badge: "Proficient", color: "bg-cyan-400" },
      { name: "ReactJS", level: 40, badge: "Intermediate", color: "bg-orange-400" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 90, badge: "Expert", color: "bg-yellow-400" },
      { name: "MongoDB", level: 70, badge: "Proficient", color: "bg-cyan-400" },
      { name: "PostgreSQL", level: 75, badge: "Proficient", color: "bg-cyan-400" },
      { name: "MSSQL", level: 65, badge: "Intermediate", color: "bg-orange-400" },
    ],
  },
  {
    title: "System Design & Architecture",
    skills: [
      { name: "RESTful API Design", level: 90, badge: "Expert", color: "bg-yellow-400" },
      { name: "Monoliths", level: 90, badge: "Advanced", color: "bg-green-400" },
      { name: "Microservices", level: 85, badge: "Advanced", color: "bg-green-400" },
      { name: "Design Patterns", level: 80, badge: "Advanced", color: "bg-green-400" },
      { name: "SOLID Principles", level: 70, badge: "Proficient", color: "bg-cyan-400" },
      { name: "RabbitMQ", level: 75, badge: "Proficient", color: "bg-cyan-400" },
    ],
  },
  {
    title: "DevOps & Deployment",
    skills: [
      { name: "Digital Ocean", level: 90, badge: "Expert", color: "bg-green-400" },
      { name: "Docker", level: 85, badge: "Advanced", color: "bg-green-400" },
      { name: "CI/CD Pipelines", level: 80, badge: "Advanced", color: "bg-green-400" },
      { name: "GitHub Actions", level: 80, badge: "Advanced", color: "bg-green-400" },
      { name: "AWS / EC2 / S3", level: 75, badge: "Proficient", color: "bg-cyan-400" },
      { name: "Heroku", level: 70, badge: "Proficient", color: "bg-cyan-400" },
      { name: "NGINX", level: 75, badge: "Proficient", color: "bg-cyan-400" },
      { name: "Apache", level: 70, badge: "Proficient", color: "bg-cyan-400" },
    ],
  },
  {
    title: "Testing & QA",
    skills: [
      { name: "Postman", level: 85, badge: "Proficient", color: "bg-cyan-400" },
      { name: "Selenium", level: 75, badge: "Proficient", color: "bg-cyan-400" },
      { name: "PHPUnit", level: 80, badge: "Proficient", color: "bg-cyan-400" },
    ],
  },
  {
    title: "Version Control & Project Management",
    skills: [
      { name: "Git", level: 95, badge: "Expert", color: "bg-yellow-400" },
      { name: "JIRA", level: 80, badge: "Interested", color: "bg-purple-400" },
      { name: "Bitbucket", level: 80, badge: "Interested", color: "bg-purple-400" },
      { name: "Trello", level: 75, badge: "Interested", color: "bg-purple-400" },
    ],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    skills: [
      { name: "Automation & Flows", level: 65, badge: "Proficient", color: "bg-cyan-400" },
      { name: "Agents & LLMs", level: 40, badge: "Intermediate", color: "bg-orange-400" },
      // { name: "RAG Systems", level: 60, badge: "Proficient", color: "bg-cyan-400" },
      // { name: "Vector Databases", level: 55, badge: "Proficient", color: "bg-cyan-400" },
    ],
  },
];

const badgeColors: Record<string, string> = {
  Expert: "bg-yellow-400/20 text-yellow-300 border-yellow-400/30",
  Advanced: "bg-green-400/20 text-green-300 border-green-400/30",
  Proficient: "bg-cyan-400/20 text-cyan-300 border-cyan-400/30",
  Intermediate: "bg-orange-400/20 text-orange-300 border-orange-400/30",
  Interested: "bg-purple-400/20 text-purple-300 border-purple-400/30",
};

const softSkills = [
  "Team Leadership",
  "Agile/Scrum",
  "Client Communication",
  "Cross-Functional Collaboration",
];

const SkillsSection = () => (
  <section id="skills" className="scroll-mt-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-2 text-center text-3xl font-bold text-foreground"
    >
      Skills & Expertise
    </motion.h2>
    <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-accent" />

    <div className="grid gap-5 md:grid-cols-3">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.05 }}
          className="rounded-xl border border-border bg-gradient-card p-4 shadow-card"
        >
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {cat.title}
          </h3>
          <div className="space-y-3">
            {cat.skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs text-foreground">{skill.name}</span>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${badgeColors[skill.badge] || ""}`}
                  >
                    ● {skill.badge}
                  </span>
                </div>
                <div className="skill-bar h-1.5">
                  <motion.div
                    className={`h-full rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.15 }}
                  />
                </div>
                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  {skill.level}% Proficiency
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Soft Skills */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-8 rounded-xl border border-border bg-gradient-card p-6 shadow-card"
    >
      <h3 className="mb-5 text-lg font-semibold text-foreground">Soft Skills</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {softSkills.map((skill) => (
          <div
            key={skill}
            className="flex flex-col items-center gap-2 rounded-lg border border-border bg-muted/40 p-4 text-center"
          >
            <CheckCircle className="h-6 w-6 text-primary" />
            <span className="text-sm text-foreground">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SkillsSection;
