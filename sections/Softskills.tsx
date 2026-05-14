"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { softSkills } from "@/data/softskills";

export default function SoftSkills() {
  return (
    <section
      id="softskills"
      className="
        relative
        overflow-hidden
        py-24
        md:py-40
        px-6
        lg:px-12
      "
    >
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <Reveal>
          <div className="mb-10 md:mb-16">

            <h2
              className="
                text-5xl
                lg:text-7xl
                font-black
                tracking-tight
                leading-none
              "
            >
              Soft
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
                Skills
              </span>
            </h2>

          </div>
        </Reveal>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          "
        >

          {softSkills.map((skill) => (
            <Reveal key={skill.title}>

              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[24px]

                  border
                  border-white/40

                  bg-white/60
                  backdrop-blur-2xl

                  p-4

                  shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                  hover:shadow-[0_20px_60px_rgba(59,130,246,0.10)]

                  transition-all
                  duration-500
                "
              >

                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-700
                    pointer-events-none
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
                      bg-blue-300/20
                      blur-3xl
                    "
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">

                  <h3
                    className="
                      text-[16px]
                      md:text-[22px]
                      font-semibold
                      tracking-[-0.04em]
                      text-black/60
                      leading-snug
                    "
                  >
                    {skill.title}
                  </h3>

                </div>

              </motion.div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}