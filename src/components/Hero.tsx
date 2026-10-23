import { portfolioData } from "@/data/portfolio";
import HelloRotator from "@/components/HelloRotator";
import HeroArt from "@/components/HeroArt";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { personal, heroStats } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#f3f3f3] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Unified Responsive Container for Rail, Content, and Bear */}
      <div className="max-w-[1440px] 2xl:max-w-[1680px] w-full mx-auto flex-1 flex flex-col lg:flex-row items-stretch justify-between relative pl-0 lg:pl-12">
        <HeroArt />

        {/* Left Rail: role, thin line, year (all reading bottom-to-top) */}
        <div className="hidden lg:flex absolute left-0 top-6 bottom-6 flex-col items-center gap-4 text-[13px] 2xl:text-sm font-normal text-zinc-400 select-none z-10">
          <span className="vertical-lr tracking-wide">
            {personal.railRole || "Software Engineer"}
          </span>
          <div className="flex-1 w-px bg-zinc-300" aria-hidden="true" />
          <span className="vertical-lr tracking-wide">
            {personal.railYear || "2026"}
          </span>
        </div>

        {/* Left Column: Stats + Big "Hello" + Tagline + Scroll */}
        <div className="flex-1 flex flex-col justify-between z-10 pt-6 sm:pt-8 lg:pt-6 pb-4 sm:pb-6 lg:pb-6 md:max-w-[55%] lg:max-w-[56%] xl:max-w-2xl 2xl:max-w-3xl">
          {/* Top Left Stats (e.g. 20 Certificates, 9 Technologies) */}
          <div className="flex items-start gap-8 sm:gap-12 md:gap-14 lg:gap-16 mb-8 sm:mb-10 lg:mb-12">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-light tracking-tight text-zinc-900">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm 2xl:text-base font-normal text-zinc-500 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Center Left: Massive "Hello" Heading (cycles through languages) */}
          <div className="my-auto py-4 sm:py-6 lg:py-8">
            <HelloRotator />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-normal text-zinc-700 tracking-tight flex items-center gap-2">
              <span>{personal.taglineHero || "— It's Michael, a CS Student & Software Engineer"}</span>
            </p>

            {/* Mobile-only Chill Bear illustration */}
            <div className="md:hidden flex justify-center py-4 my-2">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 aspect-square select-none pointer-events-none">
                <Image
                  src="/chill-bear.png"
                  alt="Chill Bear Doodle"
                  fill
                  priority
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom Left: Scroll down indicator */}
          <div className="pt-2 sm:pt-4">
            <a
              href="#about-me"
              className="inline-flex items-center gap-2 text-xs sm:text-sm 2xl:text-base font-normal text-zinc-600 hover:text-black transition-colors group"
            >
              <span>Scroll down</span>
              <ArrowDown className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-zinc-500 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
