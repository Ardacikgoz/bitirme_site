import { Brain, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#top" className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-foreground" />
              <span className="font-bold text-foreground">VisHybrid-X</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © 2026 Hacettepe University Artificial Intelligence Engineering Graduation Project.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pipeline
            </a>
            <a
              href="#visualizations"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Visualizations
            </a>
            <a
              href="#results"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              Results
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
