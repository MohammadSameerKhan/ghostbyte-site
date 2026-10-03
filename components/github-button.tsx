import { ArrowUpRight } from 'lucide-react'

export function GithubButton() {
  return (
    <a
      href="https://github.com/MohammadSameerKhan/ghostbyte-shorts-pipeline"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 shadow-[0_0_18px_rgb(0_180_255/0.35)] hover:-translate-y-0.5 hover:bg-highlight hover:shadow-[0_0_26px_rgb(34_211_238/0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
    >
      View on GitHub
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  )
}
