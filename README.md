# Michael — Software Engineering Intern Portfolio

A high-performance, dark-themed personal portfolio website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, adapted from the modern **Wolfpixel** editorial design aesthetic specifically tailored for **Software Engineering Internships**.

---

## Features

- **Wolfpixel Dark Aesthetic**: Deep charcoal & obsidian background (`#09090b`), glowing ambient meshes, crisp typography, and 1px borders with subtle hover lighting.
- **SWE Intern Recruiting Focus**:
  - Availability pill with pulsing beacon (`🟢 Available for Summer / Fall Internships`).
  - Expected graduation date, university, GPA, and coursework.
  - Quick action buttons for **Resume (PDF)**, **GitHub**, and **LinkedIn**.
- **Categorized Technical Stack**:
  - Organized into Languages, Frontend & Full-Stack, Backend & Systems, Databases, and DevOps/Tooling.
- **Project Showcase with Engineering Metrics**:
  - Filterable by domain (*Full-Stack*, *Backend & Systems*, *Developer Tools*, *AI & Data*).
  - Highlights system architecture, concurrency, and key performance metrics (e.g. `8.5k tasks/sec`, `<20ms latency`).
  - Source code and live demo links on every card.
- **Interactive Developer Console / CLI**:
  - Embedded interactive bash-style terminal where recruiters can run commands like `help`, `skills`, `projects`, `edu`, `contact`, or `sudo hire`.
- **Full-Stack Contact Form**:
  - Backed by Next.js API route (`/api/contact`) with server-side validation and responsive user feedback.
- **100% Configurable**: All personal info, skills, projects, and coursework live in a single file: `src/data/portfolio.ts`.

---

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # Backend API route handling contact messages
│   ├── globals.css          # Tailwind CSS v4 styling & theme setup
│   ├── layout.tsx           # Global HTML shell & SEO metadata
│   └── page.tsx             # Main assembled single-page application
├── components/
│   ├── icons/
│   │   └── BrandIcons.tsx   # Crisp SVG icons for GitHub & LinkedIn
│   ├── ContactSection.tsx   # Contact form & direct email copy box
│   ├── ExperienceSection.tsx# Education, coursework & work experience timeline
│   ├── Footer.tsx           # Minimalist footer with live local clock
│   ├── Hero.tsx             # High-impact introduction & headline
│   ├── Navbar.tsx           # Responsive blurred header with quick actions
│   ├── ProjectsSection.tsx  # Filterable project showcase cards
│   ├── SkillsSection.tsx    # Technical skills matrix
│   └── TerminalPlayground.tsx# Interactive CLI easter egg terminal
└── data/
    └── portfolio.ts         # Single source of truth for all content
```

---

## Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## How to Customize

1. **Update Your Info**:
   Open [`src/data/portfolio.ts`](file:///c:/Users/Michael/Documents/porto/src/data/portfolio.ts) and edit:
   - Your name, bio, target role, and location
   - Your university, GPA, and expected graduation date
   - Your GitHub, LinkedIn, and email addresses
   - Your projects, tech stacks, and live demo links
2. **Add Your Resume**:
   - Place your PDF resume in the `public/` directory (e.g. `public/resume.pdf`).
   - In `src/data/portfolio.ts`, set `resumeUrl: "/resume.pdf"`.
3. **Deploy to Vercel (Free & Instant)**:
   - Push this repo to GitHub.
   - Go to [vercel.com](https://vercel.com) and import the repository.
   - Click **Deploy**!
