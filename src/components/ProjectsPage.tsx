import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description: "Intelligent chat assistant powered by machine learning with natural language processing and context awareness.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Responsive portfolio website with 3D animations, particle effects, and smooth transitions built with React and Three.js.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

interface ProjectsPageProps {
  onSectionChange: (section: string) => void;
}

export const ProjectsPage = ({ onSectionChange }: ProjectsPageProps) => {
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
    hidden: { y: 100, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in 
            full-stack development, UI/UX design, and modern technologies.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-card group cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="hero" size="icon" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="hero" size="icon" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="neon" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="hero" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onSectionChange("contact")}
            className="group"
          >
            Want to see more?
            <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};