import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Zap, Target, Heart } from "lucide-react";

const achievements = [
{ icon: Code2, title: "3 Projects", description: "Built using Web VR, React & Tailwind" },
{ icon: Zap, title: "Eager Learner", description: "Always exploring new technologies" },
{ icon: Target, title: "Strong Foundations", description: "Java, DSA, HTML, CSS, JS" },
{ icon: Heart, title: "Passionate", description: "About design & clean code" }
];

interface AboutSectionProps {
  onSectionChange: (section: string) => void;
}

export const AboutSection = ({ onSectionChange }: AboutSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                About Me
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
               Aspiring UI/UX Designer & Frontend Developer with a strong foundation in user-centered design, responsive interfaces, and web technologies. Skilled in creating intuitive digital experiences through wireframing, prototyping, and frontend development. 
               Recognized in hackathons for innovative solutions and passionate about solving real-world problems with design.

              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
               When I’m not coding, I love learning new technologies, working on personal projects, and improving my skills through online courses and challenges.  
I'm passionate about becoming a better developer every day.

              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <Button
                variant="neon"
                size="lg"
                onClick={() => onSectionChange("projects")}
              >
                See My Work
              </Button>
              <Button
                variant="hero"
                size="lg"
                onClick={() => onSectionChange("contact")}
              >
                Let's Talk
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Achievements Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-card p-6 text-center group cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" as const, stiffness: 200 }}
                  className="mb-4"
                >
                  <achievement.icon className="h-12 w-12 mx-auto text-primary group-hover:text-secondary transition-colors duration-300" />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300"
                >
                  {achievement.title}
                </motion.h3>
                
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute top-1/4 right-10 w-64 h-64 bg-primary rounded-full blur-3xl -z-10"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-1/4 left-10 w-48 h-48 bg-accent rounded-full blur-3xl -z-10"
        />
      </motion.div>
    </section>
  );
};