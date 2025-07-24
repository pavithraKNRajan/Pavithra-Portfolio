import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube,
  Instagram,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "john.doe@example.com",
    href: "mailto:john.doe@example.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#"
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-white"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-400"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-blue-400"
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com",
    color: "hover:text-red-400"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com",
    color: "hover:text-pink-400"
  },
];

interface ContactPageProps {
  onSectionChange: (section: string) => void;
}

export const ContactPage = ({ onSectionChange }: ContactPageProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

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
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-2xl font-bold">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant={isSubmitted ? "secondary" : "neon"}
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className="w-full group"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <Send className="h-5 w-5" />
                    </motion.div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <item.icon className="h-5 w-5 mr-4 text-primary group-hover:text-secondary transition-colors" />
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {item.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center p-4 rounded-lg hover:bg-primary/10 transition-colors group ${social.color}`}
                  >
                    <social.icon className="h-8 w-8 mb-2 transition-colors" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Button
                  variant="hero"
                  className="w-full justify-start"
                  onClick={() => onSectionChange("about")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Learn More About Me
                </Button>
                <Button
                  variant="hero"
                  className="w-full justify-start"
                  onClick={() => onSectionChange("projects")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View My Projects
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};