import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glass-card px-6 py-3 rounded-full">
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "neon" : "hero"}
              size="sm"
              onClick={() => onSectionChange(item.id)}
              className="relative"
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-primary/20 rounded-md"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button
            variant="hero"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="relative"
          >
            Menu
          </Button>
          
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-full mt-2 left-0 right-0 glass-card rounded-lg p-4"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "neon" : "hero"}
                    size="sm"
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsOpen(false);
                    }}
                    className="w-full"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};