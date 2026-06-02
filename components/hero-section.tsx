import { Button } from "@/components/ui/button"
import { ArrowRight, Brain } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-8">
          <Brain className="h-4 w-4" />
          <span>Hacettepe University AI Engineering Graduation Project</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Multi-Stage Vision Only
          <span className="block text-muted-foreground">Autonomous Driving: VisHybrid-X</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          A vision-only driving framework that combines imitation learning, curriculum
          learning, depth-aware perception, and PPO-based reinforcement learning for robust
          decision-making in the MetaDrive simulator.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2" asChild>
            <a href="#how-it-works">
              Explore Pipeline
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#results">
              View Results
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "4", label: "Team Members" },
            { value: "1", label: "Advisor" },
            { value: "2", label: "Learning Stages" },
            { value: "XAI", label: "Explainability Focus" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
