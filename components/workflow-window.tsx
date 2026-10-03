import Image from 'next/image'

export function WorkflowWindow() {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-background">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-white/15" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-white/15" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-white/15" />
        <figcaption className="ml-3 truncate font-mono text-xs text-muted-foreground">
          GhostByte Auto Upload
        </figcaption>
      </div>
      <div
        className="overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="Workflow screenshot, scroll horizontally to see all of it"
      >
        <Image
          src="/workflow.png"
          alt="The GhostByte Auto Upload workflow in n8n: Schedule Trigger, Gemini, HTTP Request2, Read/Write Files from Disk, and Upload a video, connected left to right."
          width={2048}
          height={1284}
          priority
          className="block h-auto w-full min-w-[640px]"
        />
      </div>
    </figure>
  )
}
