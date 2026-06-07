"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, GithubIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"

function ProjectActions({
  links,
}: {
  links: { github?: string; live?: string }
}) {
  return (
    <div className="flex items-center gap-2">
      {links.github && (
        <Link
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          onClick={(e) => e.stopPropagation()}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
        >
          <GithubIcon className="h-4 w-4" />
        </Link>
      )}
      {links.live && (
        <Link
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live site"
          onClick={(e) => e.stopPropagation()}
          className="flex h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          Visit
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

export default function ProjectsSection() {
  const displayed = projects.slice(0, 6)
  const [featured, ...rest] = displayed

  const visit = (links: { live?: string; github?: string }) => {
    const url = links.live || links.github
    if (url) window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      {/* Quiet atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute right-[-5%] top-1/4 h-[420px] w-[420px] rounded-full bg-primary/[0.06] blur-[120px]" />
      </div>

      <div className="container max-w-6xl">
        {/* Header — left aligned, editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Projects
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            A curated collection of recent work in full-stack and web
            development — built with modern technologies and a focus on
            performance.
          </p>
        </motion.div>

        {/* Featured project — large, spanning */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          onClick={() => visit(featured.links)}
          className="group relative mb-6 grid cursor-pointer grid-cols-1 overflow-hidden rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm transition-colors duration-500 hover:border-primary/40 lg:mb-8 lg:grid-cols-2"
        >
          <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[360px]">
            <Image
              src={featured.image}
              alt={`${featured.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>

          <div className="flex flex-col justify-center gap-5 p-7 md:p-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-primary">01</span>
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Featured
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {featured.title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {featured.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {featured.badges.map((b) => (
                <Badge key={b} variant="secondary" className="font-mono text-[11px]">
                  {b}
                </Badge>
              ))}
            </div>

            <div className="pt-2">
              <ProjectActions links={featured.links} />
            </div>
          </div>
        </motion.article>

        {/* Rest — refined grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => visit(project.links)}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
            >
              {/* Image — fixed 16:9 frame, top-aligned crop for consistent alignment */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border/40">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />

                {/* number + grant */}
                <div className="absolute left-4 top-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-foreground/70 mix-blend-difference">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                </div>
                {project.grant && (
                  <Badge className="absolute right-3 top-3 bg-primary/90 text-[10px] text-primary-foreground">
                    {project.grant}
                  </Badge>
                )}

                {/* hover actions slide up */}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-end gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ProjectActions links={project.links} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col gap-3 p-5">
                <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="line-clamp-3 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.badges.slice(0, 3).map((b) => (
                    <Badge key={b} variant="secondary" className="font-mono text-[10px]">
                      {b}
                    </Badge>
                  ))}
                  {project.badges.length > 3 && (
                    <Badge variant="secondary" className="font-mono text-[10px]">
                      +{project.badges.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
