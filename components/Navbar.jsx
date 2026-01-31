"use client";
import { useState, useEffect, memo, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../resources/logo.jpeg";

// Memoized NavLink component
const NavLink = memo(({ item, isActive, handleScroll, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`#${item.toLowerCase()}`}
      onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full flex items-center justify-center px-1 cursor-pointer group"
    >
      <span className={`text-sm font-mono uppercase transition-colors duration-300 ${isActive ? "text-ghost" : "text-mist"} group-hover:text-ghost relative z-10`}>
        {item}
      </span>
      
      {/* Active indicator */}
      <motion.span
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-slate via-ghost to-slate"
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Hover indicator */}
      <motion.span
        className="absolute bottom-0 left-0 h-[1px] bg-slate/50"
        initial={{ width: 0 }}
        animate={{ width: isHovered && !isActive ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Active glow */}
      {isActive && (
        <motion.div 
          layoutId="active-nav-glow"
          className="absolute inset-0 bg-ghost/5 rounded-lg -z-10 blur-md"
          transition={{ duration: 0.5 }}
        />
      )}
    </a>
  );
});
NavLink.displayName = 'NavLink';

// Memoized scroll to top button
const ScrollToTopButton = memo(({ lenis, scrollY }) => (
  <AnimatePresence>
    {scrollY > 500 && (
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={() => lenis?.scrollTo(0, { duration: 2 })}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-slate/30 backdrop-blur-md border border-slate/50 flex items-center justify-center text-ghost shadow-lg shadow-void/50 hover:bg-slate/50 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg 
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="group-hover:-translate-y-1 transition-transform"
        >
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </motion.button>
    )}
  </AnimatePresence>
));
ScrollToTopButton.displayName = 'ScrollToTopButton';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const lenis = useLenis();

  // Optimized scroll hiding with reduced update frequency
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setCurrentScrollY(latest);
  });

  // Optimized active section tracking with throttling
  useEffect(() => {
    let rafId = null;
    let lastCheck = 0;
    const checkInterval = 100; // Check every 100ms

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastCheck < checkInterval) return;
      lastCheck = now;

      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const sections = ["about", "work", "team", "stack"];
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 300 && rect.bottom >= 300;
          }
          return false;
        });
        setActiveSection(current || "");
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleScroll = useCallback((e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(targetId, { offset: 0, duration: 1.5 });
    }
  }, [lenis]);

  const menuItems = ["About", "Work", "Team", "Stack"];

  return (
    <>
      <motion.nav
        variants={{ 
          visible: { y: 0, opacity: 1 }, 
          hidden: { y: "-120%", opacity: 0 } 
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 md:pt-6 pointer-events-none"
      >
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative pointer-events-auto"
        >
          {/* Glass panel - Optimized backdrop blur */}
          <div className="glass-panel px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-between gap-6 md:gap-10 bg-navy/60 backdrop-blur-xl border border-slate/20 shadow-2xl shadow-void/80 w-[90vw] md:w-auto mx-auto">
            
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => handleScroll(e, 0)}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-slate/50 group-hover:border-ghost transition-colors duration-500">
                <Image 
                  src={logo} 
                  alt="AZKKAN Logo" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 32px, 40px"
                  priority
                />
              </div>
              
              <span className="text-ghost font-bold text-lg md:text-xl tracking-tighter sm:block group-hover:text-white transition-colors">
                AZKKAN
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <NavLink
                  key={item}
                  item={item}
                  isActive={activeSection === item.toLowerCase()}
                  handleScroll={handleScroll}
                  index={index}
                />
              ))}
            </div>

            {/* Mobile Controls & CTA */}
            <div className="flex items-center gap-4">
              <button 
                onClick={(e) => handleScroll(e, "#contact")}
                className="hidden md:block bg-slate/20 hover:bg-slate/40 text-ghost px-5 py-2 rounded-full text-xs font-mono border border-slate/50 transition-all hover:scale-105 active:scale-95"
              >
                Let's Talk
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-ghost p-2 rounded-full bg-slate/10 border border-slate/20 active:scale-90 transition-transform"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-[110%] left-0 w-[90vw] md:hidden bg-navy/90 backdrop-blur-2xl border border-slate/20 rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col gap-4"
              >
                {[...menuItems, "Contact"].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                    className="text-ghost text-lg font-mono uppercase border-b border-slate/10 pb-2 last:border-0 hover:text-slate transition-colors hover:pl-2"
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <ScrollToTopButton lenis={lenis} scrollY={currentScrollY} />
    </>
  );
}