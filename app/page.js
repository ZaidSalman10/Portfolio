import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team"; // <--- Import New Component
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative bg-void min-h-screen w-full flex flex-col overflow-x-hidden selection:bg-slate selection:text-ghost">
        
        <Navbar />

        <Hero />

        <About />
        
        <Team />

        <Projects />
        
        <TechStack />

        <Contact />
        
      </main>
    </SmoothScroll>
  );
}