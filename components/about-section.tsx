"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2, Users, Rocket, Brain } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Developer",
    desc: "Experienced in React, Next.js, Node.js, and modern web technologies. Turning ideas into functional products.",
  },
  {
    icon: Users,
    title: "Team Player",
    desc: "Collaborated with designers, developers, and clients to deliver efficient solutions that meet business goals.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    desc: "I enjoy solving complex challenges, optimizing performance, and building systems that scale.",
  },
  {
    icon: Brain,
    title: "Continuous Learner",
    desc: "Always exploring new frameworks, tools, and technologies to stay ahead in the ever-evolving web landscape.",
  },
]

const background = [
  { title: "Full-Stack Development", desc: "With Years of Experience — (Academic)" },
  { title: "Frontend Expertise", desc: "React, Next.js, Tailwind CSS, ShadCN-UI" },
  { title: "Backend & Databases", desc: "Node.js, Express, MongoDB, Appwrite" },
]

const achievements = [
  { title: "Client Projects", desc: "Delivered multiple full-stack solutions for startups & businesses" },
  { title: "Hackathons", desc: "Participated & contributed to problem-solving competitions" },
  { title: "Open Source", desc: "Actively contributing to developer communities and GitHub projects" },
]

const interests = [
  { label: "Web Development", cls: "bg-primary/20 text-primary" },
  { label: "System Design", cls: "bg-chart-2/20 text-chart-2" },
  { label: "Backend Engineer", cls: "bg-chart-3/20 text-chart-3" },
  { label: "Open Source", cls: "bg-chart-4/20 text-chart-4" },
  { label: "AI Integration", cls: "bg-green-500/20 text-green-500" },
]

function Timeline({
  prompt,
  items,
}: {
  prompt: string
  items: { title: string; desc: string }[]
}) {
  return (
    <div>
      <h4 className="mb-5 font-mono text-sm text-muted-foreground">
        <span className="text-emerald-400">$</span> {prompt}
      </h4>
      <div className="relative space-y-6 border-l border-border/50 pl-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background" />
            <p className="font-medium">{it.title}</p>
            <p className="text-sm text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[400px] w-[600px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--chart-2)/0.08),transparent_70%)] blur-3xl" />
      </div>

      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-chart-2" />
              whoami
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="font-mono text-primary">#</span> About Me
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I&apos;m <span className="font-semibold text-foreground">Aliyan</span>, a passionate{" "}
              <span className="font-semibold text-primary">Full-Stack Web Developer</span> with a
              love for building scalable, modern, and user-friendly applications.
              With a strong foundation in both frontend and backend, I specialize
              in creating seamless digital experiences that solve real-world problems.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40"
                >
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="relative mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="relative text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Timelines */}
          <div className="grid gap-10 md:grid-cols-2">
            <Timeline prompt="background" items={background} />
            <Timeline prompt="achievements" items={achievements} />
          </div>

          {/* Interests */}
          <div>
            <h4 className="mb-5 font-mono text-sm text-muted-foreground">
              <span className="text-emerald-400">$</span> interests
            </h4>
            <div className="flex flex-wrap gap-3">
              {interests.map((it) => (
                <Badge
                  key={it.label}
                  className={`rounded-full px-3 py-1 transition-transform hover:scale-105 ${it.cls}`}
                >
                  {it.label}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
