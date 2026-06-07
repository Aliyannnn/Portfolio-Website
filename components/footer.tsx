import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#build-logs", label: "Build Logs" },
  { href: "#contact", label: "Contact" },
]

const socials = [
  { href: "https://github.com/Aliyannnn", label: "GitHub", Icon: Github },
  { href: "https://x.com/Aliyann712709", label: "Twitter", Icon: Twitter },
  { href: "https://www.linkedin.com/in/aliyan-arif-9b4179377/", label: "LinkedIn", Icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              <span className="font-mono text-primary">~</span>/Aliyan Arif
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Full Stack Web Developer passionate about building modern, scalable,
              and user-friendly applications.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              open to opportunities
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm text-muted-foreground">$ quick-links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="mr-2 text-primary/50 transition-transform group-hover:translate-x-0.5">
                      ›
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm text-muted-foreground">$ connect</h3>
            <div className="flex space-x-3">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="border border-border/50 bg-card/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="mailto:aliyan989pc@gmail.com"
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                aliyan989pc@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aliyan Arif. All rights reserved.</p>
          <p className="mt-1 font-mono text-xs">
            <span className="text-primary/60">{"<"}</span> Built with Next.js, Tailwind, and shadcn/ui{" "}
            <span className="text-primary/60">{"/>"}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
