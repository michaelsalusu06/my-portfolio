"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navLinks = [
    { id: "about-me", name: "About Me", href: "#about-me" },
    { id: "experience", name: "Experiences", href: "#experience" },
    { id: "projects", name: "Projects", href: "#projects" },
    { id: "skills", name: "Skills", href: "#skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 220; // Viewport trigger offset

      const aboutEl = document.getElementById("about-me");
      const expEl = document.getElementById("experience");
      const projectsEl = document.getElementById("projects");
      const skillsEl = document.getElementById("skills");
      const contactEl = document.getElementById("contact");

      const getTop = (el: HTMLElement | null) => {
        if (!el) return Infinity;
        return el.getBoundingClientRect().top + scrollY;
      };

      const aboutTop = getTop(aboutEl);
      const expTop = getTop(expEl);
      const projectsTop = getTop(projectsEl);
      const skillsTop = getTop(skillsEl);
      const contactTop = getTop(contactEl);

      const isNearBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60;

      if (scrollY + offset < aboutTop) {
        // At the top / Hero landing
        setActiveSection("");
      } else if (scrollY + offset >= contactTop || isNearBottom) {
        // At the bottom / Contact & Footer
        setActiveSection("");
      } else if (scrollY + offset >= skillsTop) {
        setActiveSection("skills");
      } else if (scrollY + offset >= projectsTop) {
        setActiveSection("projects");
      } else if (scrollY + offset >= expTop) {
        setActiveSection("experience");
      } else if (scrollY + offset >= aboutTop) {
        setActiveSection("about-me");
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#f3f3f3]/90 backdrop-blur-md transition-all py-4 sm:py-5 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Spacer keeps the nav links centered */}
          <div className="hidden md:block w-24" aria-hidden="true" />

          {/* Center-Left: Navigation links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2 text-[15px]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-black text-white font-medium border border-black shadow-xs"
                      : "border border-transparent text-zinc-600 hover:text-black"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Contact Me CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-zinc-900 hover:text-black group border-b border-zinc-900 pb-0.5 transition-all"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="md:hidden p-2 text-zinc-800 hover:text-black"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f3f3f3] border-b border-zinc-200 px-6 py-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    handleLinkClick(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2 rounded-full text-base transition-all ${
                    isActive
                      ? "bg-black text-white font-medium border border-black shadow-xs"
                      : "border border-transparent text-zinc-700 hover:text-black"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 border-t border-zinc-300">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1 text-base font-semibold text-black"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
