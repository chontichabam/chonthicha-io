"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import Reveal from "@/components/Reveal";


export default function Skills() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? skills
      : skills.filter((s) => s.type === filter);

  return (
    <section
     id="skills"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
        px-6
        lg:px-12
      "
    >

      {/* Background */}
      {/* <div
        className="
         absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-700
        "
      /> */}

      {/* Glow */}
      {/* <div
        className="
    absolute
              top-0
              right-0
              w-56
              h-56
              bg-blue-400/20
              blur-3xl
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

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16">

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[10px]
              md:text-xs
              text-black/40
              mb-5
            "
          >
            Technologies & Expertise
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-black
              tracking-tight
              leading-none
            "
          >
           Skills
            
          </h2>

        </div>

        {/* Filter */}
        <div className="flex gap-3 mb-10 flex-wrap">

  {["all", "frontend", "backend"].map((f) => (
    <button
      key={f}
      onClick={() => setFilter(f)}
      className={`
        px-5
        py-2

        rounded-full

        text-xs
        font-medium
        tracking-wide

        transition-all
        duration-300

        border
        backdrop-blur-xl

        ${
          filter === f
            ? `
              bg-gradient-to-r
              from-blue-200
              via-blue-100
              to-cyan-50

              text-black/60
              border-transparent

              shadow-[0_8px_30px_rgba(59,130,246,0.18)]

              hover:shadow-[0_12px_40px_rgba(59,130,246,0.28)]
            `
            : `
              bg-white/70
              text-black/60
              border-black/5

              hover:bg-white
              hover:text-black
            `
        }
      `}
    >
      {f}
    </button>
  ))}

</div>

        {/* Skills Grid */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            gap-4
          "
        >

{filtered.map((skill) => {
  const Icon = skill.icon;

  return (
    <Reveal key={skill.name}>

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/40
          bg-white/60
          backdrop-blur-2xl
          px-4
          py-2
          shadow-[0_8px_30px_rgba(0,0,0,0.04)]
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
          transition-all
          duration-500
        "
      >

        {/* Glow Spotlight */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-700
          "
        >
          <div
            className="
              absolute
              -top-10
              -right-10
              w-40
              h-40
              rounded-full
              blur-3xl
            "
            style={{
              backgroundColor: skill.color,
              opacity: 0.25,
            }}
          />
        </div>

        {/* Border Shine */}
        <div
          className="
            absolute
            inset-0
            rounded-[28px]
            ring-1
            ring-white/20
            pointer-events-none
          "
        />

        <div className="relative z-10">

          <div className="flex items-center justify-between">

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >
              <Icon
                style={{ color: skill.color }}
                className="
                  text-[28px]
                  drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]
                "
              />
            </motion.div>

            <span
              className="
                text-[14px]
                font-semibold
                tracking-tight
                text-black/80
              "
            >
              {skill.name}
            </span>

          </div>

        </div>

      </motion.div>

    </Reveal>
  );
})}
            

        </div>

      </div>
    </section>
  );
}