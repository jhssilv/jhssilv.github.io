"use client"

import { useState } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#solutions", label: "Solutions" },
  { href: "#architecture", label: "Architecture" },
  { href: "https://github.com", label: "GitHub", external: true },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-foreground">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm font-medium">jhssilv</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border/40 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
