const steps = [
  { name: 'Schedule Trigger', detail: 'Fires every 3 hours.' },
  {
    name: 'Gemini',
    detail:
      'Writes a title, a script under 60 seconds spoken, and search keywords for a rotating topic.',
  },
  {
    name: 'HTTP Request2',
    detail: 'Sends the script and keywords to a local render service that builds the video.',
  },
  { name: 'Read/Write Files from Disk', detail: 'Picks up the rendered video file.' },
  { name: 'Upload a video', detail: 'Pushes it straight to YouTube via the Data API.' },
]

export function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works">
      <h2 id="how-it-works" className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        How it works
      </h2>
      <ol className="mt-6 grid gap-6 lg:grid-cols-5 lg:gap-5">
        {steps.map((step, index) => (
          <li key={step.name} className="flex gap-4 lg:flex-col lg:gap-3">
            <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, '0')}</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-medium text-foreground">{step.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
