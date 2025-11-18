import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Palette, 
  Smartphone,
  Server,
  Globe,
  Zap,
  Shield,
  Brain,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Other Tools",
    icon: Server,
    skills: [
        { name: "SDLC (Agile , Waterfall", level: 75},
       { name: "Git & Github", level: 85 },
    ]
  
  },
  {
    title: "Web Development",
    icon: Code2,
    skills: [      
      { name: "HTML", level: 95 },
      { name: "Node.js", level: 70},
      {name: "CSS", level: 95},
      { name: "React", level: 60 },
    ]
  },
   {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "MySQL", level: 95 },
      
      { name: "Docker", level: 72 },
      
       { name: "AWS", level: 70 },
    ]
  },
   {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", level: 95 },
      
      { name: "Java Script", level: 82 },
      
      
    ]
  },
  
];

interface SkillsPageProps {
  onSectionChange: (section: string) => void;
}

export const SkillsPage = ({ onSectionChange }: SkillsPageProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 0.5,
      },
    }),
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            My Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency 
            levels across various technologies and tools.
          </p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6 group"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: categoryIndex * 0.1 + 0.3, 
                    type: "spring" as const, 
                    stiffness: 200 
                  }}
                  className="mr-4"
                >
                  <category.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                </motion.div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        variants={barVariants}
                        initial="hidden"
                        animate="visible"
                        custom={skill.level}
                        className="h-full bg-gradient-hero rounded-full relative"
                      >
                        <motion.div
                          animate={{
                            x: ["0%", "100%", "0%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut" as const,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 1,
                          }}
                          className="absolute inset-0 bg-white/30 w-8 skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <Button
            variant="neon"
            size="lg"
            onClick={() => onSectionChange("projects")}
            className="group"
          >
            See My Work
            <Layers className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};