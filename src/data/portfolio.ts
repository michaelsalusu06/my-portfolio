export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack" | "Backend & Systems" | "Developer Tools" | "AI & Data";
  description: string;
  problem?: string;
  role?: string;
  tags?: string[];
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  metrics?: string;
  image?: string;
  displaySub?: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export interface SkillCategory {
  title: string;
  subhead?: string;
  tag?: string;
  description?: string;
  number?: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  type?: "Internship" | "Research" | "Leadership" | "Education";
  summary: string;
  tags: string[];
  description?: string[];
  skills?: string[];
}

export const portfolioData = {
  personal: {
    name: "Michael Joseph Salusu",
    role: "Software Engineering Intern",
    focus: "Full-Stack Engineering & Scalable Systems",
    location: "Jakarta, Indonesia / Open to Remote & Relocation",
    availability: "Available for Summer / Fall Internships",
    bio: "Computer Science student driven by building scalable web applications, robust backend systems, and delightful developer tools. Constantly exploring distributed systems, modern web architectures, and high-impact software design.",
    graduation: "Expected Graduation: 2026",
    university: "Bachelor of Science in Computer Science",
    gpa: "3.85 / 4.00",
    email: "michael.swe@example.com",
    github: "https://github.com/michaelsalusu06",
    linkedin: "https://www.linkedin.com/in/michael-joseph-salusu-574935321/",
    whatsapp:
      "https://wa.me/62811466838?text=Hi%20Michael%2C%20I%20am%20reaching%20out%20from%20your%20portfolio%20website.%20Are%20you%20available%20for%20a%20quick%20chat%3F",
    resumeUrl: "#resume", // User can replace with /resume.pdf
    taglineHero: "— It's Michael, a CS Student & Software Engineer",
    railRole: "Software Engineer",
    railYear: "2026",
  },

  heroStats: [
    { number: "20", label: "Certificates" },
    { number: "9", label: "Technologies" },
  ],

  aboutHeading: "Michael Joseph Salusu",

  aboutParagraphs: [
    "Computer Science undergraduate at BINUS University focused on Software Engineering and Full-Stack Development. I am passionate about building responsive web applications, working with modern technologies, and writing clean, maintainable code.",
    "To complement my software engineering background, I strengthened my algorithmic thinking and logic through competitive programming training in C++ with Jollybee, and developed organizational and communication skills as an Activist at HIMTI BINUS University.",
  ],

  experienceSection: {
    eyebrow: "Experiences",
    headingLine1: "Organizational",
    headingLine2: "Experiences",
    description:
      "Over the past year, I've built full-stack software applications, solved complex algorithmic challenges, and managed digital operations for university tech initiatives.",
    ctaText: "Contact Me",
    ctaLink: "#contact",
  },

  experienceBanner: {
    eyebrow: "(Let's Connect)",
    heading: "Explore My Organizational Experience Further",
    description:
      "Dive into my full extracurricular timeline, from managing digital operations for HIMTI's flagship tech events to competitive programming training with Jollybee.",
    ctaText: "View LinkedIn Profile",
    ctaLink: "https://www.linkedin.com/in/michael-joseph-salusu-574935321/",
  },

  stats: [
    { label: "Target Role", value: "Software Engineer" },
    { label: "Core Stack", value: "9 Technologies" },
    { label: "Logic", value: "Competitive Programming" },
    { label: "Leadership", value: "Event Management" },
  ],

  skillsSection: {
    eyebrow: "Skills",
    headingLine1: "Explore My Technical",
    headingLine2: "Stack & Competencies",
    description:
      "A comprehensive breakdown of programming languages, competitive algorithmic problem solving, and student organization leadership.",
    ctaText: "Contact Me",
    ctaLink: "#contact",
  },

  skillGroups: [
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
      skills: [
        { name: "Event Management", icon: "users" },
      ],
    },
  ],

  skillCategories: [
    {
      number: "01",
      subhead: "9 Technologies",
      tag: "Code & Syntax",
      title: "Programming Languages",
      description:
        "Full proficiency across frontend markup, dynamic client-side scripting, object-oriented software engineering, and relational database systems.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C#",
        "SQL",
        "C++",
      ],
    },
    {
      number: "02",
      subhead: "Competitive Programming",
      tag: "Logic & Competitive",
      title: "Problem Solving & Algorithms",
      description:
        "Rigorous algorithmic foundations, time complexity optimization, and competitive programming logic honed through Jollybee training in C++.",
      skills: ["Problem Solving", "Algorithms", "Competitive Programming"],
    },
    {
      number: "03",
      subhead: "HIMTI BINUS University",
      tag: "Organization & Operations",
      title: "Event & Community Leadership",
      description:
        "Coordinating digital enrollment, participant communications, and event logistics for national technology initiatives and seminars at HIMTI.",
      skills: ["Event Management"],
    },
  ],

  projects: [
    {
      id: "omni-cinema",
      title: "Omni Cinema",
      tagline: "Ultra-responsive cinema ticket reservation and theater screening management system",
      category: "Full-Stack",
      displaySub: "",
      image: "/project-1.jpg",
      tags: ["Full-Stack", "Web App", "Software Engineering"],
      problem:
        "Cinema ticket booking and theater scheduling often suffer from latency and poor seat reservation UX. Omni Cinema delivers an ultra-fast, real-time seat selection interface with automated screening synchronization.",
      role: "Software Engineer",
      description:
        "An interactive movie ticketing platform designed for a smooth booking experience, featuring dynamic showtimes, live seat mapping, and a streamlined checkout flow.",
      highlights: [
        "Architected WebSocket synchronization layer reducing seat-locking latency to <20ms.",
        "Integrated interactive seating map with dynamic tier pricing calculation.",
        "Constructed normalized relational schema in PostgreSQL for multi-hall screening times.",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Python", "Java", "C#", "SQL"],
      githubUrl: "https://github.com/michaelsalusu06/omni-cinema",
      liveUrl: "https://github.com/michaelsalusu06/omni-cinema",
      featured: true,
      metrics: "<20ms sync latency",
    },
    {
      id: "lern",
      title: "Lern",
      tagline: "Affordable on-demand tutoring marketplace with pay-per-session model",
      category: "Backend & Systems",
      displaySub: "",
      image: "/project-2.jpg",
      tags: ["UX Research", "UI/UX Design", "Flutter"],
      problem:
        "High subscription fees make online tutoring inaccessible. This app offers an affordable pay-per-session model for students while creating flexible freelance opportunities for tutors.",
      role: "Front-End Engineer",
      description:
        "An on-demand tutoring marketplace connecting students with certified tutors for flexible pay-as-you-learn micro-sessions.",
      highlights: [
        "Conducted end-to-end UX research and designed high-fidelity prototypes.",
        "Implemented cross-platform mobile frontend with responsive animations in Flutter.",
        "Built secure Nest.js authentication and session booking backend with Supabase.",
      ],
      techStack: [
        "Flutter",
        "Dart",
        "Nest.js",
        "Passport.js",
        "Argon2",
        "Helmet & Rate Limiter",
        "Class Validator & Transformer",
        "PostgreSQL",
        "Supabase",
        "Prisma",
      ],
      githubUrl: "https://github.com/michaelsalusu06/study-app",
      liveUrl: "https://github.com/michaelsalusu06/study-app",
      featured: true,
      metrics: "Pay-per-session engine",
    },
    {
      id: "restaurant-tracker",
      title: "Restaurant Order & Revenue Tracker",
      tagline: "Live kitchen order management and automated multi-shift revenue dashboard",
      category: "AI & Data",
      displaySub: "",
      image: "/project-3.jpg",
      tags: ["Full-Stack", "Dashboard", "Analytics"],
      problem:
        "Managing high-volume table orders, kitchen tickets, and end-of-day revenue reconciliation across shifts leads to lost receipts and inventory discrepancies. This system centralizes live orders with automated revenue analytics.",
      role: "Software Engineer",
      description:
        "A complete restaurant ordering system where customers can search the menu, check out with automatic discounts, and owners can track daily revenue on a private dashboard",
      highlights: [
        "Constructed normalized relational schema in PostgreSQL with indexing for fast aggregations.",
        "Created dynamic interactive chart visualizations with 60fps responsiveness on tablet devices.",
        "Designed REST API endpoints with rate limiting, input validation (Zod), and JWT authentication.",
      ],
      techStack: ["HTML", "Python", "SQL"],
      githubUrl: "https://github.com/michaelsalusu06/Bistro-order-and-revenue-tracker",
      liveUrl: "https://github.com/michaelsalusu06/Bistro-order-and-revenue-tracker",
      featured: true,
      metrics: "Live kitchen routing",
    },
    {
      id: "minigit-cli",
      title: "MiniGit - Version Control Engine CLI",
      tagline: "Lightweight content-addressable version control system built from scratch",
      category: "Developer Tools",
      displaySub: "Developer Tools",
      image: "/project-1.jpg",
      description:
        "Recreated the core internals of Git (blob storage, tree hashing, commit graphs, and branch references) to deeply understand underlying file system architecture and SHA-256 data structures.",
      highlights: [
        "Implemented custom object hashing, zlib compression, and DAG commit traversal.",
        "Supports init, add, commit, log, branch, and checkout operations.",
        "Thorough unit test suite covering edge cases and detached HEAD states.",
      ],
      techStack: ["TypeScript", "Node.js", "Zlib", "Crypto", "CLI"],
      githubUrl: "https://github.com/michaelsalusu06",
      featured: false,
      metrics: "Full DAG commit engine",
    },
  ] as Project[],

  experience: [
    {
      company: "Jollybee BINUS University, Indonesia",
      location: "Jakarta, Indonesia",
      period: "January 2026 - July 2026",
      role: "Competitive Programming",
      summary: "Competitive Programming · Solving logic-heavy problems with Greedy, Brute Force & time-complexity analysis",
      tags: ["Algorithms", "Problem Solving"],
      type: "Education",
      description: [
        "Solved logic-heavy algorithmic problems in C++, focusing on core problem-solving paradigms including Greedy strategies, Brute Force, and Ad-Hoc logic.",
        "Practiced analyzing time complexity, identifying edge cases, and implementing clean C++ logic under competitive constraints.",
      ],
      skills: ["Algorithms", "Problem Solving", "C++", "Data Structures"],
    },
    {
      company: "HIMTI BINUS University, Indonesia",
      location: "Jakarta, Indonesia",
      period: "March 2025 - March 2026",
      role: "Activist",
      summary: "Activist · Streamlining registration for TECHNO & HISHOT, course summaries & attendee support",
      tags: ["Event Management", "Community"],
      type: "Leadership",
      description: [
        "Designed and managed digital registration forms to streamline participant enrollment for HIMTI’s flagship events (TECHNO and HISHOT).",
        "Authored course summaries for Human-Computer Interaction (HCI) and Intelligent Automation as part of the freshmen academic orientation package.",
        "Executed promotional campaigns for national seminars, workshops, and local study tours by drafting and distributing broadcast communications across student networks.",
        "Served as the primary point of contact for HISHOT event attendees, resolving inquiries and managing communication channels to ensure a smooth participant experience.",
      ],
      skills: ["Event Management", "Community", "Leadership"],
    },
  ] as ExperienceItem[],

  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "University / Institute of Technology",
    period: "2022 - 2026 (Expected)",
    gpa: "3.85 / 4.00",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems & Concurrency",
      "Database Systems & Storage",
      "Computer Networks",
      "Software Engineering & Architecture",
      "Object-Oriented Programming",
    ],
    honors: ["Dean's Honor List (All Semesters)", "1st Place University Hackathon 2024"],
  },
};
