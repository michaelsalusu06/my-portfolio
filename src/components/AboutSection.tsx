import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  const { aboutHeading, aboutParagraphs } = portfolioData;

  return (
    <section
      id="about-me"
      className="relative bg-[#f3f3f3] border-t border-zinc-200 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto pl-0 lg:pl-12">
        <div className="max-w-4xl">
          {/* Eyebrow Label above the heading */}
          <span className="block text-sm font-normal text-zinc-500 mb-3 tracking-wide">
            About Me
          </span>

          {/* Bolded Full Name Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight text-zinc-900 mb-8">
            {aboutHeading}
          </h2>

          {/* Description Paragraphs */}
          <div className="space-y-6">
            {aboutParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-zinc-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
