export function ProjectHeader() {
  return (
    <header className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">GhostByte</h1>
      <p className="text-lg text-foreground text-pretty sm:text-xl">
        A fully automated pipeline that generates and uploads YouTube Shorts on a schedule.
      </p>
      <p className="max-w-2xl leading-relaxed text-muted-foreground text-pretty">
        Every 3 hours it picks a topic, writes a script, renders a video, and uploads it to YouTube.
        It runs unattended.
      </p>
    </header>
  )
}
