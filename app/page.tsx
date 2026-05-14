import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Navbar from "@/components/Navbar";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Certificates from "@/sections/Certificates";
import Contact from "@/sections/Contact";
import SoftSkills from "@/sections/Softskills";

export default function Home() {
  return (
    <main className="relative overflow-hidden">  
    {/* GLOBAL BACKGROUND */}

    {/* Base Gradient */}
    <div
      className="
        fixed
        inset-0
        -z-50
        bg-gradient-to-b
        from-white
        via-[#f8fbff]
        to-[#eef5ff]
      "
    />

    {/* Blue Glow */}
    <div
      className="
        fixed
        top-[-200px]
        left-[-200px]
        -z-40
        w-[800px]
        h-[800px]
        bg-blue-300/20
        blur-[140px]
        rounded-full
      "
    />

    {/* Purple Glow */}
    <div
      className="
        fixed
        bottom-[-250px]
        right-[-200px]
        -z-40
        w-[800px]
        h-[800px]
        bg-fuchsia-100/20
        blur-[140px]
        rounded-full
      "
    />

    {/* White Ambient */}
    <div
      className="
        fixed
        top-1/3
        left-1/2
        -translate-x-1/2
        -z-40
        w-[500px]
        h-[500px]
        bg-white/40
        blur-[120px]
        rounded-full
      "
    />
      <Navbar/>
      <Hero />
      <SoftSkills />
      <Projects />
      <Experience />
      <Skills />
      <Certificates/>
      <Contact />
    </main>
  );
}