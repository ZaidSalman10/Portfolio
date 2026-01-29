"use client";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  
  // 1. SCROLL PHYSICS
  const { scrollY } = useScroll();
  
  // Parallax: Text moves at different speeds
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const yGraphic = useTransform(scrollY, [0, 500], [0, 100]);
  
  // Fade out logic: Elements disappear as you scroll to About section
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);

  // 2. MOUSE PHYSICS (Optimized)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the "Flashlight" effect
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate percentage (-0.5 to 0.5)
      const x = clientX / innerWidth - 0.5;
      const y = clientY / innerHeight - 0.5;
      
      mouseX.set(x * innerWidth);
      mouseY.set(y * innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative h-screen w-full bg-void overflow-hidden flex flex-col justify-center px-6 md:px-24 pt-20"
    >
      {/* ================= BACKGROUND LAYERS ================= */}
      
      {/* 1. Dynamic Mouse "Flashlight" Glow */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background: "radial-gradient(circle at center, var(--navy) 0%, transparent 60%)",
          x: springX,
          y: springY,
        }}
      />

      {/* 2. Ambient Orbs (Fixed Atmosphere) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right - Slate Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-slate rounded-full blur-[120px] opacity-20"
        />
        {/* Bottom Left - Navy Deep Glow */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] bg-navy rounded-full blur-[150px] opacity-40"
        />
      </div>

      {/* 3. Cinematic Noise Overlay (Texture) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      {/* ================= MAIN CONTENT ================= */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        
        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-slate"></div>
          <p className="text-mist font-mono text-xs md:text-sm tracking-[0.3em] uppercase">
            Est. 2026 — AZKKAN Agency
          </p>
        </motion.div>

        {/* Main Typography */}
        <div className="font-heading font-bold text-ghost text-6xl md:text-9xl leading-[0.9] tracking-tighter">
          
          {/* Line 1: DIGITAL */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              style={{ y: yText }} // Parallax
              className="relative inline-block"
            >
              Digital
            </motion.h1>
          </div>

          {/* Line 2: REALITY (Gradient Text) */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
              style={{ y: yGraphic }} // Parallax Slower
              className="text-transparent bg-clip-text bg-gradient-to-r from-slate via-ghost to-slate opacity-90 pb-2"
            >
              Reality
            </motion.h1>
          </div>

          {/* Line 3: ARCHITECTS */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="relative inline-block"
            >
              Architects
              <span className="text-slate">.</span>
            </motion.h1>
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 md:ml-2"
        >
          <p className="text-mist text-lg md:text-xl font-light leading-relaxed">
            We forge heavy-duty digital experiences. Specialized in Web Dev, we provide services 
            <br />where precision engineering meets artistic chaos.
          </p>
        </motion.div>
      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 right-6 md:right-24 flex flex-col items-center gap-4 z-20 cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-mono text-mist uppercase writing-vertical-rl group-hover:text-ghost transition-colors">
          Let's Explore More, <br /> <center>Scroll Down</center>
        </span>
        <div className="relative w-[1px] h-24 bg-navy overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-slate to-transparent"
          />
        </div>
      </motion.div>

      {/* ================= CORNER ACCENTS (Tech Feel) ================= */}
      <div className="absolute top-24 left-6 md:left-24 w-2 h-2 bg-slate rounded-full opacity-50" />
      <div className="absolute bottom-24 left-6 md:left-24 w-2 h-2 bg-slate rounded-full opacity-50" />

    </section>
  );
}