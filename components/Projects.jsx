"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// Placeholder data - Replace with your real projects later
const projects = [
  {
    title: "Orbital Dashboard",
    description: "A high-performance analytics platform for space data visualization.",
    tags: ["React", "D3.js", "WebGL"],
    color: "#1B263B", // Navy
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Neon Commerce",
    description: "Headless e-commerce solution with extreme micro-interactions.",
    tags: ["Next.js", "Shopify", "Tailwind"],
    color: "#415A77", // Slate
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Cyber Portfolio",
    description: "The award-winning website you are looking at right now.",
    tags: ["Next.js", "Framer Motion", "Lenis"],
    color: "#0D1B2A", // Void
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="work" className="bg-void py-32 px-6 md:px-24">
      <div className="mb-24">
        <h2 className="text-ghost text-5xl md:text-7xl font-bold mb-6">Selected Works</h2>
        <p className="text-mist text-lg">
          A collection of projects where engineering meets art. 
          Performance, accessibility, and aesthetics in perfect harmony.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <Card key={index} i={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function Card({ title, description, tags, image, i }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div 
      ref={container}
      style={{ scale, opacity }}
      className="sticky top-24 z-0" // The sticky magic
    >
      <div className="bg-navy border border-slate/20 rounded-3xl overflow-hidden min-h-[500px] md:h-[600px] grid md:grid-cols-2 relative group shadow-2xl">
        
        {/* Text Side */}
        <div className="p-10 md:p-16 flex flex-col justify-between order-2 md:order-1">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-ghost mb-6 leading-tight">{title}</h3>
            <p className="text-mist text-lg mb-8">{description}</p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border border-slate/30 text-slate text-sm font-mono uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <button className="mt-10 flex items-center gap-2 text-ghost group-hover:text-slate transition-colors text-lg">
            View Case Study <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Image Side */}
        <div className="relative h-full w-full order-1 md:order-2 overflow-hidden bg-black">
           <Image 
             src={image} 
             alt={title} 
             fill 
             className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" 
           />
        </div>
      </div>
    </motion.div>
  );
}