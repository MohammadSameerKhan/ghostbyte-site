import { ProjectHeader } from '@/components/project-header'
import { WorkflowWindow } from '@/components/workflow-window'
import { HowItWorks } from '@/components/how-it-works'
import { StackTags } from '@/components/stack-tags'
import { GithubButton } from '@/components/github-button'

export default function Page() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 py-12 sm:px-6 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[min(900px,120vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <article className="relative w-full max-w-4xl animate-fade-in rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-black/50 sm:p-10 lg:p-12">
        <ProjectHeader />

        <div className="mt-10">
          <WorkflowWindow />
        </div>

        <div className="mt-12">
          <HowItWorks />
        </div>

        <div className="mt-12">
          <StackTags />
        </div>

        <div className="mt-12 flex flex-col items-start gap-8 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <GithubButton />
          <footer className="text-sm text-muted-foreground">Built by Mohammad Sameer Khan.</footer>
        </div>
      </article>
    </main>
  )
}
