"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

type TechCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "ai"
  | "devops"
  | "others"

type Level = "exploring" | "familiar" | "proficient" | "expert"

type TechItem = {
  name: string
  level: Level
  category: TechCategory
}

const techStack: TechItem[] = [
  // Languages
  { name: "JavaScript (ES6+)", level: "expert", category: "languages" },
  { name: "TypeScript", level: "expert", category: "languages" },
  { name: "HTML5", level: "expert", category: "languages" },
  { name: "CSS3", level: "expert", category: "languages" },

  // Front-End
  { name: "React.js", level: "expert", category: "frontend" },
  { name: "Next.js", level: "expert", category: "frontend" },
  { name: "Bootstrap", level: "proficient", category: "frontend" },
  { name: "Tailwind CSS", level: "expert", category: "frontend" },
  { name: "ShadCN-UI", level: "expert", category: "frontend" },
  { name: "Nest.js", level: "exploring", category: "frontend" },

  // Back-End
  { name: "Node.js", level: "expert", category: "backend" },
  { name: "Express.js", level: "expert", category: "backend" },
  { name: "JWT Authentication", level: "proficient", category: "backend" },
  { name: "OAuth", level: "proficient", category: "backend" },
  { name: "API Integration", level: "expert", category: "backend" },
  { name: "RestFul API's", level: "expert", category: "backend" },

  // Databases
  { name: "MongoDB", level: "proficient", category: "databases" },
  { name: "Firebase", level: "proficient", category: "databases" },
  { name: "Appwrite", level: "familiar", category: "databases" },

  // AI & APIs
  { name: "OpenAI API", level: "proficient", category: "ai" },
  { name: "REST APIs", level: "expert", category: "ai" },
  { name: "WebSockets", level: "proficient", category: "ai" },

  // DevOps & Tools
  { name: "Git", level: "expert", category: "devops" },
  { name: "GitHub", level: "expert", category: "devops" },
  { name: "Netlify", level: "proficient", category: "devops" },
  { name: "Vercel", level: "proficient", category: "devops" },
  { name: "Postman", level: "proficient", category: "devops" },

  // Others
  { name: "Chatbot Integration", level: "familiar", category: "others" },
  { name: "Server-Side Rendering (SSR)", level: "proficient", category: "others" },
]

const categories: { id: TechCategory | "all"; label: string }[] = [
  { id: "all", label: "all" },
  { id: "languages", label: "languages" },
  { id: "frontend", label: "frontend" },
  { id: "backend", label: "backend" },
  { id: "databases", label: "databases" },
  { id: "ai", label: "ai" },
  { id: "devops", label: "devops" },
  { id: "others", label: "others" },
]

const levelMeta: Record<Level, { dots: number; label: string; glow: string; ring: string }> = {
  expert: { dots: 4, label: "expert", glow: "shadow-[0_0_12px_-2px] shadow-emerald-400/60", ring: "text-emerald-400" },
  proficient: { dots: 3, label: "proficient", glow: "shadow-[0_0_12px_-2px] shadow-sky-400/60", ring: "text-sky-400" },
  familiar: { dots: 2, label: "familiar", glow: "shadow-[0_0_12px_-2px] shadow-amber-400/60", ring: "text-amber-400" },
  exploring: { dots: 1, label: "exploring", glow: "shadow-[0_0_12px_-2px] shadow-rose-400/60", ring: "text-rose-400" },
}

const levelOrder: Record<Level, number> = { expert: 4, proficient: 3, familiar: 2, exploring: 1 }

export default function TechStackSection() {
  const [active, setActive] = useState<TechCategory | "all">("all")

  const filtered = useMemo(() => {
    const list =
      active === "all" ? techStack : techStack.filter((t) => t.category === active)
    return [...list].sort((a, b) => levelOrder[b.level] - levelOrder[a.level])
  }, [active])

  // Marquee row — a continuously scrolling band of the strongest skills
  const marquee = useMemo(
    () => techStack.filter((t) => t.level === "expert").map((t) => t.name),
    []
  )

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.10),transparent_70%)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--border)/0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)/0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="container max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-14"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            arsenal.config
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="font-mono text-primary">#</span>{" "}
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
            The tools, frameworks, and runtimes I reach for to ship modern,
            scalable products.
          </p>
        </motion.div>

        {/* Scrolling marquee band */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative mb-10 overflow-hidden rounded-2xl border border-border/50 bg-card/30 py-4 backdrop-blur-sm md:mb-14"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-28" />
          <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...marquee, ...marquee].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap rounded-lg border border-border/50 bg-background/60 px-4 py-1.5 font-mono text-sm text-foreground/80"
              >
                <span className="text-primary">{"</>"}</span> {name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-2xl shadow-black/20 backdrop-blur-xl"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border/60 bg-background/40 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <span className="ml-2 truncate font-mono text-xs text-muted-foreground">
              aliyan@portfolio: ~/skills
            </span>
            <span className="ml-auto hidden font-mono text-xs text-muted-foreground sm:inline">
              {filtered.length} packages
            </span>
          </div>

          {/* Command line + filters */}
          <div className="border-b border-border/40 px-4 py-4 md:px-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-sm">
              <span className="text-emerald-400">$</span>
              <span className="text-muted-foreground">
                grep --level{" "}
                <span className="text-foreground">
                  {active === "all" ? "*" : active}
                </span>
              </span>
              <span className="inline-block h-4 w-2 animate-pulse bg-primary/70" />
            </div>

            {/* Filter pills — wrap on mobile instead of clipped scroll */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = active === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`relative rounded-full border px-3 py-1.5 font-mono text-xs transition-all duration-300 md:text-sm ${
                      isActive
                        ? "border-primary/50 bg-primary/10 text-primary"
                        : "border-border/50 bg-background/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tech-pill"
                        className="absolute inset-0 rounded-full bg-primary/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">
                      {isActive && <span className="mr-1 text-primary">›</span>}
                      {cat.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="p-4 md:p-6">
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((tech, i) => {
                  const meta = levelMeta[tech.level]
                  return (
                    <motion.div
                      key={tech.name}
                      layout
                      initial={{ opacity: 0, scale: 0.92, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                      whileHover={{ y: -4 }}
                      className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 transition-colors duration-300 hover:border-primary/40"
                    >
                      {/* hover sheen */}
                      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/[0.07] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                      <div className="relative flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-semibold text-foreground md:text-base">
                            {tech.name}
                          </h3>
                          <p
                            className={`mt-0.5 font-mono text-[11px] capitalize ${meta.ring}`}
                          >
                            {meta.label}
                          </p>
                        </div>

                        {/* Dot-matrix proficiency meter */}
                        <div className="flex shrink-0 items-center gap-1 pt-0.5">
                          {[0, 1, 2, 3].map((d) => (
                            <span
                              key={d}
                              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                d < meta.dots
                                  ? `bg-current ${meta.ring} ${meta.glow}`
                                  : "bg-border"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* animated baseline bar */}
                      <div className="relative mt-4 h-px w-full overflow-hidden bg-border/60">
                        <motion.span
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: meta.dots / 4 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className={`absolute inset-0 origin-left bg-current ${meta.ring}`}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Legend footer */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-border/40 bg-background/30 px-4 py-3 font-mono text-[11px] text-muted-foreground">
            {(Object.keys(levelMeta) as Level[]).map((lvl) => (
              <span key={lvl} className="flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full bg-current ${levelMeta[lvl].ring}`} />
                {lvl}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
