"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const contacts = [
  {
    title: "Phone",
    value: "+66 98 497 5732",
    href: "tel:+66984975732",
  },
  {
    title: "Email",
    value: "chonticha.chta@gmail.com",
    href: "mailto:chonticha.chta@gmail.com",
  },
  {
    title: "LINE",
    value: "@chonthicha",
    href: "https://line.me/ti/p/MIZdFGwF2x",
    external: true,
  },


];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
relative
  overflow-hidden
  py-24
  md:py-32
  px-6
  lg:px-12
  pb-30
  md:pb-30

      "
    >
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <Reveal>
          <div className="mb-10 md:mb-12">

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
              get in touch
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
           Contact
            
          </h2>

            <p
              className="
            mt-6
    max-w-md
    md:max-w-lg
    lg:max-w-xl
    text-[12px]
    md:text-[15px]
    leading-[1.85]
    text-black/40
    font-normal
  
              "
            >
              Building modern web experiences with clean design and thoughtful development.
            </p>

          </div>
        </Reveal>

        {/* CONTACT LIST */}
        <div className="border-t border-black/5">

          {contacts.map((item, index) => (
            <Reveal key={item.title}>

              <motion.a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                whileHover={{ x: 4 }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  py-4
                  md:py-5
                  border-b
                  border-black/5
                "
              >

                {/* LEFT */}
                <div>

                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.28em]
                      text-black/25
                      mb-2
                    "
                  >
                    {item.title}
                  </p>

                  <h3
                    className="
                      text-[15px]
                      md:text-[28px]
                      font-medium
                      tracking-[-0.04em]
                      text-black/90
                      leading-none
                      break-all
                    "
                  >
                    {item.value}
                  </h3>

                </div>

                {/* ARROW */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    rounded-full
                    text-black/30
                    group-hover:text-black/80
                    transition-all
                    duration-500
                    shrink-0
                  "
                >
                  <span className="text-sm">↗</span>
                </div>

                {/* GLOW */}
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
                      right-0
                      top-1/2
                      -translate-y-1/2
                      w-40
                      h-40
                      rounded-full
                      bg-blue-300/10
                      blur-3xl
                    "
                  />
                </div>

                {/* INDEX */}
                <div
                  className="
                    absolute
                    left-0
                    top-3
                    text-[8px]
                    tracking-[0.2em]
                    text-black/12
                  "
                >
                  0{index + 1}
                </div>

              </motion.a>

            </Reveal>
          ))}

        </div>

        {/* FOOTER */}
        <Reveal>
          <div
            className="
              mt-14
              flex
              flex-col
              md:flex-row
              items-start
              md:items-center
              justify-between
              gap-4
            "
          >

            <p
              className="
                    group
                inline-flex
                items-center
                gap-2
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-black/50
                hover:text-black
                transition-all
                duration-500
              "
            >
              Chonthicha Tadthong
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-black/50
                hover:text-black
                transition-all
                duration-500
              "
            >
              Back to Top
              <span className="transition-transform duration-500 group-hover:-translate-y-1">
                ↑
              </span>
            </button>

          </div>
        </Reveal>

      </div>
    </section>
  );
}