const steps = [
  {
    number: "01",
    title: "Rule-Based Expert Data Collection",
    description:
      "Driving demonstrations are collected inside MetaDrive using a rule-based expert to capture RGB observations together with control actions.",
  },
  {
    number: "02",
    title: "Dataset Structuring",
    description:
      "The raw trajectories are organized into RGB frames, action tuples, ego-state features, and simulator metadata stored for supervised learning.",
  },
  {
    number: "03",
    title: "Depth and Lane Priors",
    description:
      "DepthAnythingV2 generates depth maps while lane masks are combined with RGB using an alpha curriculum that gradually reveals more scene context.",
  },
  {
    number: "04",
    title: "Phase 1: Behavioral Cloning",
    description:
      "A fused policy backbone learns steering and acceleration from expert trajectories, using curriculum learning to stabilize early imitation training.",
  },
  {
    number: "05",
    title: "Phase 2: PPO Fine-Tuning",
    description:
      "The cloned policy is refined with reinforcement learning so it can optimize route progress, safety, and traffic-light-aware decision-making.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            System Pipeline
          </h2>
          <p className="text-lg text-muted-foreground">
            From expert trajectories to depth-guided policy learning and RL refinement
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Vertical line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[23px] top-12 w-px h-[calc(100%-3rem)] bg-border" />
              )}

              {/* Step number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
