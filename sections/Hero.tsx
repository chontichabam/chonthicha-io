"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero"
    className="
    relative
    min-h-screen
  
    flex
    items-center
    justify-center
  
    px-6
    lg:px-12
  
    overflow-hidden
  
    
  " >

<div
  className="
    absolute
    top-[-250px]
    left-1/2
    -translate-x-1/2

    w-[900px]
    h-[900px]

    rounded-full

    bg-blue-200/30

    blur-[180px]

    pointer-events-none
  "
/>
      {/* Ambient Glow */}
      <div
        className="
          absolute
          top-[-200px]
          right-[-120px]

          w-[500px]
          h-[500px]

          rounded-full

          bg-purple-300/20

          blur-[140px]

          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10

          max-w-5xl
          mx-auto
          w-full

          text-center
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="flex flex-col items-center"
        >
          

          {/* Main Title */}
          <h1
  className="
    text-6xl
    sm:text-7xl
    lg:text-[120px]

    font-semibold

    tracking-[-0.06em]

    leading-[0.92]

    text-slate-950
  "
>
            Chonthicha

            <span
  className="
    block

    pb-2

    bg-gradient-to-r
    from-slate-700
    via-slate-400
    to-slate-200

    bg-clip-text
    text-transparent

    [-webkit-text-fill-color:transparent]
  "
>
  Tadthong
</span>
          </h1>

          {/* Label */}
          <p
  className="
    inline-block

    uppercase

    tracking-[0.22em]

    text-[16px]
    md:text-[18px]

tracking-[0.18em]
font-bold

    text-transparent
    bg-clip-text

    bg-gradient-to-r
    from-black
    via-blue-900
    to-cyan-300

    mb-6
    mt-10

    drop-shadow-[0_0_12px_rgba(59,130,246,0.18)]
  "
>
  Fullstack Developer
</p>
          {/* Description */}
          <p
  className="
    max-w-2xl

    text-[17px]
    lg:text-[20px]

    text-slate-600

    leading-[1.9]

    tracking-[-0.01em]

    font-normal
  "
>
Developing scalable web applications
  <br />
  with a focus on frontend, backend,
  <br />
  and maintainable system architecture.

</p>

          {/* Buttons */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center

              gap-5

              mt-14
            "
          >
<div className="flex items-center gap-4 flex-wrap">

{/* Primary */}
<button
  onClick={() => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="
    group

    relative
    overflow-hidden

    inline-flex
    items-center
    justify-center
    gap-2

    px-8
    py-4

    rounded-full

    border
    border-white/40

    bg-gradient-to-r
    from-blue-200

    text-black/70

    text-sm
    font-medium
    tracking-[-0.01em]

    shadow-[0_8px_30px_rgba(255,255,255,0.45)]

    hover:scale-[1.03]
    hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]

    transition-all
    duration-500
  "
>
  View Projects

  <span
    className="
      relative
      z-10

      transition-transform
      duration-500

      group-hover:translate-x-1
    "
  >
    →
  </span>
</button>


{/* Secondary */}
<a
  href="#contact"
  className="
    inline-flex
    items-center
    justify-center

    px-8
    py-4

    rounded-full

    border
    border-white/20

bg-white/70


    backdrop-blur-2xl

    text-black/75

    text-sm
    font-medium
    tracking-[-0.01em]

    shadow-[0_8px_30px_rgba(15,23,42,0.04)]

    hover:bg-white/70
    hover:text-black
    hover:scale-[1.03]

    transition-all
    duration-500
  "
>
  Contact
</a>

</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}