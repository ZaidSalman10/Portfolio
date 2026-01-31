"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import aboutImg from "../resources/about.jpg"

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Advanced parallax effects
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen bg-navy text-mist py-32 px-6 md:px-24 relative overflow-hidden"
    >
      {/* Enhanced atmospheric background */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-void/40 blur-3xl pointer-events-none"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          rotateZ: useTransform(scrollYProgress, [0, 1], [0, 45]),
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#415A77 1px, transparent 1px), linear-gradient(90deg, #415A77 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          x: useTransform(scrollYProgress, [0, 1], [0, -40]),
          y: useTransform(scrollYProgress, [0, 1], [0, -40]),
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-slate rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto relative z-10">
        
        {/* Image section with 3D effects */}
        <motion.div 
          style={{ 
            scale, 
            opacity,
            rotateY,
            transformPerspective: 1000,
          }}
          className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border-2 border-slate/30 group"
        >
          {/* Multiple layered overlays for depth */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-slate/40 via-transparent to-void/40 z-10 mix-blend-overlay"
            style={{
              x: mousePosition.x * 20,
              y: mousePosition.y * 20,
            }}
          />

          {/* Scanline effect */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(120, 141, 169, 0.03) 2px, rgba(120, 141, 169, 0.03) 4px)',
            }}
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Main image with parallax */}
          <motion.div
            className="absolute inset-0"
            style={{
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
            }}
          >
            <Image 
              src={aboutImg} 
              alt="AZKKAN HQ" 
              fill 
              className=" transition-transform duration-1000 ease-out group-hover:scale-110"
            />
          </motion.div>

          {/* Vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-navy/60 z-10" />

          {/* Corner frames */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-ghost/50 z-30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-ghost/50 z-30"
          />

          {/* Glowing orb that follows mouse */}
          <motion.div
            className="absolute w-64 h-64 bg-slate rounded-full blur-3xl opacity-0 group-hover:opacity-30 z-0 pointer-events-none"
            style={{
              left: `${(mousePosition.x + 1) * 50}%`,
              top: `${(mousePosition.y + 1) * 50}%`,
              transform: 'translate(-50%, -50%)',
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Animated border pulse */}
          <motion.div
            className="absolute inset-0 border-2 border-slate/0 rounded-3xl z-30"
            animate={{
              borderColor: ['rgba(120, 141, 169, 0)', 'rgba(120, 141, 169, 0.5)', 'rgba(120, 141, 169, 0)'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Text content section */}
        <div className="flex flex-col justify-center space-y-8 relative">
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-slate via-[#778DA9] to-transparent origin-top"
          />

          {/* Large ABOUT text */}
          <motion.div className="relative overflow-hidden">
            <motion.h2 
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              whileInView={{ opacity: 0.08, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
              className="text-6xl md:text-9xl font-heading text-ghost select-none"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              ABOUT
            </motion.h2>
            {/* Echo effect */}
            <motion.h2 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 0.03, x: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="absolute top-2 left-2 text-6xl md:text-9xl font-heading text-slate select-none"
            >
              ABOUT
            </motion.h2>
          </motion.div>

          {/* Text reveals with stagger */}
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed">
            <RevealText delay={0.2}>
              <span className="text-ghost font-semibold">AZKKAN</span> is a premier digital agency bridging the gap between
              complex logic and award-winning design.
            </RevealText>
            <RevealText delay={0.4}>
              Founded by a select team of visionary Computer Science students at{" "}
              <span className="text-ghost font-semibold">UET</span>, committed to innovation, excellence, and impact.
            </RevealText>
            <RevealText delay={0.6}>
              A cutting-edge agency specializing in{" "}
              <span className="text-ghost font-semibold">web development</span>, delivering innovative, efficient, and tailored digital solutions.
            </RevealText>
          </div>

          {/* Info cards with hover effects */}
          <motion.div 
            className="pt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate/50 to-transparent mb-10" />
            
            <div className="grid grid-cols-2 gap-8 font-mono text-sm">
              <InfoCard 
                label="HQ" 
                value="Pakistan"
                icon={
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C7.24 2 5 4.24 5 7c0 4.5 5 11 5 11s5-6.5 5-11c0-2.76-2.24-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor" opacity="0.5"/>
                  </svg>
                }
              />
              <InfoCard 
                label="Service Region" 
                value="Global"
                icon={
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.5c-3.58 0-6.5-2.92-6.5-6.5S6.42 3.5 10 3.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5z" fill="currentColor" opacity="0.5"/>
                    <path d="M10 3.5c-1.93 0-3.5 2.91-3.5 6.5s1.57 6.5 3.5 6.5 3.5-2.91 3.5-6.5-1.57-6.5-3.5-6.5z" fill="currentColor" opacity="0.5"/>
                  </svg>
                }
              />
            </div>
          </motion.div>

          {/* Decorative accent */}
          <motion.div
            className="absolute -right-16 top-1/2 w-32 h-32 bg-slate rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate/50 to-transparent origin-center"
      />
    </section>
  );
}

// Reveal text component with word-by-word animation
function RevealText({ children, delay = 0, className = "" }) {
  return (
    <div className="overflow-hidden">
      <motion.p
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, delay, ease: [0.33, 1, 0.68, 1] }}
        className={`relative ${className}`}
      >
        {children}
        {/* Subtle highlight effect on hover */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-ghost/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      </motion.p>
    </div>
  );
}

// Info card component with advanced hover effects
function InfoCard({ label, value, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-default"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 bg-slate/10 rounded-xl blur-xl"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card content */}
      <div className="relative bg-slate/5 border border-slate/20 rounded-xl p-6 backdrop-blur-sm group-hover:border-slate/40 transition-colors">
        
        {/* Icon */}
        <motion.div
          className="text-slate mb-3 group-hover:text-ghost transition-colors"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>

        {/* Label */}
        <span className="block text-slate mb-2 text-xs uppercase tracking-wider">
          {label}
        </span>

        {/* Value */}
        <motion.span 
          className="text-ghost text-lg font-semibold block"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {value}
        </motion.span>

        {/* Animated underline */}
        <motion.div
          className="absolute bottom-4 left-6 h-[2px] bg-gradient-to-r from-slate to-ghost"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '30%' : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Corner accents */}
        <motion.div
          className="absolute top-2 right-2 w-3 h-3 border-r border-t border-slate/30"
          animate={{ opacity: isHovered ? 1 : 0.3 }}
        />
      </div>
    </motion.div>
  );
}