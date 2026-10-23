import { portfolioData } from "@/data/portfolio";
import HelloRotator from "@/components/HelloRotator";
import HeroArt from "@/components/HeroArt";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const { personal, heroStats } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#f3f3f3] flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <HeroArt />

      {/* Left Rail: role, thin line, year (all reading bottom-to-top) */}
      <div className="hidden lg:flex absolute left-8 sm:left-12 top-32 bottom-12 flex-col items-center gap-4 text-[13px] font-normal text-zinc-400 select-none z-10">
        <span className="vertical-lr tracking-wide">
          {personal.railRole || "Software Engineer"}
        </span>
        <div className="flex-1 w-px bg-zinc-300" aria-hidden="true" />
        <span className="vertical-lr tracking-wide">
          {personal.railYear || "2026"}
        </span>
      </div>

      {/* Main Content Grid: Left Content + Right Portrait */}
      <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col lg:flex-row items-stretch lg:items-end justify-between relative pl-0 lg:pl-12">
        {/* Left Column: Stats + Big "Hello" + Tagline + Scroll */}
        <div className="flex-1 flex flex-col justify-between z-10 pt-8 sm:pt-12 lg:pt-16 pb-8 lg:pb-12 max-w-2xl">
          {/* Top Left Stats (e.g. +200 Project completed, +50 Startup raised) */}
          <div className="flex items-start gap-12 sm:gap-16 mb-12 sm:mb-20">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-900">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-500 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Center Left: Massive "Hello" Heading (cycles through languages) */}
          <div className="my-auto lg:my-0 pb-12 sm:pb-16">
            <HelloRotator />
            <p className="text-base sm:text-lg md:text-xl font-normal text-zinc-700 tracking-tight flex items-center gap-2">
              <span>{personal.taglineHero || "— It's Michael, a CS Student & Software Engineer"}</span>
            </p>
          </div>

          {/* Bottom Left: Scroll down indicator */}
          <div className="pt-4">
            <a
              href="#about-me"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-normal text-zinc-600 hover:text-black transition-colors group"
            >
              <span>Scroll down</span>
              <ArrowDown className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
