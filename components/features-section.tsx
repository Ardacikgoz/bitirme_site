import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Layers } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Curriculum Learning",
    description:
      "Lane-mask curriculum learning gradually increases RGB context during imitation training so the policy learns geometry-aware behavior before relying on full-scene textures.",
  },
  {
    icon: Zap,
    title: "Hybrid IL + RL Training",
    description:
      "The policy first learns from expert demonstrations through behavioral cloning, then is refined with PPO to improve control quality and route progress.",
  },
  {
    icon: Shield,
    title: "Depth-Aware Perception",
    description:
      "DepthAnythingV2 is fine-tuned to generate scale-shift invariant depth maps that complement RGB input and strengthen obstacle-aware reasoning.",
  },
  {
    icon: Layers,
    title: "Explainable Decision Support",
    description:
      "Grad-CAM++ visualizations reveal which regions influence steering and acceleration so model behavior can be inspected, compared, and debugged.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Core Contributions
          </h2>
          <p className="text-lg text-muted-foreground">
            The poster highlights three ideas that define the VisHybrid-X research direction
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary mb-4">
                  <feature.icon className="h-5 w-5 text-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
