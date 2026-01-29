"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const technologies = [
  { name: "HTML", category: "Frontend", color: "#E34F26" },
  { name: "CSS", category: "Frontend", color: "#1572B6" },
  { name: "JavaScript", category: "Frontend", color: "#F7DF1E" },
  { name: "Tailwind", category: "Frontend", color: "#06B6D4" },
  { name: "Bootstrap", category: "Frontend", color: "#7952B3" },
  { name: "Next", category: "Frontend", color: "#000000" },
  { name: "React", category: "Frontend", color: "#61DAFB" },
  { name: "Node", category: "Backend", color: "#339933" },
  { name: "Express", category: "Backend", color: "#000000" },
  { name: "MongoDB", category: "Backend", color: "#47A248" },
  { name: "Mongoose", category: "Backend", color: "#880000" },
  { name: "Railway", category: "DevOps", color: "#0B0D0E" },
  { name: "Figma", category: "Design", color: "#F24E1E" },
  { name: "Git", category: "DevOps", color: "#F05032" },
  { name: "JWT", category: "Backend", color: "#000000" },
];

export default function TechStack() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      id="stack" 
      className="py-40 bg-void overflow-hidden flex flex-col items-center relative"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#415A77 1px, transparent 1px), linear-gradient(90deg, #415A77 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          y,
        }}
      />

      {/* Atmospheric orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-navy rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        className="relative z-10 mb-20 text-center"
      >
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-slate to-transparent mx-auto mb-8 origin-center"
        />

        <motion.p 
          className="text-slate font-mono text-sm tracking-widest uppercase mb-6 relative"
          animate={{
            textShadow: [
              '0 0 0px rgba(120, 141, 169, 0)',
              '0 0 20px rgba(120, 141, 169, 0.5)',
              '0 0 0px rgba(120, 141, 169, 0)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          // The Arsenal
        </motion.p>

        <motion.h2
          className="text-ghost text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {"Tech Stack".split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block hover:text-slate hover:scale-110 transition-all duration-300 cursor-default"
              whileHover={{ y: -10 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-mist text-lg max-w-2xl mx-auto"
        >
          Powered by industry-leading technologies and frameworks
        </motion.p>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-slate to-transparent mx-auto mt-8 origin-center"
        />
      </motion.div>
      
      {/* Marquee container with multiple layers */}
      <div className="relative w-full">
        {/* Gradient masks for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-r from-void via-void/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-l from-void via-void/80 to-transparent z-20 pointer-events-none" />
        
        {/* First marquee - Top row */}
        <MarqueeRow 
          items={technologies.slice(0, 8)} 
          direction="left" 
          speed={40}
          index={0}
        />

        {/* Spacer */}
        <div className="h-16" />

        {/* Second marquee - Middle row */}
        <MarqueeRow 
          items={technologies.slice(8, 15)} 
          direction="right" 
          speed={35}
          index={1}
        />

        {/* Spacer */}
        <div className="h-16" />

        {/* Third marquee - Bottom row (repeat for fullness) */}
        <MarqueeRow 
          items={[...technologies.slice(0, 7)]} 
          direction="left" 
          speed={45}
          index={2}
        />
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mt-20 h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-slate/50 to-transparent origin-center"
      />

      {/* Tech categories legend */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-16 flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-wider z-10"
      >
        {['Frontend', 'Backend', 'DevOps', 'Design'].map((category, i) => (
          <motion.div
            key={category}
            className="flex items-center gap-2 px-4 py-2 border border-slate/20 rounded-full backdrop-blur-sm bg-navy/30 hover:border-slate/50 transition-colors cursor-default group"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-slate group-hover:bg-ghost transition-colors"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(120, 141, 169, 0)',
                  '0 0 10px rgba(120, 141, 169, 0.8)',
                  '0 0 0px rgba(120, 141, 169, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
            <span className="text-slate group-hover:text-ghost transition-colors">
              {category}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Enhanced marquee row component
function MarqueeRow({ items, direction, speed, index }) {
  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap relative">
      {/* Duplicate for seamless loop */}
      {[...Array(3)].map((_, dupeIndex) => (
        <motion.div
          key={dupeIndex}
          initial={{ x: direction === 'left' ? 0 : '-100%' }}
          animate={{ 
            x: direction === 'left' ? '-100%' : 0 
          }}
          transition={{ 
            duration: speed, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-16 md:gap-24 px-8 shrink-0"
        >
          {items.map((tech, techIndex) => (
            <TechItem 
              key={`${tech.name}-${dupeIndex}-${techIndex}`} 
              tech={tech} 
              index={techIndex}
              rowIndex={index}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

// Individual tech item with advanced effects
function TechItem({ tech, index, rowIndex }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-default select-none"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Main text with 3D effect */}
      <motion.span
        className="text-6xl md:text-9xl font-bold relative inline-block"
        style={{
          color: 'transparent',
          WebkitTextStroke: isHovered ? `2px ${tech.color}` : '1px #415A77',
          textStroke: isHovered ? `2px ${tech.color}` : '1px #415A77',
          transition: 'all 0.5s ease',
        }}
        whileHover={{ 
          scale: 1.1,
          y: -10,
        }}
        animate={{
          textShadow: isHovered
            ? [
                `0 0 20px ${tech.color}`,
                `0 0 40px ${tech.color}`,
                `0 0 20px ${tech.color}`,
              ]
            : '0 0 0px transparent',
        }}
        transition={{
          textShadow: {
            duration: 1.5,
            repeat: Infinity,
          },
          default: { duration: 0.5 }
        }}
      >
        {tech.name}

        {/* Filled text on hover */}
        <motion.span
          className="absolute inset-0"
          style={{
            color: tech.color,
            opacity: 0,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {tech.name}
        </motion.span>

        {/* Glow effect */}
        <motion.span
          className="absolute inset-0 blur-2xl"
          style={{
            color: tech.color,
            opacity: 0,
          }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {tech.name}
        </motion.span>
      </motion.span>

      {/* Category label on hover */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
      >
        <span 
          className="px-3 py-1 rounded-full text-xs font-mono uppercase border backdrop-blur-sm"
          style={{
            borderColor: `${tech.color}40`,
            backgroundColor: `${tech.color}10`,
            color: tech.color,
          }}
        >
          {tech.category}
        </span>
      </motion.div>

      {/* Particle effect on hover */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: tech.color,
                left: '50%',
                top: '50%',
              }}
              initial={{ opacity: 1, scale: 0 }}
              animate={{
                opacity: 0,
                scale: 1,
                x: Math.cos((i / 8) * Math.PI * 2) * 50,
                y: Math.sin((i / 8) * Math.PI * 2) * 50,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}

      {/* 3D shadow layers */}
      <motion.span
        className="absolute inset-0 text-6xl md:text-9xl font-bold opacity-10"
        style={{
          color: tech.color,
          transform: 'translate(3px, 3px)',
        }}
        animate={{ opacity: isHovered ? 0.2 : 0.05 }}
      >
        {tech.name}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-6xl md:text-9xl font-bold opacity-5"
        style={{
          color: tech.color,
          transform: 'translate(6px, 6px)',
        }}
        animate={{ opacity: isHovered ? 0.1 : 0.02 }}
      >
        {tech.name}
      </motion.span>
    </motion.div>
  );
}