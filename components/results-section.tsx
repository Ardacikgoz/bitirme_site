import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const results = [
  {
    metric: "Mean Reward",
    value: "434.5",
    description: "Average reward reported in the PPO evaluation summary",
  },
  {
    metric: "Best Reward",
    value: "904.2",
    description: "Peak reward observed during the reported evaluation run",
  },
  {
    metric: "TL Compliance",
    value: "95.4%",
    description: "Traffic-light compliance achieved in the evaluation table",
  },
  {
    metric: "Road Completion",
    value: "39.4%",
    description: "Best reported completion among the curriculum-learning variants",
  },
]

const achievements = [
  "Curriculum learning improved road completion from 17.5% to 39.4% in the IL setting.",
  "Fine-tuning DepthAnythingV2 produced sharper spatial cues for obstacle-aware policy rollouts.",
  "Grad-CAM++ heatmaps exposed where the model focuses for steering and acceleration decisions.",
  "The RL phase improved reward shaping and traffic-light-aware behavior, but stability remains an open challenge.",
  "The current system remains strongest in structured simulation and is still being expanded toward tougher urban scenarios.",
]

export function ResultsSection() {
  return (
    <section id="results" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Results & Achievements
          </h2>
          <p className="text-lg text-muted-foreground">
            Poster-reported metrics, training outcomes, and current limitations
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {results.map((result) => (
            <Card key={result.metric} className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground">
                  {result.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-foreground">{result.metric}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {result.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements List */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Key Achievements
          </h3>
          <ul className="space-y-4">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
