"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Alex V.",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
    bio: "Visionary leader with 10+ years in digital innovation",
    color: "#1B263B",
  },
  {
    name: "Sarah K.",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
    bio: "Award-winning designer crafting memorable experiences",
    color: "#415A77",
  },
  {
    name: "Marcus R.",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
    bio: "Systems architect building scalable solutions",
    color: "#778DA9",
  },
  {
    name: "Elena D.",
    role: "Frontend Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60",
    bio: "Performance-obsessed frontend wizard",
    color: "#0D1B2A",
  },
  {
    name: "David W.",
    role: "Backend Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60",
    bio: "Infrastructure expert ensuring rock-solid backends",
    color: "#1B263B",
  },
  {
    name: "Jessica L.",
    role: "UX Strategy",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=60",
    bio: "User advocate translating needs into intuitive designs",
    color: "#415A77",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-void relative overflow-hidden px-6 md:px-24">
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-navy rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-slate rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
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
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #415A77 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-slate rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10">
        {/* Header section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute -top-8 left-0 h-[2px] w-24 bg-gradient-to-r from-slate via-ghost to-transparent origin-left"
            />

            <h2 className="text-ghost text-5xl md:text-8xl font-bold mb-8 relative inline-block">
              {"The Minds".split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: 90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
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
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-ghost/30 to-transparent"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </h2>

            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-mist max-w-2xl text-lg md:text-xl leading-relaxed relative"
            >
              We are a collective of visionaries, engineers, and artists. 
              United by a passion for the impossible.
              
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-slate to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.p>
          </motion.div>

          {/* Team stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-12 mt-12 font-mono text-sm"
          >
            <TeamStat label="Members" value={teamMembers.length} />
            <TeamStat label="Countries" value="5+" />
            <TeamStat label="Experience" value="50+ Years" />
          </motion.div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-slate/50 to-transparent origin-center"
      />
    </section>
  );
}

// Team stat component
function TeamStat({ label, value }) {
  return (
    <motion.div
      className="relative group cursor-default"
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute -inset-2 bg-slate/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      <div className="relative">
        <span className="block text-slate text-xs uppercase tracking-wider mb-1">{label}</span>
        <span className="block text-ghost text-2xl font-bold">{value}</span>
      </div>
    </motion.div>
  );
}

// Enhanced team card with 3D flip and holographic effects
function TeamCard({ member, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    
    setMousePosition({ x, y });
    mouseX.set(x);
    mouseY.set(y);
    rotateX.set(y * 10);
    rotateY.set(-x * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1]
      }}
      className="relative h-[500px] w-full perspective-1000"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-navy"
          style={{
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Image with effects */}
          <div className="relative w-full h-full group">
            {/* Main image */}
            <motion.div
              className="absolute inset-0"
              style={{
                x: mousePosition.x * 20,
                y: mousePosition.y * 20,
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
            </motion.div>

            {/* Holographic overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-transparent via-slate/20 to-transparent opacity-0 group-hover:opacity-100 mix-blend-overlay"
              style={{
                backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
                backgroundSize: '200% 200%',
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

            {/* Scanline effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(120, 141, 169, 0.05) 3px, rgba(120, 141, 169, 0.05) 6px)',
              }}
              animate={{
                y: [0, 40, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Spotlight following mouse */}
            <motion.div
              className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${member.color} 0%, transparent 70%)`,
                left: `${(mousePosition.x + 1) * 50}%`,
                top: `${(mousePosition.y + 1) * 50}%`,
                transform: 'translate(-50%, -50%)',
                opacity: 0.4,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <motion.h3 
                className="text-3xl font-bold text-ghost mb-2 relative"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {member.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-slate to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />
              </motion.h3>
              
              <p className="text-slate font-mono text-sm uppercase tracking-widest mb-6">
                {member.role}
              </p>
              
              {/* Social icons */}
              <motion.div 
                className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <SocialIcon icon={<Linkedin size={18} />} />
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Mail size={18} />} />
              </motion.div>

              {/* Flip indicator */}
              <motion.div
                className="absolute bottom-4 right-4 text-slate/50 text-xs font-mono uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Click to flip
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2L10 6L6 10M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>

            {/* Corner frames */}
            <motion.div
              className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-slate/30 group-hover:border-slate/60 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            />
            <motion.div
              className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-slate/30 group-hover:border-slate/60 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            />
          </div>

          {/* Aesthetic border */}
          <div className="absolute inset-0 border-2 border-slate/20 rounded-3xl group-hover:border-slate/50 transition-colors pointer-events-none" />
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-navy via-[#1a2942] to-void border-2 border-slate/30 p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            rotateY: 180,
          }}
        >
          {/* Background pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, ${member.color} 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate/10 via-transparent to-transparent"
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

          <div className="relative z-10">
            <motion.h3 
              className="text-3xl font-bold text-ghost mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {member.name}
            </motion.h3>
            
            <motion.p 
              className="text-slate font-mono text-sm uppercase tracking-widest mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {member.role}
            </motion.p>

            <motion.p 
              className="text-mist text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {member.bio}
            </motion.p>

            {/* Skills or achievements could go here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {['Innovation', 'Leadership', 'Strategy'].map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 text-xs font-mono uppercase border border-slate/30 rounded-full text-slate"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Contact info at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative z-10"
          >
            <div className="h-[1px] bg-gradient-to-r from-slate/50 to-transparent mb-4" />
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Mail size={18} />} />
            </div>
          </motion.div>

          {/* Corner frames */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-slate/30" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-slate/30" />
        </motion.div>
      </motion.div>

      {/* Outer glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 0px rgba(120, 141, 169, 0)',
            `0 0 40px ${member.color}40`,
            '0 0 0px rgba(120, 141, 169, 0)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      />
    </motion.div>
  );
}

// Social icon component
function SocialIcon({ icon }) {
  return (
    <motion.div
      className="p-3 bg-slate/10 border border-slate/20 rounded-full hover:bg-ghost hover:text-void transition-all cursor-pointer backdrop-blur-sm relative overflow-hidden group"
      whileHover={{ scale: 1.1, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.6 }}
    >
      {icon}
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
}