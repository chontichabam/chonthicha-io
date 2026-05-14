"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [

  "Projects",
  "Softskills",
  "Experience",
  "Skills",
  "Certificates",
  "Contact",
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Projects");

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        fixed
        top-0
        left-0

        z-50

        w-full
      "
    >
      {/* NAVBAR */}
      <nav
className="
relative

flex
items-center
justify-between

px-6
lg:px-10

py-3

rounded-b-[32px]

border-b
border-white/10

bg-white/[0.38]

supports-[backdrop-filter]:bg-white/[0.22]

backdrop-blur-xl

shadow-[0_8px_30px_rgba(15,23,42,0.04)]

before:absolute
before:inset-0

before:bg-gradient-to-b
before:from-white/30
before:to-white/[0.02]

before:pointer-events-none
"
      >
        {/* LOGO */}
        <a
  href="#"
  className="
    relative
    z-10

    inline-flex
    items-center

    text-[18px]
    md:text-[19px]

    font-semibold
    tracking-[-0.04em]

    select-none
  "
>
  <span
    className="
      text-black
    "
  >
    Chonthicha
  </span>

  <span
  className="
    text-transparent
    bg-clip-text
    bg-gradient-to-r
    from-black
    via-blue-900
    to-cyan-300
  "
>
  .dev
</span>
</a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-9">
  {navItems.map((item) => {
    const isActive = active === item;

    return (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        onClick={() => setActive(item)}
        className={`
          relative
          z-10
          text-sm
          transition-all
          duration-300
          group

          ${
            isActive
              ? "text-black"
              : "text-black/45 hover:text-black"
          }
        `}
      >
        {item}

        <span
          className={`
            absolute
            left-0
            -bottom-1
            h-[1px]
            bg-black
            transition-all
            duration-300

            ${
              isActive
                ? "w-full"
                : "w-0 group-hover:w-full"
            }
          `}
        />
      </a>
    );
  })}
</div>


        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden

            flex
            items-center
            justify-center

            w-11
            h-11

            rounded-full

            bg-white/30

            backdrop-blur-2xl

            border
            border-white/20

            shadow-[0_4px_20px_rgba(15,23,42,0.06)]

            active:scale-95

            transition-all
            duration-300
          "
        >
          {open ? (
            <X
              size={18}
              className="text-slate-900"
            />
          ) : (
            <Menu
              size={18}
              className="text-slate-900"
            />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            
          >
            <div className="flex flex-col p-3">
              {navItems.map((item) => (
               <a
               key={item}
               href={`#${item.toLowerCase()}`}
               onClick={() => {
                 setActive(item);
                 setOpen(false);
               }}
               className={`
                 px-4
                 py-4
                 rounded-2xl
                 text-sm
                 transition-all
                 duration-300
             
                 ${
                   active === item
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
                   bg-white
                   text-black/60
                   border-black/5
     
                 
                 `
                 }
               `}
             >
               {item}
             </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}