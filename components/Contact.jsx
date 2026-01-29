"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-void relative flex flex-col justify-between pt-32 pb-10 px-6 md:px-24 border-t border-slate/10 overflow-hidden">
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-navy rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-slate rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 100, 0],
          y: [0, -100, 0],
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
      {[...Array(30)].map((_, i) => (
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

      {/* Spotlight effect following mouse */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(120, 141, 169, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
        }}
      />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left column - Text content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            >
              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="h-[2px] w-24 bg-gradient-to-r from-slate via-ghost to-transparent mb-8 origin-left"
              />

              <motion.p 
                className="text-slate font-mono text-lg mb-8 tracking-wider"
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
                // WHAT'S NEXT?
              </motion.p>
              
              <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-12">
                {["Let's", "build", "the"].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                    className="block text-ghost relative group"
                  >
                    {word.split('').map((char, j) => (
                      <motion.span
                        key={j}
                        className="inline-block hover:text-slate hover:scale-110 transition-all duration-300 cursor-default"
                        whileHover={{ y: -10 }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                    <motion.div
                      className="absolute inset-0 blur-xl bg-gradient-to-r from-ghost/20 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                  className="block text-slate opacity-60 relative"
                >
                  {"impossible.".split('').map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block hover:text-ghost hover:scale-110 transition-all duration-300 cursor-default"
                      whileHover={{ y: -10 }}
                      animate={{
                        textShadow: [
                          '0 0 0px rgba(120, 141, 169, 0)',
                          '0 0 30px rgba(120, 141, 169, 0.6)',
                          '0 0 0px rgba(120, 141, 169, 0)',
                        ],
                      }}
                      transition={{
                        textShadow: {
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </h2>

              {/* Contact info cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <ContactInfoCard icon={<Mail size={20} />} label="Email" value="hello@azkkan.com" />
                <ContactInfoCard icon={<Phone size={20} />} label="Phone" value="+92 XXX XXXXXXX" />
                <ContactInfoCard icon={<MapPin size={20} />} label="Location" value="Lahore, Pakistan" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            {/* Form container with glassmorphism */}
            <div className="relative bg-navy/30 backdrop-blur-xl border-2 border-slate/30 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group">
              
              {/* Animated background */}
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

              {/* Corner frames */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-slate/30 group-hover:border-slate/60 transition-colors" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-slate/30 group-hover:border-slate/60 transition-colors" />

              <form className="space-y-6 relative z-10">
                <FormField 
                  label="Name" 
                  type="text" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <FormField 
                  label="Email" 
                  type="email" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <FormField 
                  label="Message" 
                  type="textarea" 
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                />

                {/* Submit button with magnetic effect */}
                <MagneticButton />
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="text-mist mb-6 text-lg">Or reach out directly via email</p>
          <EmailButton />
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.footer 
        className="relative z-10 mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Top decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-slate/50 to-transparent mb-12 origin-center"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-mist font-mono text-sm">
          
          {/* Social links */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SocialLink icon={<Github size={20} />} href="#" label="Github" />
            <SocialLink icon={<Linkedin size={20} />} href="#" label="LinkedIn" />
            <SocialLink icon={<Twitter size={20} />} href="#" label="Twitter" />
            <SocialLink icon={<Mail size={20} />} href="#" label="Email" />
          </motion.div>
          
          {/* Copyright info */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-ghost mb-2 font-bold tracking-wider"
              animate={{
                textShadow: [
                  '0 0 0px rgba(231, 245, 255, 0)',
                  '0 0 20px rgba(231, 245, 255, 0.3)',
                  '0 0 0px rgba(231, 245, 255, 0)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              © 2026 AZKKAN
            </motion.p>
            <p className="text-slate text-xs uppercase tracking-widest">
              Crafted with Next.js & Tailwind
            </p>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-slate/30 to-transparent origin-center"
        />
      </motion.footer>
    </section>
  );
}

// Contact info card component
function ContactInfoCard({ icon, label, value }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center gap-4 p-4 rounded-xl bg-slate/5 border border-slate/20 backdrop-blur-sm hover:border-slate/40 transition-all cursor-default group relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ x: 10, scale: 1.02 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 bg-slate/10 blur-xl"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon */}
      <motion.div
        className="p-3 bg-slate/10 rounded-lg text-slate group-hover:text-ghost group-hover:bg-slate/20 transition-all relative z-10"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>

      {/* Text */}
      <div className="relative z-10">
        <p className="text-xs text-slate uppercase tracking-wider mb-1">{label}</p>
        <p className="text-ghost font-medium">{value}</p>
      </div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-ghost/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
}

// Form field component with animations
function FormField({ label, type, placeholder, value, onChange, rows }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <label className="block text-slate font-mono text-sm uppercase tracking-wider mb-3">
        {label}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-void/50 border-2 border-slate/30 rounded-xl px-4 py-3 text-ghost placeholder-mist focus:outline-none focus:border-slate/60 transition-all backdrop-blur-sm resize-none font-light"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-void/50 border-2 border-slate/30 rounded-xl px-4 py-3 text-ghost placeholder-mist focus:outline-none focus:border-slate/60 transition-all backdrop-blur-sm font-light"
        />
      )}

      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-slate to-ghost"
        initial={{ width: 0 }}
        animate={{ width: isFocused ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Focus glow */}
      <motion.div
        className="absolute inset-0 rounded-xl blur-xl pointer-events-none"
        animate={{
          boxShadow: isFocused 
            ? '0 0 30px rgba(120, 141, 169, 0.3)'
            : '0 0 0px rgba(120, 141, 169, 0)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Magnetic submit button
function MagneticButton() {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.button
      type="submit"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      style={{ x: springX, y: springY }}
      className="w-full bg-slate/20 hover:bg-slate/40 text-ghost px-8 py-4 rounded-full font-mono uppercase tracking-wider border-2 border-slate/50 hover:border-ghost transition-all relative overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-slate/30 via-ghost/20 to-slate/30"
        animate={{
          x: isHovered ? ['-100%', '100%'] : 0,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "linear",
        }}
      />

      {/* Text */}
      <span className="relative z-10 flex items-center justify-center gap-3">
        Send Message
        <motion.span
          animate={{ x: isHovered ? [0, 5, 0] : 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Send size={18} />
        </motion.span>
      </span>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isHovered 
            ? ['0 0 0px rgba(120, 141, 169, 0)', '0 0 40px rgba(120, 141, 169, 0.6)', '0 0 0px rgba(120, 141, 169, 0)']
            : '0 0 0px rgba(120, 141, 169, 0)',
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
        }}
      />
    </motion.button>
  );
}

// Email button component
function EmailButton() {
  return (
    <motion.a 
      href="mailto:hello@azkkan.com"
      className="inline-block group relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-slate blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
      <button className="relative bg-navy border-2 border-slate/30 text-ghost px-12 py-6 rounded-full text-xl md:text-2xl font-mono flex items-center gap-4 hover:bg-slate/20 hover:border-ghost transition-all overflow-hidden">
        
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-ghost/10 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8 }}
        />

        <span className="relative z-10">Start a Project</span>
        <motion.span
          className="relative z-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <ArrowUpRight />
        </motion.span>
      </button>
    </motion.a>
  );
}

// Social link component
function SocialLink({ icon, href, label }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a 
      href={href}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-4 border border-slate/20 rounded-full hover:bg-ghost hover:text-void hover:border-ghost transition-all duration-300 group"
      whileHover={{ scale: 1.1, rotate: 360, y: -5 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {icon}
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        animate={{
          boxShadow: isHovered 
            ? '0 0 30px rgba(120, 141, 169, 0.5)'
            : '0 0 0px rgba(120, 141, 169, 0)',
        }}
      />
    </motion.a>
  );
}