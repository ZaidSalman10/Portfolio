"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail, MessageCircle } from "lucide-react";
import { useState, useRef } from "react";
import kamran from "../resources/kamran.jpeg"

const teamMembers = [
  {
    name: "Kamran Sattar",
    role: "Founder & CEO",
    image: kamran,
    bio: "Visionary leader with passion and enthusiasm in digital innovation",
    color: "#1B263B",
    social: {
      linkedin: "https://linkedin.com/in/kamransattar",
      email: "kamran@azkkan.com",
      whatsapp: "https://wa.me/923198653881" // WhatsApp number format: country code + number (no + or spaces)
    }
  },
  {
    name: "Khubaib Asif",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
    bio: "Award-winning designer crafting memorable experiences",
    color: "#415A77",
    social: {
      linkedin: "https://linkedin.com/in/khubaibasif",
      email: "khubaib@azkkan.com",
      whatsapp: "https://wa.me/923001234567"
    }
  },
  {
    name: "Ahsan Subhani",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
    bio: "Systems architect building scalable solutions",
    color: "#778DA9",
    social: {
      linkedin: "https://linkedin.com/in/ahsansubhani",
      email: "ahsan@azkkan.com",
      whatsapp: "https://wa.me/923001234568"
    }
  },
  {
    name: "Numair Jahazi",
    role: "Frontend Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60",
    bio: "Performance-obsessed frontend wizard",
    color: "#0D1B2A",
    social: {
      linkedin: "https://linkedin.com/in/numairjahazi",
      email: "numair@azkkan.com",
      whatsapp: "https://wa.me/923001234569"
    }
  },
  {
    name: "Zaid Salman",
    role: "Backend Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60",
    bio: "Infrastructure expert ensuring rock-solid backends",
    color: "#1B263B",
    social: {
      linkedin: "https://linkedin.com/in/zaidsalman",
      email: "zaid@azkkan.com",
      whatsapp: "https://wa.me/923001234570"
    }
  },
  {
    name: "Ali Amjad",
    role: "UX Strategy",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=60",
    bio: "User advocate translating needs into intuitive designs",
    color: "#415A77",
    social: {
      linkedin: "https://linkedin.com/in/aliamjad",
      email: "ali@azkkan.com",
      whatsapp: "https://wa.me/923001234571"
    }
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-void relative overflow-hidden px-6 md:px-24">
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-72 md:w-96 h-72 md:h-96 bg-navy rounded-full blur-3xl opacity-30 pointer-events-none"
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
        className="absolute bottom-1/4 left-0 w-72 md:w-96 h-72 md:h-96 bg-slate rounded-full blur-3xl opacity-20 pointer-events-none"
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
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #415A77 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`team-particle-${i}`}
          className="absolute w-1 h-1 bg-slate rounded-full pointer-events-none"
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute -top-6 md:-top-8 left-0 h-[2px] w-16 md:w-24 bg-gradient-to-r from-slate via-ghost to-transparent origin-left"
            />

            <h2 className="text-ghost text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 relative">
              {"The Minds".split('').map((char, i) => (
                <motion.span
                  key={`minds-${i}`}
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
              className="text-mist max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed relative"
            >
              We are a collective of visionaries, engineers, and artists. 
              United by a passion for the impossible.
              
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-slate to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.p>
          </motion.div>

          {/* Team stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-8 md:gap-12 mt-8 md:mt-12 font-mono text-sm"
          >
            <TeamStat label="Members" value={teamMembers.length} />
            <TeamStat label="Countries" value="5+" />
            <TeamStat label="Experience" value="50+ Years" />
          </motion.div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={`team-${index}`} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mt-16 md:mt-24 h-[1px] bg-gradient-to-r from-transparent via-slate/50 to-transparent origin-center max-w-7xl mx-auto"
      />
    </section>
  );
}

// Team stat component
function TeamStat({ label, value }) {
  return (
    <motion.div
      className="relative group cursor-default"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute -inset-2 bg-slate/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      <div className="relative">
        <span className="block text-slate text-xs uppercase tracking-wider mb-1">{label}</span>
        <span className="block text-ghost text-xl md:text-2xl font-bold">{value}</span>
      </div>
    </motion.div>
  );
}

// Team Card Component
function TeamCard({ member, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  // Smooth spring animations for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  // Only apply 3D tilt on FRONT side
  const handleMouseMove = (e) => {
    if (isFlipped) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    
    mouseX.set(x);
    mouseY.set(y);
    rotateX.set(y * 12);
    rotateY.set(-x * 12);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // Toggle flip on click - stays until clicked again
  const handleClick = (e) => {
    // Don't flip if clicking on a social link
    if (e.target.closest('a')) return;
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1]
      }}
      className="relative h-[450px] md:h-[500px] w-full group"
      style={{ perspective: 1500 }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1],
        }}
      >
        {/* ===== FRONT SIDE ===== */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-navy shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            rotateX: isFlipped ? 0 : rotateX,
            rotateY: isFlipped ? 0 : rotateY,
          }}
        >
          <div className="relative w-full h-full">
            {/* Image container with parallax */}
            <motion.div 
              className="absolute inset-0"
              style={{
                x: mouseX.get() * 15,
                y: mouseY.get() * 15,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                priority={index < 3}
              />
            </motion.div>

            {/* Holographic shimmer effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, 
                  transparent 0%, 
                  rgba(120, 141, 169, 0.1) 25%, 
                  rgba(120, 141, 169, 0.2) 50%, 
                  rgba(120, 141, 169, 0.1) 75%, 
                  transparent 100%)`,
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

            {/* Scanline effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(120, 141, 169, 0.1) 2px, rgba(120, 141, 169, 0.1) 4px)',
              }}
              animate={{ y: ['0%', '100%'] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-ghost mb-2 relative">
                  {member.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-slate to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: isFlipped ? 0 : '60%' }}
                    transition={{ duration: 0.6 }}
                  />
                </h3>
                
                <p className="text-slate font-mono text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6">
                  {member.role}
                </p>
                
                {/* Social icons with links */}
                <motion.div 
                  className="flex gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.1,
                    staggerChildren: 0.1
                  }}
                >
                  <SocialIcon 
                    icon={<Linkedin size={16} />} 
                    href={member.social.linkedin}
                    label="LinkedIn"
                    delay={0} 
                  />
                  <SocialIcon 
                    icon={<MessageCircle size={16} />} 
                    href={member.social.whatsapp}
                    label="WhatsApp"
                    delay={0.1} 
                  />
                  <SocialIcon 
                    icon={<Mail size={16} />} 
                    href={`mailto:${member.social.email}`}
                    label="Email"
                    delay={0.2} 
                  />
                </motion.div>

                {/* Flip indicator with pulse animation */}
                <motion.div
                  className="absolute bottom-3 md:bottom-4 right-3 md:right-4 text-slate/60 text-xs font-mono uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ 
                    x: [0, 5, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="hidden sm:inline">Click to flip</span>
                  <motion.svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <path d="M6 2L10 6L6 10M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Corner frames */}
            <motion.div
              className="absolute top-3 md:top-4 left-3 md:left-4 w-10 md:w-12 h-10 md:h-12 border-l-2 border-t-2 border-slate/30 group-hover:border-slate/60 transition-colors duration-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            />
            <motion.div
              className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-10 md:w-12 h-10 md:h-12 border-r-2 border-b-2 border-slate/30 group-hover:border-slate/60 transition-colors duration-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            />

            {/* Animated spotlight */}
            <motion.div
              className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle, ${member.color} 0%, transparent 70%)`,
                left: `${(mouseX.get() + 1) * 50}%`,
                top: `${(mouseY.get() + 1) * 50}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>

          {/* Border glow */}
          <div className="absolute inset-0 border-2 border-slate/20 rounded-2xl md:rounded-3xl group-hover:border-slate/50 transition-all duration-500 pointer-events-none" />
        </motion.div>

        {/* ===== BACK SIDE ===== */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-navy via-[#1a2942] to-void border-2 border-slate/40 p-6 md:p-8 flex flex-col justify-between shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            rotateY: 180,
          }}
        >
          {/* Animated background pattern */}
          <motion.div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, ${member.color} 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${member.color}20 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-ghost mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isFlipped ? 1 : 0, 
                y: isFlipped ? 0 : 20 
              }}
              transition={{ 
                duration: 0.5, 
                delay: isFlipped ? 0.2 : 0,
                ease: [0.33, 1, 0.68, 1]
              }}
            >
              {member.name}
            </motion.h3>
            
            <motion.p 
              className="text-slate font-mono text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isFlipped ? 1 : 0, 
                y: isFlipped ? 0 : 20 
              }}
              transition={{ 
                duration: 0.5, 
                delay: isFlipped ? 0.3 : 0,
                ease: [0.33, 1, 0.68, 1]
              }}
            >
              {member.role}
            </motion.p>

            <motion.p 
              className="text-mist text-base md:text-lg leading-relaxed mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isFlipped ? 1 : 0, 
                y: isFlipped ? 0 : 20 
              }}
              transition={{ 
                duration: 0.5, 
                delay: isFlipped ? 0.4 : 0,
                ease: [0.33, 1, 0.68, 1]
              }}
            >
              {member.bio}
            </motion.p>

            {/* Skills */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isFlipped ? 1 : 0, 
                y: isFlipped ? 0 : 20 
              }}
              transition={{ 
                duration: 0.5, 
                delay: isFlipped ? 0.5 : 0,
                ease: [0.33, 1, 0.68, 1]
              }}
            >
              {['Innovation', 'Leadership', 'Strategy'].map((skill, i) => (
                <motion.span 
                  key={`skill-${i}`}
                  className="px-3 py-1.5 text-xs font-mono uppercase border border-slate/30 rounded-full text-slate hover:border-slate/60 hover:text-ghost hover:bg-slate/10 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isFlipped ? 1 : 0,
                    scale: isFlipped ? 1 : 0.8
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: isFlipped ? 0.6 + i * 0.1 : 0
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Contact section */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isFlipped ? 1 : 0, 
              y: isFlipped ? 0 : 20 
            }}
            transition={{ 
              duration: 0.5, 
              delay: isFlipped ? 0.7 : 0,
              ease: [0.33, 1, 0.68, 1]
            }}
          >
            <div className="h-[1px] bg-gradient-to-r from-slate/50 via-slate/30 to-transparent mb-4" />
            <div className="flex gap-3 md:gap-4">
              <SocialIcon 
                icon={<Linkedin size={16} />} 
                href={member.social.linkedin}
                label="LinkedIn"
                delay={0} 
              />
              <SocialIcon 
                icon={<MessageCircle size={16} />} 
                href={member.social.whatsapp}
                label="WhatsApp"
                delay={0.1} 
              />
              <SocialIcon 
                icon={<Mail size={16} />} 
                href={`mailto:${member.social.email}`}
                label="Email"
                delay={0.2} 
              />
            </div>
          </motion.div>

          {/* Corner frames */}
          <div className="absolute top-3 md:top-4 left-3 md:left-4 w-10 md:w-12 h-10 md:h-12 border-l-2 border-t-2 border-slate/40" />
          <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-10 md:w-12 h-10 md:h-12 border-r-2 border-b-2 border-slate/40" />
          
          {/* Click to flip back */}
          <motion.div
            className="absolute top-3 md:top-4 right-3 md:right-4 text-slate/60 text-xs font-mono uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFlipped ? 1 : 0 }}
            transition={{ delay: isFlipped ? 0.8 : 0 }}
          >
            ← Click
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none"
        animate={{
          boxShadow: isFlipped
            ? `0 0 60px ${member.color}60`
            : '0 0 0px rgba(120, 141, 169, 0)',
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

// Social icon with links
function SocialIcon({ icon, href, label, delay = 0 }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 md:p-3 bg-slate/10 border border-slate/20 rounded-full hover:bg-ghost hover:text-void transition-all backdrop-blur-sm relative overflow-hidden group"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay,
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
      whileHover={{ 
        scale: 1.15,
        rotate: 360,
      }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
      onClick={(e) => e.stopPropagation()} // Prevent card flip when clicking link
    >
      {icon}
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    </motion.a>
  );
}