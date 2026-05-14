"use client";

import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-24
        px-6
        lg:px-12
      "
    >

      {/* Background Base */}
      {/* <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white/90
          via-[#f8f8fc]/70
          to-[#eef2ff]/40
        "
      /> */}

      {/* Blue Glow */}
      {/* <div
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-blue-300/20
          blur-[120px]
          rounded-full
        "
      /> */}

      {/* Purple Glow */}
      {/* <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-fuchsia-300/20
          blur-[120px]
          rounded-full
        "
      /> */}

      {/* Noise Texture */}
      <div
        className="
          absolute
          bottom-0
          inset-0
          opacity-[0.03]
          mix-blend-overlay
          pointer-events-none
        "
        style={{

          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        <Reveal>
          <div className="mb-10 md:mb-16">

            <p
              className="
                uppercase
                tracking-[0.3em]
                text-black/40
                mb-4
                text-xs
              "
            >
              Selected Work
            </p>

            <h2
              className="
                text-5xl
                lg:text-7xl
                font-black
                tracking-tight
                leading-none
              "
            >
              Featured
              <span
                className="
                  block
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-black
                  via-black/70
                  to-black/20
                "
              >
                Projects
              </span>
            </h2>

          </div>
        </Reveal>

        {/* Grid */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-3
          "
        >
          {projects.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}