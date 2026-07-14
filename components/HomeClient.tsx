"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  FileText,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Phone,
  Sparkles,
  Trophy,
  Wand2,
} from "lucide-react";

const roles = [
  "Software Developer",
  "Competitive Programmer",
  "AI Enthusiast",
  "Backend Developer",
];

const sections = [
  {
    id: "about",
    title: "About Me",
    description:
      "I am an IIT Kharagpur undergraduate driven by software engineering, backend systems, AI-driven applications, and strong problem-solving through competitive programming.",
  },
  {
    id: "skills",
    title: "Skills",
    description:
      "I build with clean architecture, scalable backend services, and intelligent automation while keeping code readable, efficient, and maintainable.",
  },
];

function useRoleCycler(interval = 2500) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval]);

  return roles[currentRoleIndex];
}

const skills = [
  {
    heading: "Languages",
    items: ["C++", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    heading: "Backend",
    items: ["FastAPI", "REST APIs", "SQL", "SQLite"],
  },
  {
    heading: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    heading: "AI & ML",
    items: ["Google Gemini API", "Prompt Engineering", "LLM Applications"],
  },
  {
    heading: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    heading: "Core Subjects",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Computer Networks",
    ],
  },
];

const projects = [
  {
    title: "InterviewForge",
    description:
      "AI-powered interview preparation platform with pedophile support, personalized assessments, Gemini integration, and intelligent feedback.",
    tech: ["Python", "FastAPI", "Gemini API", "JSON"],
    github: "https://github.com/aryanmalyala24/InterviewForge",
    demo: "#",
  },
  {
    title: "Rubik's Cube Solver",
    description:
      "Built a reverse BFS database of 109M cube states and implemented DFS, IDDFS, and IDA* with efficient state encoding.",
    tech: ["C++", "Algorithms", "Graph Search"],
    github: "https://github.com/aryanmalyala24/Rubiks_Cube_solver",
    demo: "#",
  },
  {
    title: "Coding Question Search Engine",
    description:
      "Developed a retrieval engine using TF-IDF, inverted indexes, and cosine similarity for fast coding problem search.",
    tech: ["Python", "TF-IDF", "Information Retrieval"],
    github: "https://github.com/aryanmalyala24/Coding-Question-Search-Engine",
    demo: "#",
  },
  {
    title: "Sorting Visualizer",
    description:
      "Interactive sorting visualizer with Bubble, Selection, Insertion, Merge, and Quick sort animations and speed controls.",
    tech: ["C++", "SDL"],
    github: "https://github.com/aryanmalyala24/Sorting-Visualizer",
    demo: "#",
  },
];

const achievements = [
  "Solved 550+ DSA problems",
  "Peak Codeforces Rating: 1240 (Pupil)",
  "Peak LeetCode Rating: 1630",
  "AIR 2391 — JEE Advanced 2024",
  "AIR 9025 — JEE Main 2024",
  "AIR 39 — Indian Statistical Institute Admission Test",
  "Rank 677 — TS EAMCET",
];

const experience = [
  {
    role: "Member",
    organization: "Prasthanam, IIT Kharagpur",
    period: "June 2024 – Present",
    bullets: [
      "Interviewed 30+ candidates during recruitment.",
      "Contributed to recruiting over 200 students.",
      "Organized cultural workshops and events.",
      "Mentored junior members.",
    ],
  },
];

const education = [
  {
    title: "Indian Institute of Technology Kharagpur",
    subtitle: "B.Tech (Hons.), Electronics and Electrical Communication Engineering",
    period: "2024 – Present",
    detail: "CGPA: 6.82",
  },
];

