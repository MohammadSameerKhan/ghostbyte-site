import { ProjectHeader } from '@/components/project-header'
import { WorkflowWindow } from '@/components/workflow-window'
import { HowItWorks } from '@/components/how-it-works'
import { StackTags } from '@/components/stack-tags'
import { GithubButton } from '@/components/github-button'
import { TechBackground } from '@/components/tech-background'
import { MarbleTexture } from '@/components/marble-texture'

export default function Page() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 py-12 sm:px-6 sm:py-20">
      <TechBackground />

      <article className="marble-card relative isolate w-full max-w-4xl animate-fade-in overflow-hidden rounded-2xl bg-card">
        <MarbleTexture />

        <div className="relative p-6 sm:p-10 lg:p-12">
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
        </div>
      </article>
    </main>
  )
}
