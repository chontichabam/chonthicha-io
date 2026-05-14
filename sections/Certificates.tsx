"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = window.innerWidth * 0.75;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certificates"
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
          bg-gradient-to-b
          from-[#f8fbff]
          via-white
          to-[#f3f7ff]
        "
      /> */}

      {/* Top Glow */}
      {/* <div
        className="
          absolute
          top-[-200px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-blue-300/20
          blur-[140px]
          rounded-full
        "
      /> */}

      {/* Bottom Glow */}
      {/* <div
        className="
          absolute
          bottom-[-250px]
          right-[-100px]
          w-[500px]
          h-[500px]
          bg-fuchsia-300/20
          blur-[120px]
          rounded-full
        "
      /> */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
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
              Achievements & Learning
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
              Certificates
            </h2>
          </div>
        </Reveal>

        {/* Slider Wrapper */}
        <div className="relative">
          {/* Desktop Arrows */}
          <div
            className="
              hidden
              md:flex
              items-center
              justify-between
              absolute
              top-1/2
              -translate-y-1/2
              left-[-28px]
              right-[-28px]
              z-30
              pointer-events-none
            "
          >
            {/* Left */}
            <button
              onClick={() => scroll("left")}
              className="
                pointer-events-auto
                group
                flex
                items-center
                justify-center
                w-14
                h-14
                rounded-full
                border
                border-white/40
                bg-[#93d7ff]/60
                backdrop-blur-2xl
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:scale-110
                hover:bg-white
                transition-all
                duration-300
              "
            >
              <ChevronLeft
                className="
                  w-5
                  h-5
                  text-black/70
                  group-hover:text-black
                "
              />
            </button>

            {/* Right */}
            <button
              onClick={() => scroll("right")}
              className="
                pointer-events-auto
                group
                flex
                items-center
                justify-center
                w-14
                h-14
                rounded-full
                border
                border-white/40
                bg-[#93d7ff]/60
                backdrop-blur-2xl
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:scale-110
                hover:bg-white
                transition-all
                duration-300
              "
            >
              <ChevronRight
                className="
                  w-5
                  h-5
                  text-black/70
                  group-hover:text-black
                "
              />
            </button>
          </div>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="
              flex
              gap-5
              overflow-x-auto
              overflow-y-hidden
              pb-4

              scrollbar-hide
              scroll-smooth

              snap-x
              snap-proximity

              [scrollbar-width:none]
              [-ms-overflow-style:none]
            "
          >
            {certificates.map((item) => (
  <motion.div
    key={item.title}
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  className="
                    group
                    relative
                    flex-shrink-0
                    w-[300px]
                    md:w-[430px]

                    overflow-hidden
                    rounded-[36px]

                    border
                    border-white/50

                    bg-white/60
                    backdrop-blur-3xl

                    p-4

                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.10)]

                    transition-all
                    duration-700

                    snap-start
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
                    "
                  >
                    <div
                      className="
                        absolute
                        -top-16
                        -right-16
                        w-56
                        h-56
                        rounded-full
                        blur-3xl
                        bg-blue-300/25
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-[-60px]
                        left-[-40px]
                        w-44
                        h-44
                        rounded-full
                        blur-3xl
                        bg-fuchsia-300/20
                      "
                    />
                  </div>

                  {/* Border Shine */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[36px]
                      ring-1
                      ring-white/20
                      pointer-events-none
                    "
                  />

                  <div className="relative z-10">
                    {/* Image */}
                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[28px]
                        aspect-[16/10]
                         w-full
                         h-auto
                        
                      "
                    >
                      <Image
  src={item.image}
  alt={item.title}
  width={1200}
  height={800}
  className="
    w-full
    h-auto

  

  "
/>
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                      <p
                        className="
                          text-[11px]
                          uppercase
                          tracking-[0.24em]
                          text-black/35
                        "
                      >
                        {item.year}
                      </p>

                      <h3
                        className="
                          mt-3
                          text-[15px]
                          md:text-[20px]
                          font-semibold
                          tracking-tight
                          text-black/90
                          leading-snug
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-[14px]
                          md:text-[15px]
                          text-black/50
                        "
                      >
                        {item.issuer}
                      </p>
                    </div>
                  </div>
                </motion.div>
       
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}