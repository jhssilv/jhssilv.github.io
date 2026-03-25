import { Mail, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border/40 bg-secondary/20 py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-primary">// contact</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground">
              Let&apos;s Build Something
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Available for international contracts and technical consulting.
              Expertise in production AI/ML data infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button className="gap-2 font-mono" size="lg" asChild>
                <a href="mailto:contact@example.com">
                  <Mail className="h-4 w-4" />
                  Direct Inquiry
                </a>
              </Button>
              <Button
                variant="outline"
                className="gap-2 font-mono"
                size="lg"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Status/Location */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">
                Remote • US / EU / Australia
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                Open to new projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} • Built with precision engineering
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