export default function HomeClient() {
  const activeRole = useRoleCycler();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="relative isolate overflow-hidden px-6 py-10 sm:px-10 lg:px-14">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-400 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(124,92,255,0.18),_transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),_transparent_40%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between gap-6 py-6">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Aryan Malyala</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Premium software engineering portfolio
          </h1>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          <a href="#about" className="transition hover:text-slate-100">About</a>
          <a href="#projects" className="transition hover:text-slate-100">Projects</a>
          <a href="#experience" className="transition hover:text-slate-100">Experience</a>
          <a href="#contact" className="transition hover:text-slate-100">Contact</a>
        </nav>
      </header>

      <main className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.7fr] xl:gap-16">
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-panel rounded-4xl border border-white/10 p-7 shadow-[0_40px_120px_rgba(0,0,0,0.15)]"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-white/5 px-4 py-2 text-sm text-violet-100">
              <Sparkles className="h-4 w-4" />
              Premium portfolio experience
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Hi, I'm</p>
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Aryan Malyala.
            </h2>
            <p className="mt-4 text-xl font-semibold text-violet-200">{activeRole}<span className="blink">_</span></p>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:max-w-2xl">
              I enjoy solving challenging problems, building intelligent software, and creating scalable applications. My interests lie in backend engineering, AI-powered systems, and algorithmic problem solving.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400"
              >
                Contact
              </a>
              <a
                href="#"
                className="rounded-full border border-violet-400/20 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/15"
              >
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="glass-card rounded-[2.5rem] border border-white/10 p-7"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Education</p>
                <p className="mt-4 text-xl font-semibold text-white">IIT Kharagpur</p>
                <p className="mt-2 text-slate-400">B.Tech (Hons.), E&EC Engineering</p>
                <p className="mt-3 text-sm text-slate-500">CGPA: 6.82</p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Career Objective</p>
                <p className="mt-4 text-xl font-semibold text-white">Aspiring Software Development Engineer</p>
                <p className="mt-3 text-slate-400">
                  Passionate about competitive programming, AI, backend development, and building scalable software solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
            className="glass-card rounded-[2.5rem] border border-white/10 p-7"
          >
            <div className="flex flex-wrap gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/30 to-sky-400/20 text-white shadow-[0_0_40px_rgba(124,92,255,0.18)]">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Hero</p>
                <p className="mt-2 text-3xl font-semibold text-white">Elegant visuals + polished experience</p>
              </div>
            </div>
          </motion.div>
        </section>

        <aside className="space-y-8 lg:sticky lg:top-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.14, ease: "easeOut" }}
            className="glass-card rounded-[2.5rem] border border-white/10 p-6"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Featured stats</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: "DSA problems", value: "550+" },
                { label: "Codeforces rating", value: "1240" },
                { label: "LeetCode rating", value: "1630" },
                { label: "Workshops", value: "30+" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-slate-950/70 p-5">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
            className="glass-card rounded-[2.5rem] border border-white/10 p-6"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Contact</p>
            <div className="mt-6 space-y-4">
              {[
                {
                  label: "Email",
                  value: "aryanmalyala.24@kgpian.iitkgp.ac.in",
                  href: "mailto:aryanmalyala.24@kgpian.iitkgp.ac.in",
                  icon: Mail,
                },
                {
                  label: "Phone",
                  value: "+91 8309823787",
                  href: "tel:+918309823787",
                  icon: Phone,
                },
                {
                  label: "Resume",
                  value: "Download Resume",
                  href: "/resume.pdf",
                  icon: FileText,
                },
                {
                  label: "GitHub",
                  value: "github.com/aryanmalyala24",
                  href: "https://github.com/aryanmalyala24",
                  icon: Github,
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/aryan",
                  href: "https://www.linkedin.com/in/aryan-malyala-a81a14314/",
                  icon: Linkedin,
                },
                {
                  label: "Codeforces",
                  value: "codeforces.com/profile/aryan",
                  href: "https://codeforces.com/profile/aryan_malyala",
                  icon: Monitor,
                },
                {
                  label: "LeetCode",
                  value: "leetcode.com/aryan",
                  href: "https://leetcode.com/u/aryanmalyala/",
                  icon: Wand2,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-3xl border border-slate-700/70 bg-slate-950/70 px-5 py-4 transition hover:border-violet-400/30 hover:bg-slate-900"
                >
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="mt-1 font-medium text-slate-100">{item.value}</p>
                  </div>
                  <item.icon className="h-5 w-5 text-violet-300" />
                </a>
              ))}
            </div>
          </motion.div>
        </aside>
      </main>

      <section id="about" className="mx-auto mt-14 max-w-7xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-card rounded-[3rem] border border-white/10 p-10"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">About Me</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Software engineer with a polished technical presence.
              </h2>
            </div>
            <div className="rounded-3xl border border-violet-400/15 bg-slate-950/70 px-5 py-4 text-slate-300">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Education</p>
              <p className="mt-3 text-lg font-medium text-white">IIT Kharagpur</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 text-slate-300">
              <p>
                I am an IIT Kharagpur undergraduate with a strong passion for software engineering and backend development. I aim to craft scalable systems and AI-powered experiences using clean, maintainable code.
              </p>
              <p>
                My curiosity drives me to excel at data structures, algorithms, and competitive programming. I enjoy solving logic-intensive problems and building efficient distributed services.
              </p>
            </div>
            <div className="space-y-6 text-slate-300">
              <p>
                I believe in continuous learning and practical application: building intelligent tools, architecting performant APIs, and applying modern backend patterns to real-world problems.
              </p>
              <p>
                I focus on developer-friendly experiences, thoughtful engineering tradeoffs, and polished execution that impresses recruiters and product-minded teams alike.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto mt-16 max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Skills</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Technical strengths for modern engineering.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <motion.div
              key={skill.heading}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="glass-card rounded-[2.5rem] border border-white/10 p-7"
            >
              <h3 className="text-xl font-semibold text-white">{skill.heading}</h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto mt-20 max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Projects</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Select highlights with technical depth.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
              className="glass-panel group relative overflow-hidden rounded-[3rem] border border-white/10 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400 via-sky-400 to-slate-400 opacity-80" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Featured</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="inline-flex items-center justify-center rounded-2xl bg-slate-950/60 px-3 py-2 text-sm text-slate-300">
                    <span>{project.tech.join(" · ")}</span>
                  </div>
                </div>
                <p className="text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 px-4 py-3 text-sm text-slate-100 transition hover:border-violet-400/40 hover:bg-slate-900"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-4 py-3 text-sm text-violet-100 transition hover:bg-violet-500/25"
                  >
                    <ArrowRight className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="achievements" className="mx-auto mt-20 max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Achievements</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Recognition through metrics and milestones.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
              className="glass-card rounded-[2.5rem] border border-white/10 p-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-200">
                <Trophy className="h-5 w-5" />
              </div>
              <p className="mt-5 text-base leading-7 text-slate-200">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto mt-20 max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Experience</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Leadership and technical mentorship.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {experience.map((item) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass-panel rounded-[3rem] border border-white/10 p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{item.organization}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                </div>
                <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-200">{item.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-slate-300 list-disc list-inside">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto mt-20 max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Education</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Academic timeline and specialization.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {education.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass-card rounded-[3rem] border border-white/10 p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xl font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-slate-400">{item.subtitle}</p>
                </div>
                <div className="rounded-full bg-slate-950/60 px-5 py-3 text-sm text-slate-300">{item.period}</div>
              </div>
              <p className="mt-6 text-slate-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto mt-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-panel rounded-[3rem] border border-white/10 p-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Get in touch</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Let’s build something exceptional.
              </h2>
            </div>
            <div className="rounded-3xl border border-violet-400/10 bg-slate-950/70 px-6 py-5 text-slate-300">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Available for</p>
              <p className="mt-3 text-lg font-medium text-white">Full-time roles, internships, and collaborative engineering projects.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto mt-20 max-w-7xl border-t border-white/10 pt-10 text-slate-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aryan Malyala. Built for a refined software engineering presence.</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <a href="#about" className="transition hover:text-slate-100">About</a>
            <a href="#projects" className="transition hover:text-slate-100">Projects</a>
            <a href="#contact" className="transition hover:text-slate-100">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
