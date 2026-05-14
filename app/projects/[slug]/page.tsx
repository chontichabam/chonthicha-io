import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetail({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-black/40 text-sm">
          Project not found.
        </p>
      </main>
    );
  }

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        py-24
        lg:px-10
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[800px]
          rounded-full
          bg-blue-300/10
          blur-[140px]
          pointer-events-none
        "
      />

      {/* Noise */}
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

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2

            mb-12

            text-[13px]
            tracking-wide
            text-black/40

            hover:text-black
            transition-all
            duration-300
          "
        >
          ← Back to Projects
        </Link>

        {/* Top */}
        <div className="mb-14">

          <p
            className="
              uppercase
              tracking-[0.28em]
              text-[11px]
              text-black/35
              mb-5
            "
          >
            Project Case Study
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              tracking-tight
              leading-none
              text-black/95
            "
          >
            {project.title}
          </h1>

          <p
            className="
              mt-8
              max-w-3xl
              text-[16px]
              md:text-[18px]
              leading-[1.9]
              text-black/55
            "
            dangerouslySetInnerHTML={{
              __html: project.description,
            }}
          />

        </div>

        {/* Images */}
        <div className="space-y-8">

          {project.images.map((img, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]

                border
                border-white/30

                bg-white/60
                backdrop-blur-2xl

                shadow-[0_10px_40px_rgba(0,0,0,0.05)]

                transition-all
                duration-700
              "
            >
              <Image
                src={img}
                alt={project.title}
                width={1600}
                height={1000}
                priority={index === 0}
                className="
                  w-full
                  h-auto
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-[1.01]
                "
              />
            </div>
          ))}

        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mt-14">

          {project.tech.map((item) => (
            <span
              key={item}
              className="
                px-4
                py-2

                rounded-full

                border
                border-black/5

                bg-white/70
                backdrop-blur-xl

                text-[13px]
                text-black/65

                shadow-[0_4px_20px_rgba(255,255,255,0.6)]
              "
            >
              {item}
            </span>
          ))}

        </div>

      </div>
    </main>
  );
}