"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const displayedProjects = projects.slice(0, 6)

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-accent/10" />
        <div className="absolute left-1/4 top-10 h-[400px] w-[500px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--chart-3)/0.08),transparent_70%)] blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-chart-3" />
            ls ~/projects
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="font-mono text-primary">#</span>{" "}
            <span className="bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A curated collection of my recent work in Full-Stack and Web3
            development. Each project highlights modern technologies,
            performance, and innovation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <Card
                className={cn(
                  "flex h-full flex-col overflow-hidden rounded-2xl border-border/50 bg-card/60 backdrop-blur-xl transition-all duration-500",
                  "shadow-lg hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
                )}
              >
                {/* Faux window bar */}
                <div className="flex items-center gap-2 border-b border-border/50 bg-background/40 px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <span className="ml-1 truncate font-mono text-[11px] text-muted-foreground">
                    {project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 22)}.app
                  </span>
                  {project.grant && (
                    <Badge
                      variant="outline"
                      className="ml-auto border-primary/30 bg-primary/15 text-[10px] text-primary"
                    >
                      {project.grant}
                    </Badge>
                  )}
                </div>

                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                    className={cn(
                      "object-cover transition-transform duration-700",
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-90" />
                </div>

                <CardHeader className="relative z-10 pb-2">
                  <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 flex-grow">
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="secondary"
                        className="px-2 py-0.5 font-mono text-[11px]"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 mt-auto flex gap-2 border-t border-border/40 pt-4">
                  {project.links.github && (
                    <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="group/btn gap-1.5 hover:text-primary">
                        <GithubIcon className="h-4 w-4" />
                        <span className="relative">
                          Repo
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover/btn:w-full" />
                        </span>
                      </Button>
                    </Link>
                  )}

                  {project.links.live && (
                    <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="group/btn gap-1.5 hover:text-primary">
                        <ExternalLinkIcon className="h-4 w-4" />
                        <span className="relative">
                          Live
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover/btn:w-full" />
                        </span>
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
