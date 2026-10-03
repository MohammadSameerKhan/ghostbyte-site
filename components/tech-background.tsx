const circuitPaths = [
  'M0 180 H260 L320 240 H520 L560 200 H720',
  'M1440 140 H1180 L1120 200 H940 L900 160 H820',
  'M0 720 H180 L240 660 H420 L470 710 H600',
  'M1440 760 H1240 L1180 700 H1020 L980 740 H880',
  'M120 0 V90 L170 140 V300',
  'M1320 900 V800 L1270 750 V600',
]

const nodes = [
  { cx: 260, cy: 180, delay: '0s' },
  { cx: 520, cy: 240, delay: '1.2s' },
  { cx: 720, cy: 200, delay: '2.6s' },
  { cx: 1180, cy: 140, delay: '0.6s' },
  { cx: 940, cy: 200, delay: '3.1s' },
  { cx: 180, cy: 720, delay: '1.8s' },
  { cx: 420, cy: 660, delay: '0.3s' },
  { cx: 1240, cy: 760, delay: '2.2s' },
  { cx: 1020, cy: 700, delay: '3.8s' },
  { cx: 170, cy: 300, delay: '1.5s' },
  { cx: 1270, cy: 600, delay: '4.2s' },
]

const particles = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 17) % 100}%`,
  size: i % 3 === 0 ? 2 : 1.5,
  duration: `${20 + ((i * 7) % 14)}s`,
  delay: `-${(i * 3.3) % 24}s`,
}))

export function TechBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgb(0 180 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(0 180 255 / 0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="#00B4FF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          {circuitPaths.map((d) => (
            <path key={d} d={d} opacity="0.14" />
          ))}
          {circuitPaths.slice(0, 4).map((d, i) => (
            <path
              key={`flow-${d}`}
              d={d}
              opacity="0.5"
              strokeDasharray="24 976"
              className="animate-circuit-flow"
              style={{ animationDelay: `-${i * 3.5}s` }}
            />
          ))}
        </g>
        <g fill="#00B4FF">
          {nodes.map((node) => (
            <g key={`${node.cx}-${node.cy}`}>
              <circle cx={node.cx} cy={node.cy} r="6" opacity="0.12" />
              <circle
                cx={node.cx}
                cy={node.cy}
                r="2.5"
                className="animate-node-pulse"
                style={{ animationDelay: node.delay }}
              />
            </g>
          ))}
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 h-[min(780px,110vh)] w-[min(1100px,140vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(0_180_255/0.16),rgb(0_120_255/0.06)_55%,transparent)]" />

      {particles.map((p) => (
        <span
          key={`${p.left}-${p.top}`}
          className="absolute animate-drift rounded-full bg-[#9fe4ff]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 6px rgb(34 211 238 / 0.8)',
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
