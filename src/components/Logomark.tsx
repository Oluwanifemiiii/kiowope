interface LogomarkProps {
  size?: number
}

const diamonds = [
  { x: 50, y: 24, fill: '#1D3F78' },
  { x: 24, y: 50, fill: '#E6B030' },
  { x: 76, y: 50, fill: '#E6B030' },
  { x: 50, y: 76, fill: '#1D3F78' },
]

export default function Logomark({ size = 32 }: LogomarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {diamonds.map((d) => (
        <rect
          key={`${d.x}-${d.y}`}
          x={-15}
          y={-15}
          width={30}
          height={30}
          rx={5.5}
          fill={d.fill}
          transform={`translate(${d.x} ${d.y}) rotate(45)`}
        />
      ))}
    </svg>
  )
}
