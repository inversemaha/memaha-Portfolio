import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="scroll-mt-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="mb-2 text-center text-3xl font-bold text-foreground"
    >
      Education & Certifications
    </motion.h2>
    <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-accent" />

    <div className="grid gap-6 md:grid-cols-2">
      {/* Education */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="rounded-xl border border-border bg-gradient-card p-5 shadow-card">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap size={20} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Education</h3>
        </div>

        <div className="border-l-2 border-border pl-4">
          <div className="relative">
            <div className="absolute -left-[1.35rem] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
            <h4 className="text-sm font-semibold text-foreground">B.Sc. in Computer Science & Engineering</h4>
            <p className="text-xs text-primary">Daffodil International University</p>
            <p className="text-xs text-muted-foreground">Dhaka, Bangladesh · 2012 – 2016</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Studied algorithms, data structures, software engineering, and system design fundamentals.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="rounded-xl border border-border bg-gradient-card p-5 shadow-card">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
            <Award size={20} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-muted p-3">
            <h4 className="text-sm font-semibold text-foreground">GCP Essentials</h4>
            <p className="text-xs text-primary">Google Cloud Skills Boost · 2018</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Cloud Computing", "GCP", "Infrastructure"].map((t) => (
                <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
