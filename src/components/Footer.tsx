"use client";

import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/BrandIcons";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer
      id="contact"
      className="relative bg-[#f3f3f3] border-t border-zinc-200 pt-16 pb-12 sm:pt-24 sm:pb-16 px-6 sm:px-10 lg:px-16 scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Text - In Black */}
        <span className="text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-zinc-900 uppercase block mb-3 sm:mb-4">
          GET IN TOUCH
        </span>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-zinc-900 leading-[1.15] mb-4 sm:mb-5">
          Let&apos;s Build Something Together
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10 sm:mb-12">
          I am currently seeking software engineering internships and always{" "}
          <br className="hidden sm:inline" />
          open to discussing new projects. Choose your preferred channel below.
        </p>

        {/* App Logos (Channels) - Mathematically Centered 3-Column Grid */}
        <div className="max-w-xs sm:max-w-md md:max-w-lg mx-auto grid grid-cols-3 items-center gap-1 sm:gap-3">
          {/* GitHub: Centered in left column */}
          <div className="flex justify-center">
            <a
              href={personal.github || "https://github.com/michaelsalusu06"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base font-semibold text-zinc-900 hover:text-black transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-900 group-hover:scale-110 transition-transform shrink-0" />
              <span>GitHub</span>
            </a>
          </div>

          {/* LinkedIn: Dead-center in middle column */}
          <div className="flex justify-center">
            <a
              href={personal.linkedin || "https://www.linkedin.com/in/michael-joseph-salusu-574935321/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base font-semibold text-zinc-900 hover:text-black transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-900 group-hover:scale-110 transition-transform shrink-0" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* WhatsApp: Centered in right column */}
          <div className="flex justify-center">
            <a
              href={personal.whatsapp || "https://wa.me/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base font-semibold text-zinc-900 hover:text-black transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <WhatsappIcon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-900 group-hover:scale-110 transition-transform shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 sm:mt-20">
          <p className="text-xs sm:text-sm text-zinc-500 font-normal">
            &copy; 2026 {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
