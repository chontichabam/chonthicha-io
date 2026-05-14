"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  slug: string;
  images: string[];
};

export default function ProjectCard({
  title,
  slug,
    images,
}: Props) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <motion.div
        whileHover={{
          y: -5,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[24px]
          border
          border-white/20
          bg-gradient-to-b
          from-white/80
          to-white/40
          backdrop-blur-2xl
          px-6 
          py-3
          transition-all
          duration-500
          hover:border-white/40
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        "
      >
        {/* Ambient Background */}
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
          {/* Blue Glow */}
          <div
            className="
              absolute
              top-0
              right-0
              w-56
              h-56
              bg-blue-400/20
              blur-3xl
            "
          />

          {/* Purple Glow */}
          <div
            className="
              absolute
              bottom-0
              left-0
              w-56
              h-56
              bg-fuchsia-400/20
              blur-3xl
            "
          />

          {/* Cyan Glow */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-30
              h-30
              bg-cyan-300/10
              blur-2xl
            "
          />
        </div>

        {/* Noise Overlay */}
        <div
          className="
            absolute
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

        <div className="relative z-10">

          {/* Title */}
          <h3
            className="
              text-sm
              md:text-base
              font-semibold
              tracking-tight
              text-black/90
              leading-snug
              max-w-[90%]
            "
          >
            {title}
          </h3>

          {/* Bottom */}
          <div className="mt-3 flex items-center justify-between">

            <span
              className="
                text-[11px]
                tracking-wide
                text-black/45
                transition
                duration-300
                group-hover:text-black/70
              "
            >
              View Project
            </span>

            <motion.div
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight
                className="
                  w-4
                  h-4
                  text-black/30
                  transition
                  duration-300
                  group-hover:text-black/70
                "
              />
            </motion.div>

          </div>

        </div>
      </motion.div>
    </Link>
  );
}