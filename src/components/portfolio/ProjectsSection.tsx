import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bangabandhu Military Museum",
    url: "https://bangladeshmilitarymuseum.org/",
    category: "Heritage",
    desc: "Official digital platform for the Bangladesh Armed Forces, showcasing military history, artifacts, exhibitions, and integrated online ticketing services.",
    achievements: [
      "Integrated secure online ticketing system with bKash, Rocket & Visa",
      "Implemented Redis caching to optimize high-traffic performance",
      "Deployed scalable infrastructure on DigitalOcean using Docker",
    ],
    tags: ["Laravel", "MySQL", "Redis", "Docker", "DigitalOcean"],
  },
  {
    title: "SkyTicket – Adventure Dhaka",
    url: "https://skyticket.com/",
    category: "TravelTech",
    desc: "Online ticket booking platform for AdventureDhak, enabling seamless flight, bus, and event reservations with real-time availability.",
    achievements: [
      "Fixed critical bugs across multiple modules to improve stability",
      "Integrated and enhanced ticketing module for smooth booking workflows",
      "Developed A/B testing module to optimize user engagement",
      "Optimized search and reservation workflows for better performance",
      "Deployed containerized infrastructure with Docker and CI/CD pipelines",
    ],
    tags: ["Laravel", "React", "MySQL", "Docker", "DigitalOcean"],
  },
  {
    title: "DigiBox – Smart IoT Delivery Lockers (SaaS)",
    url: "https://digibox.com.bd/",
    category: "Logistics / IoT / SaaS",
    desc: "IoT-enabled SaaS platform transforming last-mile delivery in Bangladesh for e-commerce and logistics providers, enabling secure self-service parcel pick-up and drop-off.",
    achievements: [
      "Supported backend development and module enhancements using Laravel and MySQL",
      "Implemented front-end modules and real-time features with React and Livewire",
      "Assisted in deployment, testing, and maintenance for scalable SaaS locker network",
      "Contributed to client-facing features supporting high-profile clients like Daraz, BRAC Bank, and Bashundhara Group"
    ],
    tags: ["PHP", "Laravel", "MySQL", "Livewire", "React", "IoT", "Logistics", "SaaS"]
  },
  {
    title: "Chorki Invitation – Event Platform",
    url: "https://invitation.chorki.com/poll",
    category: "Entertainment",
    desc: "Private event invitation and RSVP management platform for Chorki’s VIP screenings and exclusive campaigns.",
    achievements: [
      "Developed dynamic RSVP system with real-time attendance tracking",
      "Implemented role-based guest management dashboard",
      "Optimized backend performance for high engagement campaigns",
    ],
    tags: ["Laravel", "Bootstrap", "MySQL", "Docker"],
  },
  {
    title: "VooyFarma – Pharmaceutical Supply Chain Platform",
    url: "https://vooyfarma.com/",
    category: "HealthTech",
    desc: "Digital pharmaceutical supply chain solution streamlining medicine procurement, inventory control, distributor management, and order fulfillment.",
    achievements: [
      "Designed scalable backend architecture for high-volume medicine transactions",
      "Implemented secure role-based access control (RBAC) system",
      "Optimized database queries and indexing improving performance by 40%",
    ],
    tags: ["Laravel", "MySQL", "Docker", "Redis", "DigitalOcean"],
  },
  {
    title: "AdmissionTrack – University Platform",
    url: "https://admission-track.com/",
    category: "EdTech",
    desc: "End-to-end university admission management platform supporting course discovery, application submission, scholarship tracking, and payment integration.",
    achievements: [
      "Engineered full student application workflow with real-time status tracking",
      "Integrated secure local and international payment gateways",
      "Designed modular backend architecture for multi-university onboarding",
    ],
    tags: ["Laravel", "React", "MySQL", "DigitalOcean"],
  },
  {
    title: "Dukaanye – Digital Marketplace",
    url: "https://dukaanye.com/",
    category: "E-commerce",
    desc: "Multi-vendor e-commerce marketplace empowering South Sudanese entrepreneurs to launch and manage online stores with integrated digital payment solutions.",
    achievements: [
      "Architected microservices-based system with Dockerized CI/CD pipeline",
      "Reduced environment setup time from 1 day to under 1 hour",
      "Designed vendor onboarding and product lifecycle management modules",
    ],
    tags: ["Laravel", "Bootstrap", "Docker", "MySQL", "DigitalOcean"],
  },
  {
    title: "South Sudan RRC – Aid Analytics Portal",
    url: "http://rrc.gov.ss/",
    category: "GovTech",
    desc: "Government-grade monitoring and analytics portal providing real-time insights into displaced populations, humanitarian aid distribution, and cross-border coordination.",
    achievements: [
      "Built interactive real-time dashboards using D3.js & LeafletJS",
      "Implemented biometric fingerprint verification for beneficiary validation",
      "Developed reporting modules for data-driven humanitarian planning",
    ],
    tags: ["Laravel", "D3.js", "LeafletJS", "MySQL"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="scroll-mt-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-2 text-center text-3xl font-bold text-foreground"
    >
      Featured Projects
    </motion.h2>

    <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-accent" />

    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group rounded-xl border border-border bg-gradient-card p-5 shadow-card transition-all hover:border-primary/30 hover:shadow-glow"
        >
          {/* Category + External Link */}
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary">
              {project.category}
            </span>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink
                  size={14}
                  className="text-muted-foreground opacity-0 transition-all group-hover:opacity-100 hover:text-primary"
                />
              </a>
            )}
          </div>

          {/* Title (Clickable) */}
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-base font-semibold text-foreground transition-colors hover:text-primary hover:underline"
            >
              {project.title}
            </a>
          ) : (
            <h3 className="mb-2 text-base font-semibold text-foreground">
              {project.title}
            </h3>
          )}

          <p className="mb-3 text-sm text-muted-foreground">
            {project.desc}
          </p>

          <ul className="mb-4 space-y-1">
            {project.achievements.map((a, j) => (
              <li
                key={j}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {a}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;