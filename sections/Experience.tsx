"use client";

import Reveal from "@/components/Reveal";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        py-24
        md:py-40
        px-6
        lg:px-12
      "
    >
      {/* Background */}
      {/* <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-50/60
          via-white
          to-white
        "
      /> */}

      {/* Ambient Glow */}
      {/* <div
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-blue-200/20
          blur-[120px]
          rounded-full
        "
      /> */}

      {/* Secondary Glow */}
      {/* <div
        className="
          absolute
          bottom-0
          right-0
          w-[400px]
          h-[400px]
          bg-sky-100/30
          blur-[100px]
          rounded-full
        "
      /> */}

      
           
           

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
     Career Journey
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
      Experience
      
    </h2>

  </div>
</Reveal>





        {/* Experience List */}
        <div className="space-y-6 md:space-y-10">

          {experiences.map((item) => (
            <Reveal key={item.role}>

              <div
               className="
               group
               relative
               overflow-hidden
               rounded-[28px]
               md:rounded-[40px]
               border
               border-white/50
               bg-gradient-to-b
               from-white/80
               to-white/50
               backdrop-blur-3xl
               p-5
               md:px-10
               md:py-9
               transition-all
               duration-700
               hover:border-white/80
               shadow-[0_4px_30px_rgba(0,0,0,0.03)]
               hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
             "
              >

                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-56
                    h-56
                    bg-blue-200/20
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-700
                  "
                />

                {/* Border Highlight */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[28px]
                    md:rounded-[32px]
                    ring-1
                    ring-white/20
                    pointer-events-none
                  "
                />

                <div className="relative z-10">

                  {/* Top */}
<div>

{/* Period */}
<div
className="
text-[10px]
md:text-[12px]
uppercase
tracking-[0.28em]
text-black/30
text-right
"
>
  {item.period}
</div>

{/* Role */}
<h3
className="
mt-3
text-2xl
md:text-[40px]
font-semibold
tracking-[-0.04em]
text-black/90
leading-[1]
"
>
  {item.role}
</h3>

{/* Company */}
<p
className="
mt-4
text-sm
md:text-base
leading-relaxed
text-black/45
"
>
  {item.company}
</p>

</div>

                 
              

                  {/* Divider */}
                  <div
   className="
   mt-6
   md:mt-8
   h-px
   bg-gradient-to-r
   from-black/10
   via-black/5
   to-transparent
 "
                  />

                  {/* Descriptions */}
                  <div className="mt-4 md:mt-4 space-y-3 md:space-y-5">

                    {item.descriptions.map((desc) => (
                      <p
                        key={desc}
                        className="
                          text-[13px]
                          md:text-xs
                          leading-relaxed
                          text-black/50
                          max-w-full md:max-w-4xl
                        "
                      >
                        {desc}
                      </p>
                    ))}

                  </div>

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}