"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { GithubIcon, LinkedinIcon, TwitterIcon, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { id: "home", href: "/", label: "Home" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "tech-stack", href: "#tech-stack", label: "Tech Stack" },
  { id: "build-logs", href: "#build-logs", label: "Build Logs" },
  { id: "contact", href: "#contact", label: "Contact" },
]

const socials = [
  { href: "https://github.com/Aliyannnn", label: "GitHub", Icon: GithubIcon },
  { href: "https://x.com/Aliyann712709", label: "Twitter", Icon: TwitterIcon },
  { href: "https://www.linkedin.com/in/aliyan-arif-9b4179377/", label: "LinkedIn", Icon: LinkedinIcon },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll-spy: highlight the section currently in view
  React.useEffect(() => {
    const sectionIds = navItems.filter((i) => i.href.startsWith("#")).map((i) => i.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        } else if (window.scrollY < 200) {
          setActiveSection("home")
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false)
    if (href === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActiveSection("home")
      return
    }
    if (href.startsWith("#")) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/70 py-2.5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleSmoothScroll(e, "/")}
          className="group flex items-center gap-1 font-mono text-base font-semibold"
        >
          <span className="text-primary">~</span>
          <span className="text-foreground transition-colors group-hover:text-primary">
            /aliyan
          </span>
          <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse rounded-[1px] bg-primary/70" />
        </Link>

        {/* Desktop Nav — sliding indicator pill */}
        <nav className="hidden items-center gap-1 rounded-full border border-border/50 bg-card/40 p-1 backdrop-blur-md md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors lg:px-4",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-1 sm:flex">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-muted-foreground hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              </a>
            ))}
          </div>
          <ModeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="container space-y-1 py-4">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.id
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      )}
                    >
                      <span className={cn("font-mono text-xs", isActive ? "text-primary" : "text-primary/40")}>
                        {isActive ? "›" : "·"}
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="flex items-center gap-2 border-t border-border/60 pt-3">
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </Button>
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
