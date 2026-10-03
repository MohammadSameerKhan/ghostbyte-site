export function MarbleTexture() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 1400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="marble-base" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0b1d3a" />
            <stop offset="35%" stopColor="#061127" />
            <stop offset="65%" stopColor="#0a1a36" />
            <stop offset="100%" stopColor="#040a18" />
          </linearGradient>

          <filter id="marble-veins-soft" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.0028 0.009" numOctaves="5" seed="11" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.78  0 0 0 0 0.88  0 0 0 0 1  1 0 0 0 0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0 0 0.05 0.75 0.05 0 0 0" />
            </feComponentTransfer>
          </filter>

          <filter id="marble-veins-fine" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.016" numOctaves="4" seed="3" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.6  0 0 0 0 0.8  0 0 0 0 1  1 0 0 0 0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0 0 0 0.9 0 0 0 0" />
            </feComponentTransfer>
          </filter>

          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1000" height="1400" fill="url(#marble-base)" />
        <rect width="1000" height="1400" filter="url(#marble-veins-soft)" opacity="0.32" />
        <rect width="1000" height="1400" filter="url(#marble-veins-fine)" opacity="0.14" />

        <g fill="none" strokeLinecap="round" filter="url(#neon-glow)">
          <path
            d="M-20 260 C 140 220, 220 360, 380 330 S 620 200, 760 280 S 940 420, 1040 380"
            stroke="#00B4FF"
            strokeWidth="1.2"
            opacity="0.55"
          />
          <path
            d="M-20 980 C 120 1020, 260 900, 420 960 S 700 1120, 860 1040 S 980 960, 1040 1000"
            stroke="#00B4FF"
            strokeWidth="1"
            opacity="0.45"
          />
          <path
            d="M640 -20 C 600 160, 700 300, 660 460 S 560 720, 620 900"
            stroke="#22D3EE"
            strokeWidth="0.8"
            opacity="0.3"
          />
          <path
            d="M380 330 C 420 420, 360 520, 410 600"
            stroke="#00B4FF"
            strokeWidth="0.7"
            opacity="0.35"
          />
        </g>
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgb(3_8_20/0.35),rgb(3_8_20/0.62))]" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#cfeeff]/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#bfe6ff]/[0.06] to-transparent" />
    </div>
  )
}
