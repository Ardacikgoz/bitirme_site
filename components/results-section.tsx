import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const results = [
  {
    metric: "Best Learned Completion",
    value: "36.0%",
    description: "CL IL+RL achieved the highest route completion among the learned model variants.",
  },
  {
    metric: "Best IL Completion",
    value: "32.6%",
    description: "CL IL delivered the strongest pure imitation-learning route completion score.",
  },
  {
    metric: "Best Learned Safety",
    value: "85.7%",
    description: "RGB IL+RL recorded the highest safe driving score among the learned variants.",
  },
  {
    metric: "Lowest Crash Rate",
    value: "0.0%",
    description: "RGB RL and RGB IL+RL both avoided vehicle crashes in the reported runs.",
  },
]

const modelResults = [
  {
    name: "RGB IL",
    routeCompletion: "14.7%",
    safeDriving: "83.5%",
    outOfRoad: "40.0%",
    crashVehicle: "4.0%",
  },
  {
    name: "RGB RL",
    routeCompletion: "6.0%",
    safeDriving: "65.0%",
    outOfRoad: "100.0%",
    crashVehicle: "0.0%",
  },
  {
    name: "RGB IL+RL",
    routeCompletion: "4.0%",
    safeDriving: "85.7%",
    outOfRoad: "40.0%",
    crashVehicle: "0.0%",
  },
  {
    name: "CL IL",
    routeCompletion: "32.6%",
    safeDriving: "75.2%",
    outOfRoad: "40.0%",
    crashVehicle: "28.0%",
  },
  {
    name: "CL IL+RL",
    routeCompletion: "36.0%",
    safeDriving: "65.3%",
    outOfRoad: "36.0%",
    crashVehicle: "56.0%",
  },
  {
    name: "MetaDrive Expert",
    routeCompletion: "86.3%",
    safeDriving: "89.8%",
    outOfRoad: "8.0%",
    crashVehicle: "16.0%",
  },
]

const achievements = [
  "Curriculum learning substantially improved pure imitation performance, lifting route completion from 14.7% in RGB IL to 32.6% in CL IL.",
  "The strongest learned completion came from CL IL+RL at 36.0%, outperforming all RGB-only learned variants on route completion.",
  "RL did not consistently improve safety metrics in this table, showing that route progress and robustness are still in tension.",
  "RGB IL+RL and RGB RL both reached a 0.0% crash vehicle rate, but their route completion remained low.",
  "MetaDrive Expert remains the upper-bound reference with 86.3% route completion and 89.8% safe driving score.",
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
            Benchmark comparison across RGB, curriculum-learning, RL, and expert driving variants
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

        <div className="max-w-6xl mx-auto mb-16 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-secondary/60">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-foreground">Model Variant</th>
                  <th className="px-4 py-3 text-sm font-semibold text-foreground">Route Completion</th>
                  <th className="px-4 py-3 text-sm font-semibold text-foreground">Safe Driving Score</th>
                  <th className="px-4 py-3 text-sm font-semibold text-foreground">Out of Road Rate</th>
                  <th className="px-4 py-3 text-sm font-semibold text-foreground">Crash Vehicle Rate</th>
                </tr>
              </thead>
              <tbody>
                {modelResults.map((row, index) => (
                  <tr
                    key={row.name}
                    className={index % 2 === 0 ? "border-t border-border bg-background" : "border-t border-border bg-secondary/20"}
                  >
                    <td className="px-4 py-3 font-medium text-foreground">{row.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.routeCompletion}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.safeDriving}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.outOfRoad}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.crashVehicle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Achievements List */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Key Takeaways
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
