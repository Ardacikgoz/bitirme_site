"use client"

import { Button } from "@/components/ui/button"
import { Brain, Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Contributions", href: "#features" },
  { label: "Pipeline", href: "#how-it-works" },
  { label: "Visualizations", href: "#visualizations" },
  { label: "Results", href: "#results" },
  { label: "Team", href: "#team" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-foreground" />
            <span className="font-bold text-lg text-foreground">VisHybrid-X</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" asChild>
              <a href="#results">See Results</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" className="w-fit" asChild>
                <a href="#results">See Results</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
