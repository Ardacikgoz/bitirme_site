export function DemoSection() {
  return (
    <section id="demo" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Demo Video
          </h2>
          <p className="text-lg text-muted-foreground">
            A short walkthrough of the VisHybrid-X pipeline running in simulation.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/PF0rV_4dvc4"
              title="VisHybrid-X demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
