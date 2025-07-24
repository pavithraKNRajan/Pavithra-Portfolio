import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsPage } from "@/components/ProjectsPage";
import { SkillsPage } from "@/components/SkillsPage";
import { ContactPage } from "@/components/ContactPage";

const sections = {
  hero: HeroSection,
  about: AboutSection,
  projects: ProjectsPage,
  skills: SkillsPage,
  contact: ContactPage,
};

export const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const pageVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: -90 },
    in: { opacity: 1, scale: 1, rotateY: 0 },
    out: { opacity: 0, scale: 1.2, rotateY: 90 }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.8
  };

  const ActiveComponent = sections[activeSection as keyof typeof sections];

  return (
    <div className="relative bg-background min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-subtle z-0" />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 z-10" />
      
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative z-20"
        >
          <ActiveComponent onSectionChange={setActiveSection} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};