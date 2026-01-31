"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Palette, 
  Rocket, 
  CheckCircle2, 
  Zap,
  Users,
  Target,
  Sparkles
} from "lucide-react";

// Our workflow phases
const workflowPhases = [
  {
    phase: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your vision, goals, and target audience. Through collaborative workshops and strategic planning, we map out the perfect technical roadmap for your project.",
    icon: <Target size={32} />,
    color: "#1B263B",
    features: [
      "Requirement Analysis",
      "Technical Feasibility Study",
      "Project Roadmap Creation",
      "Timeline & Budget Planning"
    ]
  },
  {
    phase: "02",
    title: "Design & Architecture",
    description: "Our design team crafts stunning, user-centric interfaces while our architects build scalable, performance-optimized system blueprints that ensure your platform can grow with your business.",
    icon: <Palette size={32} />,
    color: "#415A77",
    features: [
      "UI/UX Design Systems",
      "Wireframing & Prototyping",
      "Database Architecture",
      "API Design & Planning"
    ]
  },
  {
    phase: "03",
    title: "Development & Integration",
    description: "Using cutting-edge technologies and best practices, we build your solution with clean, maintainable code. Our full-stack expertise ensures seamless integration across all components.",
    icon: <Code2 size={32} />,
    color: "#778DA9",
    features: [
      "Agile Development Sprints",
      "Continuous Integration/Deployment",
      "Code Reviews & Quality Assurance",
      "Performance Optimization"
    ]
  },
  {
    phase: "04",
    title: "Launch & Support",
    description: "We ensure a smooth launch with rigorous testing, then provide ongoing support and maintenance. Your success is our success, and we're here for the long haul.",
    icon: <Rocket size={32} />,
    color: "#0D1B2A",
    features: [
      "Comprehensive Testing",
      "Deployment & Monitoring",
      "Post-Launch Support",
      "Continuous Improvements"
    ]
  }
];


export default function Work() {
  return (
    <section id="work" className="bg-navy py-24 md:py-32 px-6 md:px-24 relative overflow-hidden">
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-navy rounded-full blur-3xl opacity-30 pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-slate rounded-full blur-3xl opacity-20 pointer-events-none"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #415A77 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-slate via-ghost to-transparent mb-6 md:mb-8 origin-left"
          />

          <h2 className="text-ghost text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 relative">
            {"How We Work".split('').map((char, i) => (
              <motion.span
                key={`work-${i}`}
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.05,
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="inline-block hover:text-slate hover:scale-110 transition-all duration-300 cursor-default"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 blur-3xl bg-gradient-to-r from-ghost/30 to-transparent pointer-events-none"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              aria-hidden="true"
            />
          </h2>

          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-mist max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed"
          >
            We combine cutting-edge technologies with proven methodologies to deliver 
            web solutions that don't just meet expectations—they exceed them. Our workflow 
            is designed to ensure quality, transparency, and customer satisfaction at every step.
          </motion.p>
        </motion.div>

        {/* Workflow Phases */}
        <div className="mb-20 md:mb-32">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {workflowPhases.map((phase, index) => (
              <WorkflowCard key={index} {...phase} index={index} />
            ))}
          </div>
        </div>

        

        {/* Customer Satisfaction Promise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="relative bg-gradient-to-br from-navy/50 via-navy/30 to-transparent backdrop-blur-xl border-2 border-slate/30 rounded-3xl p-8 md:p-12 overflow-hidden group"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate/10 via-transparent to-transparent pointer-events-none"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: '200% 200%' }}
          />

          {/* Corner frames */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-slate/30 group-hover:border-slate/60 transition-colors" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-slate/30 group-hover:border-slate/60 transition-colors" />

          <div className="relative z-10 text-center">
            <motion.div
              className="inline-block mb-6"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Users size={48} className="text-ghost" />
            </motion.div>

            <h3 className="text-ghost text-2xl md:text-4xl font-bold mb-4">
              Customer Satisfaction Guaranteed
            </h3>
            <p className="text-mist text-base md:text-lg max-w-2xl mx-auto">
              We maintain open communication throughout the project lifecycle, provide regular 
              updates, and iterate based on your feedback. Your success metrics become our KPIs, 
              and we don't stop until you're 100% satisfied with the result.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Workflow Card Component
function WorkflowCard({ phase, title, description, icon, color, features, index }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div 
      ref={container}
      style={{ scale, opacity }}
      className="sticky top-24 z-0"
    >
      <div className="bg-navy/40 backdrop-blur-xl border-2 border-slate/30 rounded-2xl md:rounded-3xl p-6 md:p-10 hover:border-slate/50 transition-all duration-500 group relative overflow-hidden">
        
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}20 0%, transparent 70%)`,
          }}
        />

        {/* Phase number */}
        <motion.div
          className="absolute -top-8 -right-8 text-[150px] md:text-[200px] font-bold text-slate/10 leading-none pointer-events-none"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
        >
          {phase}
        </motion.div>

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="inline-block p-4 bg-slate/10 rounded-2xl mb-6 text-ghost group-hover:bg-slate/20 transition-all"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              damping: 15, 
              stiffness: 200,
              delay: 0.3 + index * 0.1 
            }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-ghost text-2xl md:text-4xl font-bold mb-4 group-hover:text-slate transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-mist text-base md:text-lg leading-relaxed mb-6">
            {description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-slate text-sm md:text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
              >
                <CheckCircle2 size={16} className="text-ghost flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Corner frames */}
        <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-slate/30 group-hover:border-slate/60 transition-colors" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-slate/30 group-hover:border-slate/60 transition-colors" />
      </div>
    </motion.div>
  );
}