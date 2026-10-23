"use client";

import { useState, useEffect } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const displayProjects = projects.slice(0, 3);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-[#f3f3f3] border-t border-zinc-200 relative scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header: Just "Projects", no top pill */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-zinc-900">
            Projects
          </h2>
        </div>

        {/* 3-Column Minimalist 3D Still Life Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {displayProjects.map((project, idx) => (
            <div
              key={project.id || idx}
              onClick={() => setSelectedProject(project)}
              className="group block cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-200 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                <img
                  src={project.image || `/project-${idx + 1}.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay with circular arrow button */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  {/* Circular Button */}
                  <div className="w-14 h-14 rounded-full bg-black/85 backdrop-blur-md text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="mt-3.5 sm:mt-4 text-xs sm:text-sm">
                <h3 className="text-zinc-900 font-medium tracking-tight group-hover:text-black transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA: Check out More → View More */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm">
          <span className="text-zinc-400 font-normal">Check out More</span>
          <ArrowRight className="w-4 h-4 text-zinc-600" />
          <a
            href="https://github.com/michaelsalusu06"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 hover:text-black underline underline-offset-4 transition-colors"
          >
            View More
          </a>
        </div>
      </div>

      {/* Project Details Modal with Blurred Background */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          {/* Modal Container Card */}
          <div
            className="relative bg-[#eaeaea] border border-zinc-300/80 rounded-3xl p-6 sm:p-10 md:p-12 max-w-2xl lg:max-w-3xl w-full shadow-2xl my-auto animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
              className="absolute top-6 right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm hover:shadow border border-zinc-200/80 flex items-center justify-center text-zinc-700 hover:text-black transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Title */}
            <h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-zinc-900 mb-8 pr-12">
              {selectedProject.title}
            </h3>

            {/* 2-Column Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
              {/* Left Column: Description */}
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  DESCRIPTION
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  {selectedProject.description || selectedProject.problem}
                </p>
              </div>

              {/* Right Column: Role & Tech Stack */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                    ROLE
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    {selectedProject.role || "Full-Stack Software Engineer"}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                    TECH STACK
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    {selectedProject.techStack.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer Action: View Details linked to GitHub */}
            <div className="mt-8 pt-6 border-t border-zinc-300/80 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl || "https://github.com/michaelsalusu06"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-zinc-900 hover:text-black group border-b border-zinc-900 pb-0.5 transition-all"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-xs text-zinc-500 font-mono">
                github.com/michaelsalusu06
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
