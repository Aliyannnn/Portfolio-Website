"use client"

import { Button } from "@/components/ui/button"
import { DownloadIcon, ArrowRightIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect"
import Link from "next/link"

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Aliyannnn", Icon: GithubIcon },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/aliyan-arif-9b4179377/", Icon: LinkedinIcon },
  { name: "Twitter", url: "https://x.com/Aliyann712709", Icon: TwitterIcon },
]

const focusAreas = ["Frontend", "Backend", "Full-Stack", "APIs"]

export default function HeroSection() {
  const ease = [0.22, 1, 0.36, 1] as const

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      {/* Quiet atmosphere — a single soft wash, no noise */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute right-[-10%] top-[-10%] h-[480px] w-[480px] rounded-full bg-primary/[0.07] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container max-w-5xl">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div variants={item} className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Aliyan Arif
          </motion.h1>

          {/* Role + typewriter */}
          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap items-baseline gap-x-3 text-xl text-muted-foreground sm:text-2xl"
          >
            <span className="font-medium text-foreground/90">Full-Stack Web Developer</span>
            <span className="text-border">/</span>
            <span className="text-primary">
              <TypewriterComponent
                options={{
                  strings: [
                    "React & Next.js",
                    "Node.js & Express",
                    "MongoDB & Appwrite",
                    "Modern Web Apps",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                  delay: 55,
                }}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I design and build modern, scalable, and reliable web applications —
            with a focus on clean architecture, thoughtful interfaces, and
            performance that lasts.
          </motion.p>

          {/* Focus areas — understated */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="h-1 w-1 rounded-full bg-primary/70" />
                {area}
              </span>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div variants={item} className="mt-11 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group h-12 rounded-full px-7">
              <Link href="#projects">
                View Work
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-6 text-muted-foreground hover:text-foreground"
            >
              <Link
                href="/Aliyan%20Arif%20-%20Full%20Stack%20Web%20Developer%20Resume.pdf"
                target="_blank"
                download
              >
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          {/* Divider + socials */}
          <motion.div
            variants={item}
            className="mt-14 flex items-center gap-6 border-t border-border/60 pt-7"
          >
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/70">
              Connect
            </span>
            <div className="flex gap-1">
              {socialLinks.map(({ name, url, Icon }) => (
                <Link
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-primary"
                >
                  <span className="sr-only">{name}</span>
                  <Icon className="h-[18px] w-[18px]" />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 sm:flex"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-3 w-px bg-muted-foreground/50"
        />
      </motion.div>
    </section>
  )
}
