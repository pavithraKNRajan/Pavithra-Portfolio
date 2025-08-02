import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
import { Scene3D } from "./Scene3D";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

export const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <Scene3D />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-glow z-20" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 text-center max-w-6xl mx-auto px-6"
      >
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" as const, stiffness: 100 }}
          >
            Pavithra Nagarajan
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-secondary">
            Software Developer | Java Backend & Web Frontend
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
           Passionate about crafting modern web applications that are clean, responsive, and user-friendly. 
           Always eager to learn and build real-world solutions using Java, React, and web technologies.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            variant="neon"
            size="xl"
            onClick={() => onSectionChange("contact")}
            className="group"
          >
            Hire Me
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            variant="hero"
            size="xl"
            onClick={() => onSectionChange("projects")}
          >
            View Projects
          </Button>
      <Button
      asChild
      variant="secondary"
      size="xl"
      className="group"
    >
      <a
        href="/Pavithra_Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
        Resume
      </a>
    </Button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="hero" size="icon" className="neon-glow">
              <Github className="h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="hero" size="icon" className="neon-glow">
              <Linkedin className="h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="hero" size="icon" className="neon-glow">
              <Mail className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer"
        onClick={() => onSectionChange("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center hover:border-secondary transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
        <p className="text-xs text-muted-foreground mt-2 opacity-70"></p>
      </motion.div>
    </section>
  );
};