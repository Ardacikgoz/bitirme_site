import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Mehmet Furkan Çalışkan",
    role: "Author",
    bio: "Worked on the design, implementation, and evaluation of the vision-only autonomous driving pipeline.",
    avatar: "MÇ",
  },
  {
    name: "Arda Açıkgöz",
    role: "Author",
    bio: "Contributed to the VisHybrid-X pipeline, experimentation flow, and project presentation.",
    avatar: "AA",
  },
  {
    name: "İbrahim Büyükkafes",
    role: "Author",
    bio: "Contributed to model development, experimentation, and the system evaluation process.",
    avatar: "İB",
  },
  {
    name: "Berke Kutlu",
    role: "Author",
    bio: "Contributed to the system design, implementation details, and research communication.",
    avatar: "BK",
  },
  {
    name: "Prof. Dr. Mehmet Önder Efe",
    role: "Faculty Advisor",
    bio: "Advisor for the graduation project at Hacettepe University.",
    avatar: "MÖ",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Authors & Advisor
          </h2>
          <p className="text-lg text-muted-foreground">
            The people behind the VisHybrid-X graduation project
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {team.map((member) => (
            <Card key={member.name} className="text-center">
              <CardContent className="pt-6">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Hacettepe University
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
