"use client";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef, memo, useMemo } from "react";

// Memoized scroll indicator to prevent unnecessary rerenders
const ScrollIndicator = memo(() => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2, duration: 1 }}
    className="absolute bottom-10 right-6 md:right-24 flex flex-col items-center gap-4 z-20 cursor-pointer group"
    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
  >

    <div className="relative w-[1px] h-24 bg-navy overflow-hidden">
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-slate to-transparent"
      />
    </div>
  </motion.div>
));
ScrollIndicator.displayName = 'ScrollIndicator';

// Optimized background orbs with reduced animation complexity
const BackgroundOrbs = memo(() => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-slate rounded-full blur-[120px] opacity-20 will-change-transform"
    />
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] bg-navy rounded-full blur-[150px] opacity-40 will-change-transform"
    />
  </div>
));
BackgroundOrbs.displayName = 'BackgroundOrbs';

export default function Hero() {
  const containerRef = useRef(null);
  
  // Scroll physics with optimized performance
  const { scrollY } = useScroll();
  
  // Parallax with reduced calculation frequency
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const yGraphic = useTransform(scrollY, [0, 500], [0, 100]);
  
  // Optimized fade out
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);

  // Mouse tracking with throttling
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs with balanced performance
  const springX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  useEffect(() => {
    let rafId = null;
    let lastTime = 0;
    const throttleDelay = 16; // ~60fps

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      
      if (currentTime - lastTime < throttleDelay) return;
      lastTime = currentTime;

      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = clientX / innerWidth - 0.5;
        const y = clientY / innerHeight - 0.5;
        
        mouseX.set(x * innerWidth);
        mouseY.set(y * innerHeight);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  // Memoize animation variants
  const textAnimationVariants = useMemo(() => ({
    initial: { y: "100%" },
    animate: { y: 0 },
  }), []);

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative h-screen w-full bg-void overflow-hidden flex flex-col justify-center px-6 md:px-24 pt-20"
    >
      {/* Dynamic Mouse Glow - Optimized with will-change */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen will-change-transform"
        style={{
          background: "radial-gradient(circle at center, var(--navy) 0%, transparent 60%)",
          x: springX,
          y: springY,
        }}
      />

      {/* Background Orbs Component */}
      <BackgroundOrbs />

      {/* Optimized Noise Overlay - Using CSS background instead of external image */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
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
          <div className="h-[1px] w-12 bg-slate" />
          <p className="text-mist font-mono text-xs md:text-sm tracking-[0.3em] uppercase">
            Est. 2026 — AZKKAN Agency
          </p>
        </motion.div>

        {/* Main Typography - Optimized animations */}
        <div className="font-heading font-bold text-ghost text-6xl md:text-9xl leading-[0.9] tracking-tighter">
          
          {/* Line 1: DIGITAL */}
          <div className="overflow-hidden">
            <motion.h1
              variants={textAnimationVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              style={{ y: yText }}
              className="relative inline-block will-change-transform"
            >
              Digital
            </motion.h1>
          </div>

          {/* Line 2: REALITY */}
          <div className="overflow-hidden">
            <motion.h1
              variants={textAnimationVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
              style={{ y: yGraphic }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-slate via-ghost to-slate opacity-90 pb-2 will-change-transform"
            >
              Reality
            </motion.h1>
          </div>

          {/* Line 3: ARCHITECTS */}
          <div className="overflow-hidden">
            <motion.h1
              variants={textAnimationVariants}
              initial="initial"
              animate="animate"
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
            <br className="hidden md:block" />
            where precision engineering artistic chaos.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator Component */}
      <ScrollIndicator />

      {/* Corner Accents - Simple and performant */}
      <div className="absolute top-24 left-6 md:left-24 w-2 h-2 bg-slate rounded-full opacity-50" />
      <div className="absolute bottom-24 left-6 md:left-24 w-2 h-2 bg-slate rounded-full opacity-50" />
    </section>
  );
}