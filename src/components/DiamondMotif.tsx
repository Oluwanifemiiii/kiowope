import type { CSSProperties } from 'react'

interface DiamondMotifProps {
  className?: string
  /** 'full' adds the outlined lattice around the cluster; 'cluster' draws only the four diamonds. */
  variant?: 'full' | 'cluster'
  /** 'dark' is tuned for navy backgrounds and adds a soft gold glow. */
  tone?: 'light' | 'dark'
}

const diamonds = [
  { id: 'n1', x: 240, y: 131, lx: 0.707, ly: 0.707, from: '#12306A', to: '#4276BC', darkFrom: '#2B5CA8', darkTo: '#8DB3EC' },
  { id: 'g1', x: 131, y: 240, lx: 0.707, ly: -0.707, from: '#E0A526', to: '#F8DC78', darkFrom: '#E0A526', darkTo: '#F8DC78' },
  { id: 'g2', x: 349, y: 240, lx: -0.707, ly: 0.707, from: '#E0A526', to: '#F8DC78', darkFrom: '#E0A526', darkTo: '#F8DC78' },
  { id: 'n2', x: 240, y: 349, lx: -0.707, ly: -0.707, from: '#12306A', to: '#4276BC', darkFrom: '#2B5CA8', darkTo: '#8DB3EC' },
]

export default function DiamondMotif({ className, variant = 'full', tone = 'light' }: DiamondMotifProps) {
  const dark = tone === 'dark'
  const stroke = dark ? '#FFFFFF' : '#0F2347'
  const gid = (id: string) => `motif-${tone}-${id}`

  return (
    <svg className={className} viewBox="0 0 480 480" fill="none" aria-hidden="true">
      <defs>
        {diamonds.map((d) => (
          <linearGradient
            key={d.id}
            id={gid(d.id)}
            x1={0.5 - 0.5 * d.lx}
            y1={0.5 - 0.5 * d.ly}
            x2={0.5 + 0.5 * d.lx}
            y2={0.5 + 0.5 * d.ly}
          >
            <stop offset="0" stopColor={dark ? d.darkFrom : d.from} />
            <stop offset="1" stopColor={dark ? d.darkTo : d.to} />
          </linearGradient>
        ))}
        <filter id="motif-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="46" />
        </filter>
      </defs>

      {dark && <circle cx="240" cy="240" r="110" fill="#E0A526" opacity="0.28" filter="url(#motif-blur)" />}

      {variant === 'full' && (
        <>
          <g className="motif__lattice" stroke={stroke} strokeWidth="1.5">
            <rect x="-132" y="-132" width="264" height="264" rx="10" transform="translate(240 240) rotate(45)" strokeOpacity={dark ? 0.3 : 0.14} />
            <rect x="-98" y="-98" width="196" height="196" rx="8" transform="translate(240 240) rotate(45)" strokeOpacity={dark ? 0.18 : 0.08} />
          </g>
          <g className="motif__lattice motif__lattice--reverse" stroke={stroke} strokeWidth="1.5">
            <rect x="-166" y="-166" width="332" height="332" rx="12" transform="translate(240 240) rotate(45)" strokeOpacity={dark ? 0.12 : 0.06} />
          </g>
        </>
      )}

      {diamonds.map((d, i) => (
        <g key={d.id} className="motif__float" style={{ animationDelay: `${1.4 + i * 0.9}s` } as CSSProperties}>
          <g
            className="motif__in"
            style={
              {
                '--dx': `${240 - d.x}px`,
                '--dy': `${240 - d.y}px`,
                animationDelay: `${0.15 + i * 0.12}s`,
              } as CSSProperties
            }
          >
            <rect
              x={-63}
              y={-63}
              width={126}
              height={126}
              rx={23}
              fill={`url(#${gid(d.id)})`}
              transform={`translate(${d.x} ${d.y}) rotate(45)`}
            />
          </g>
        </g>
      ))}
    </svg>
  )
}
