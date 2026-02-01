"use client";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Linkedin, Twitter, Mail, Phone, MapPin, Send, X, Sparkles, CheckCircle, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object matching Google Form field names
      const googleFormData = new FormData();
      
      googleFormData.append('entry.705649818', formData.name);    
      googleFormData.append('entry.615338814', formData.email);   
      googleFormData.append('entry.1124725530', formData.message);

      // Submit to Google Forms
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSeguJ93FbkY0w_Vld1Asn9bolSWCmw_PkrH0-4J776JQwUmSQ/formResponse',
        {
          method: 'POST',
          body: googleFormData,
          mode: 'no-cors',
        }
      );

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Show success popup
      setShowSuccessPopup(true);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-void relative flex flex-col justify-between pt-24 md:pt-32 pb-10 px-6 md:px-24 border-t border-slate/10 overflow-hidden">
      
      {/* Success Popup */}
      <SuccessPopup 
        show={showSuccessPopup} 
        onClose={() => setShowSuccessPopup(false)}
        userName={formData.name}
      />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-navy rounded-full blur-3xl opacity-30 pointer-events-none"
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
        className="absolute bottom-1/4 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-slate rounded-full blur-3xl opacity-20 pointer-events-none"
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
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #415A77 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`contact-particle-${i}`}
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

      {/* Spotlight effect following mouse */}
      <motion.div
        className="absolute w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(120, 141, 169, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
        }}
      />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Left column - Text content */}
          <div className="space-y-8 md:space-y-12">
            <motion.div
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
                transition={{ duration: 1.2 }}
                className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-slate via-ghost to-transparent mb-6 md:mb-8 origin-left"
              />

              <motion.p 
                className="text-slate font-mono text-base md:text-lg mb-6 md:mb-8 tracking-wider"
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
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 md:mb-12">
                {["Let's", "build", "the"].map((word, i) => (
                  <motion.span
                    key={`word-${i}`}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                    className="block text-ghost relative group"
                  >
                    {word.split('').map((char, j) => (
                      <motion.span
                        key={`char-${i}-${j}`}
                        className="inline-block hover:text-slate hover:scale-110 transition-all duration-300 cursor-default"
                        whileHover={{ y: -10 }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                    <motion.div
                      className="absolute inset-0 blur-xl bg-gradient-to-r from-ghost/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                  className="block text-slate opacity-60 relative"
                >
                  {"impossible.".split('').map((char, i) => (
                    <motion.span
                      key={`impossible-${i}`}
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
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <ContactInfoCard icon={<Mail size={20} />} label="Email" value="azkkanofc@gmail.com" />
                <ContactInfoCard icon={<Phone size={20} />} label="Phone" value="+92 319 8653881" />
                <ContactInfoCard icon={<MapPin size={20} />} label="Location" value="Lahore, Pakistan" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            {/* Form container with glassmorphism */}
            <div className="relative bg-navy/30 backdrop-blur-xl border-2 border-slate/30 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden group">
              
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
              <div className="absolute top-3 md:top-4 left-3 md:left-4 w-10 md:w-12 h-10 md:h-12 border-l-2 border-t-2 border-slate/30 group-hover:border-slate/60 transition-colors" />
              <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-10 md:w-12 h-10 md:h-12 border-r-2 border-b-2 border-slate/30 group-hover:border-slate/60 transition-colors" />

              <form 
                className="space-y-6 relative z-10"
                onSubmit={handleSubmit}
              >
                <FormField 
                  label="Name" 
                  type="text" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  disabled={isSubmitting}
                />
                <FormField 
                  label="Email" 
                  type="email" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  disabled={isSubmitting}
                />
                <FormField 
                  label="Message" 
                  type="textarea" 
                  placeholder="Send us your queries..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  required
                  disabled={isSubmitting}
                />

                {/* Submit button */}
                <MagneticButton isSubmitting={isSubmitting} />
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-mist mb-6 text-base md:text-lg">Or reach out directly via email</p>
          <EmailButton />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer 
        className="relative z-10 mt-20 md:mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-slate/50 to-transparent mb-8 md:mb-12 origin-center"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-mist font-mono text-sm">
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SocialLink icon={<Instagram size={20} />} href="https://www.instagram.com/azkkanofc/" label="Instagram" />
            <SocialLink icon={<Linkedin size={20} />} href="https://www.linkedin.com/company/azkkan" label="LinkedIn" />
            <SocialLink icon={<Twitter size={20} />} href="https://x.com/kamran_1_" label="Twitter" />
            <SocialLink icon={<Mail size={20} />} href="mailto:azkkanofc@gmail.com" label="Email" />
          </motion.div>
          
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
              Developed By Zaid Salman
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-6 md:mt-8 h-[2px] bg-gradient-to-r from-transparent via-slate/30 to-transparent origin-center"
        />
      </motion.footer>
    </section>
  );
}

// ✨ SUCCESS POPUP COMPONENT ✨
function SuccessPopup({ show, onClose, userName }) {
  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-void/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Popup Container */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateX: -30 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 30 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.6 
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full bg-gradient-to-br from-navy via-[#1a2942] to-void border-2 border-slate/50 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate/20 via-transparent to-transparent"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: '200% 200%' }}
              />

              {/* Sparkle particles */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-1 h-1 bg-ghost rounded-full"
                  initial={{ 
                    x: '50%', 
                    y: '50%',
                    scale: 0,
                    opacity: 1,
                  }}
                  animate={{ 
                    x: `${Math.random() * 200 - 100}%`,
                    y: `${Math.random() * 200 - 100}%`,
                    scale: [0, 1, 0],
                    opacity: [1, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate/20 hover:bg-slate/40 text-slate hover:text-ghost transition-all z-20"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Animated checkmark icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    damping: 15, 
                    stiffness: 200,
                    delay: 0.2 
                  }}
                  className="mb-6 inline-block relative"
                >
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(120, 141, 169, 0)',
                        '0 0 60px rgba(120, 141, 169, 0.8)',
                        '0 0 0px rgba(120, 141, 169, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  
                  {/* Icon container */}
                  <motion.div 
                    className="relative bg-gradient-to-br from-slate/30 to-slate/10 p-6 rounded-full border-2 border-slate/50"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                    }}
                  >
                    <CheckCircle size={48} className="text-ghost" strokeWidth={2.5} />
                  </motion.div>

                  {/* Sparkles around icon */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`icon-sparkle-${i}`}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: Math.cos((i / 8) * Math.PI * 2) * 60,
                        y: Math.sin((i / 8) * Math.PI * 2) * 60,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.4 + i * 0.1,
                      }}
                    >
                      <Sparkles size={16} className="text-slate" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Success message */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-ghost mb-3">
                    {"Thank You!".split('').map((char, i) => (
                      <motion.span
                        key={`thanks-${i}`}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                          delay: 0.5 + i * 0.05,
                          type: "spring",
                          damping: 12,
                        }}
                        className="inline-block"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </h3>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="h-[2px] w-24 bg-gradient-to-r from-transparent via-slate to-transparent mx-auto mb-6"
                  />

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="text-mist text-base md:text-lg leading-relaxed mb-2"
                  >
                    Thanks for contacting us{userName && `, ${userName.split(' ')[0]}`}!
                  </motion.p>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-slate text-sm md:text-base"
                  >
                    Your response is valuable to us. We'll get back to you soon.
                  </motion.p>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-8 flex justify-center gap-2"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`dot-${i}`}
                      className="w-2 h-2 rounded-full bg-slate/50"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Corner frames */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-slate/40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-slate/40" />

              {/* Outer glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(120, 141, 169, 0)',
                    '0 0 80px rgba(120, 141, 169, 0.4)',
                    '0 0 0px rgba(120, 141, 169, 0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Contact info card component
function ContactInfoCard({ icon, label, value }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-slate/5 border border-slate/20 backdrop-blur-sm hover:border-slate/40 transition-all cursor-default group relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ x: 10, scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 bg-slate/10 blur-xl pointer-events-none"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="p-2 md:p-3 bg-slate/10 rounded-lg text-slate group-hover:text-ghost group-hover:bg-slate/20 transition-all relative z-10"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>

      <div className="relative z-10">
        <p className="text-xs text-slate uppercase tracking-wider mb-1">{label}</p>
        <p className="text-ghost font-medium text-sm md:text-base">{value}</p>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-ghost/10 to-transparent pointer-events-none"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
}

// Form field component
function FormField({ label, type, placeholder, value, onChange, rows, required, disabled }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <label className="block text-slate font-mono text-xs md:text-sm uppercase tracking-wider mb-3">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-void/50 border-2 border-slate/30 rounded-xl px-4 py-3 text-ghost placeholder-mist focus:outline-none focus:border-slate/60 transition-all backdrop-blur-sm resize-none font-light disabled:opacity-50 disabled:cursor-not-allowed"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-void/50 border-2 border-slate/30 rounded-xl px-4 py-3 text-ghost placeholder-mist focus:outline-none focus:border-slate/60 transition-all backdrop-blur-sm font-light disabled:opacity-50 disabled:cursor-not-allowed"
        />
      )}

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-slate to-ghost pointer-events-none"
        initial={{ width: 0 }}
        animate={{ width: isFocused ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />

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
function MagneticButton({ isSubmitting }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (isSubmitting) return;
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
      disabled={isSubmitting}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => !isSubmitting && setIsHovered(true)}
      style={{ x: springX, y: springY }}
      className="w-full bg-slate/20 hover:bg-slate/40 text-ghost px-6 md:px-8 py-3 md:py-4 rounded-full font-mono uppercase tracking-wider border-2 border-slate/50 hover:border-ghost transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate/20 disabled:hover:border-slate/50"
      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-slate/30 via-ghost/20 to-slate/30 pointer-events-none"
        animate={{
          x: isHovered && !isSubmitting ? ['-100%', '100%'] : 0,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered && !isSubmitting ? Infinity : 0,
          ease: "linear",
        }}
      />

      <span className="relative z-10 flex items-center justify-center gap-3 text-sm md:text-base">
        {isSubmitting ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              ⟳
            </motion.span>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <motion.span
              animate={{ x: isHovered ? [0, 5, 0] : 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Send size={18} />
            </motion.span>
          </>
        )}
      </span>

      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{
          boxShadow: isHovered && !isSubmitting
            ? ['0 0 0px rgba(120, 141, 169, 0)', '0 0 40px rgba(120, 141, 169, 0.6)', '0 0 0px rgba(120, 141, 169, 0)']
            : '0 0 0px rgba(120, 141, 169, 0)',
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered && !isSubmitting ? Infinity : 0,
        }}
      />
    </motion.button>
  );
}

// Email button
function EmailButton() {
  return (
    <motion.a 
      href="mailto:azkkanofc@gmail.com"
      className="inline-block group relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-slate blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
      <button className="relative bg-navy border-2 border-slate/30 text-ghost px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl lg:text-2xl font-mono flex items-center gap-3 md:gap-4 hover:bg-slate/20 hover:border-ghost transition-all overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-ghost/10 to-transparent pointer-events-none"
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

// Social link
function SocialLink({ icon, href, label }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-3 md:p-4 border border-slate/20 rounded-full hover:bg-ghost hover:text-void hover:border-ghost transition-all duration-300 group"
      whileHover={{ scale: 1.1, rotate: 360, y: -5 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {icon}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? '0 0 30px rgba(120, 141, 169, 0.5)'
            : '0 0 0px rgba(120, 141, 169, 0)',
        }}
      />
    </motion.a>
  );
}