import Sidebar from "@/components/portfolio/Sidebar";
import MobileSidebar from "@/components/portfolio/MobileSidebar";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import BottomNav from "@/components/portfolio/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Sidebar />
      <MobileSidebar />

      <main className="lg:ml-[280px] pb-24">
        <div className="mx-auto max-w-4xl space-y-20 px-4 py-12 sm:px-6 lg:px-8">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
