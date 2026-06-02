import { GraduationCap, Lightbulb, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About the Project
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            VisHybrid-X studies whether a camera-only policy can remain reliable in adverse
            driving conditions by blending expert demonstrations with learned control and
            interpretable perception signals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Objective</h3>
            <p className="text-muted-foreground">
              Build a cost-effective and robust vision-only autonomous driving framework as
              an alternative to LiDAR-heavy sensor stacks.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Motivation</h3>
            <p className="text-muted-foreground">
              Reduce over-reliance on raw visual textures by injecting lane priors, depth
              cues, and structured training stages that improve generalization.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Academic Scope</h3>
            <p className="text-muted-foreground">
              Developed at Hacettepe University, Department of Artificial Intelligence
              Engineering, by Arda Açıkgöz, Berke Kutlu, Mehmet Furkan Çalışkan, and
              İbrahim Büyükkafes under the supervision of Prof. Dr. Mehmet Önder Efe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
