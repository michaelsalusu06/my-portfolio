import { portfolioData, SkillGroup } from "@/data/portfolio";
import { PythonIcon } from "@/components/icons/BrandIcons";
import {
  Brain,
  Workflow,
  Trophy,
  Code,
  Palette,
  Braces,
  FileCode,
  Terminal,
  Coffee,
  Hash,
  Database,
  Code2,
  Users,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  workflow: Workflow,
  trophy: Trophy,
  code: Code,
  palette: Palette,
  braces: Braces,
  "file-code": FileCode,
  terminal: Terminal,
  python: PythonIcon,
  coffee: Coffee,
  hash: Hash,
  database: Database,
  "code-2": Code2,
  users: Users,
};

export default function SkillsSection() {
  const skillGroups: SkillGroup[] = portfolioData.skillGroups || [
    {
      category: "Competitive programming skills",
      skills: [
        { name: "Problem Solving", icon: "brain" },
        { name: "Algorithms", icon: "workflow" },
        { name: "Competitive Programming", icon: "trophy" },
        { name: "C++", icon: "code-2" },
      ],
    },
    {
      category: "Technologies",
      skills: [
        { name: "HTML", icon: "code" },
        { name: "CSS", icon: "palette" },
        { name: "JavaScript", icon: "braces" },
        { name: "TypeScript", icon: "file-code" },
        { name: "Python", icon: "python" },
        { name: "Java", icon: "coffee" },
        { name: "C#", icon: "hash" },
        { name: "SQL", icon: "database" },
      ],
    },
    {
      category: "Organizational Skills",
      skills: [{ name: "Event Management", icon: "users" }],
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#f3f3f3] border-t border-zinc-200 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-sm text-zinc-900 font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-zinc-900 inline-block" />
            <span>Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-900">
            Skills &amp; Competencies
          </h2>
        </div>

        {/* Skill Category Groups */}
        <div className="space-y-10 sm:space-y-12">
          {skillGroups.map((group) => (
            <div key={group.category}>
              {/* Category Eyebrow */}
              <h3 className="text-xs sm:text-[13px] font-semibold text-zinc-500 uppercase tracking-wider mb-4 sm:mb-5">
                {group.category}
              </h3>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {group.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  const isPython = skill.name.toLowerCase() === "python";
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3.5 p-3.5 sm:px-4 sm:py-3.5 rounded-2xl bg-white/80 border border-zinc-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-zinc-300 hover:shadow-md hover:bg-white transition-all duration-200 cursor-default"
                    >
                      {/* Squircle Icon Container */}
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-100/90 border border-zinc-200/80 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-black group-hover:border-black group-hover:scale-105 shadow-2xs"
                      >
                        <IconComponent
                          className={`w-4 h-4 sm:w-[18px] sm:h-[18px] transition-colors duration-200 ${
                            isPython
                              ? "text-black group-hover:text-white"
                              : "text-zinc-700 group-hover:text-white"
                          }`}
                        />
                      </div>

                      {/* Skill Name */}
                      <span className="text-sm sm:text-[15px] font-medium text-zinc-800 group-hover:text-black tracking-tight transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
