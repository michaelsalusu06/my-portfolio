import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
  const { experience, experienceSection, experienceBanner } = portfolioData;

  return (
    <section
      id="experience"
      className="relative bg-[#f3f3f3] border-t border-zinc-200 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto pl-0 lg:pl-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-14 sm:mb-20">
          {/* Left Column: Eyebrow + Heading */}
          <div>
            <div className="flex items-center gap-2 text-sm text-zinc-900 font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-zinc-900 inline-block" />
              <span>{experienceSection?.eyebrow || "Experiences"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-900 leading-[1.15]">
              {experienceSection?.headingLine1 || "Organizational"}
              <br />
              {experienceSection?.headingLine2 || "Experiences"}
            </h2>
          </div>

          {/* Right Column: Paragraph + Contact Me CTA */}
          <div className="flex flex-col justify-between items-start pt-1 md:pt-2">
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal max-w-lg">
              {experienceSection?.description ||
                "Over the past year, I've built full-stack software applications, solved complex algorithmic challenges, and managed digital operations for university tech initiatives."}
            </p>
            <div className="mt-5 sm:mt-6">
              <a
                href={experienceSection?.ctaLink || "#contact"}
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-zinc-900 hover:text-black group border-b border-zinc-900 pb-0.5 transition-all"
              >
                <span>{experienceSection?.ctaText || "Contact Me"}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Experience Rows */}
        <div className="border-t border-zinc-200/90 divide-y divide-zinc-200/90 border-b border-zinc-200/90">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center"
            >
              {/* Left: Organization / Company & Location + Period */}
              <div className="md:col-span-5 lg:col-span-4">
                <h3 className="text-base sm:text-lg font-medium text-zinc-900 tracking-tight">
                  {item.company}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1 flex items-center gap-1.5 font-normal">
                  <span className="text-zinc-400">•</span>
                  <span>{item.period}</span>
                </p>
              </div>

              {/* Center: Role & Summary */}
              <div className="md:col-span-4 lg:col-span-5">
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal max-w-md">
                  {item.summary}
                </p>
              </div>

              {/* Right: Pill Tags */}
              <div className="md:col-span-3 lg:col-span-3 flex md:justify-end items-center gap-2 flex-wrap pt-2 md:pt-0">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-1.5 text-xs text-zinc-700 bg-zinc-200/75 hover:bg-black hover:text-white transition-all duration-200 font-normal whitespace-nowrap cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Promo / Consultation CTA Banner */}
        <div className="mt-8 sm:mt-12 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-xl">
          {/* Background Image with Dark Vignette Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-luminosity scale-105 transition-transform duration-700 hover:scale-100"
            style={{ backgroundImage: "url('/banner-bg.jpg')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70"
            aria-hidden="true"
          />

          {/* Centered Compact Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-8 sm:py-10 md:py-12 max-w-2xl mx-auto">
            {/* Tagline / Eyebrow */}
            <span className="text-xs sm:text-sm text-zinc-400 font-normal tracking-wide mb-2">
              {experienceBanner?.eyebrow || "(Let's Connect)"}
            </span>

            {/* Headline */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-white leading-snug mb-2.5 max-w-xl">
              {experienceBanner?.heading || "Explore My Organizational Experience Further"}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed mb-5 font-normal">
              {experienceBanner?.description ||
                "Dive into my full extracurricular timeline, from managing digital operations for HIMTI's flagship tech events to competitive programming training with Jollybee."}
            </p>

            {/* CTA Button / Link (Opens in new tab) */}
            <a
              href={experienceBanner?.ctaLink || "https://www.linkedin.com/in/michael-joseph-salusu-574935321/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white hover:text-zinc-300 group border-b border-white pb-0.5 transition-all"
            >
              <span>{experienceBanner?.ctaText || "View LinkedIn Profile"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
