"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DownloadIcon, ArrowRightIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = ev
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      containerRef.current.style.setProperty("--mouse-x", `${x}`)
      containerRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    document.addEventListener("mousemove", updateMousePosition)
    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  const skills = [
    "Full-Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Git",
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Aliyannnn",
      Icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aliyan-arif-9b4179377/",
      Icon: LinkedinIcon,
    },
    {
      name: "Twitter",
      url: "https://x.com/Aliyann712709",
      Icon: TwitterIcon,
    },
  ]

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  // Faux source lines for the terminal panel
  const codeLines = [
    { t: "const", v: " developer", e: " = {" },
    { t: "  name:", v: ' "Aliyan Arif",', e: "" },
    { t: "  role:", v: ' "Full-Stack Dev",', e: "" },
    { t: "  stack:", v: " [React, Next, Node],", e: "" },
    { t: "  open:", v: " true", e: "" },
    { t: "}", v: "", e: "" },
  ]

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 sm:px-6"
      style={
        {
          "--mouse-x": "0.5",
          "--mouse-y": "0.5",
        } as React.CSSProperties
      }
    >
      {/* Atmosphere: mouse-follow glow + masked grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_calc(50%+var(--mouse-x)*40%)_calc(50%+var(--mouse-y)*40%),hsl(var(--primary)/10%),transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)/0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)/0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 grid max-w-6xl grid-cols-1 items-center gap-12 pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
        {/* LEFT — copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center md:text-left"
        >
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="mb-5 inline-flex items-center gap-2 border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-sm text-primary"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              available for work
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent transition-all duration-300 hover:from-chart-2 hover:to-primary">
              Aliyan Arif
            </span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-5 flex flex-col justify-center gap-2 text-xl font-semibold text-muted-foreground md:flex-row md:items-center md:justify-start md:text-2xl lg:text-3xl"
          >
            <span className="font-mono text-primary/70">{"//"}</span>
            <span>I build</span>
            <span className="h-8 text-primary md:h-10">
              <TypewriterComponent
                options={{
                  strings: [
                    "modern web apps",
                    "scalable full-stack solutions",
                    "beautiful frontend designs",
                    "web app backends",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:mx-0"
          >
            Full-stack web developer passionate about creating modern, scalable,
            and user-friendly web applications with React, Next.js, Node.js, and
            MongoDB.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105",
                  skill === "Full-Stack" && "bg-chart-4/20 text-chart-4 hover:bg-chart-4/30",
                  skill === "React" && "bg-chart-1/20 text-chart-1 hover:bg-chart-1/30",
                  skill === "Next.js" && "bg-chart-2/20 text-chart-2 hover:bg-chart-2/30",
                  skill === "Node.js" && "bg-chart-3/20 text-chart-3 hover:bg-chart-3/30",
                  skill === "TypeScript" && "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
                  skill === "JavaScript" && "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30",
                  skill === "Tailwind CSS" && "bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/30",
                  skill === "MongoDB" && "bg-green-500/20 text-green-500 hover:bg-green-500/30",
                  skill === "Git" && "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30",
                )}
              >
                {skill}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
          >
            <Button asChild className="group hover:scale-105 transition-transform">
              <Link href="#projects">
                View Projects
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="transition-transform hover:scale-105">
              <Link
                href="/Aliyan%20Arif%20-%20Full%20Stack%20Web%20Developer%20Resume.pdf"
                target="_blank"
                download
              >
                Resume
                <DownloadIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex justify-center gap-3 md:justify-start"
          >
            {socialLinks.map(({ name, url, Icon }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card/40 text-muted-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <span className="sr-only">{name}</span>
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — terminal/code panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.12),transparent_70%)] blur-2xl" />
          <div className="animate-float overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-2xl shadow-black/30 backdrop-blur-xl">
            {/* title bar */}
            <div className="flex items-center gap-2 border-b border-border/60 bg-background/40 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                developer.ts
              </span>
            </div>
            {/* code body */}
            <div className="space-y-1.5 p-5 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="w-4 select-none text-right text-muted-foreground/40">
                    {i + 1}
                  </span>
                  <span>
                    <span className="text-chart-2">{line.t}</span>
                    <span className="text-foreground/90">{line.v}</span>
                    <span className="text-muted-foreground">{line.e}</span>
                  </span>
                </motion.div>
              ))}
              <div className="flex gap-4 pt-1">
                <span className="w-4" />
                <span className="inline-block h-4 w-2 animate-pulse bg-primary/70" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <span className="mb-2 font-mono text-xs text-muted-foreground">scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-2 h-2 w-1 rounded-full bg-primary"
          />
        </motion.div>
      </div>
    </div>
  )
}
