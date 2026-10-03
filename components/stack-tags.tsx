const stack = ['n8n (self-hosted, Docker)', 'Google Gemini', 'local render service', 'YouTube Data API']

export function StackTags() {
  return (
    <section aria-labelledby="stack">
      <h2 id="stack" className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Stack
      </h2>
      <ul className="mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-primary/35 bg-[#03101f]/70 px-3 py-1 font-mono text-xs text-primary shadow-[0_0_12px_rgb(0_180_255/0.12)] transition-colors duration-300 hover:border-highlight/60 hover:text-highlight"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
