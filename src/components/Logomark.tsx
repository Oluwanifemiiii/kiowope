interface LogomarkProps {
  size?: number
}

export default function Logomark({ size = 26 }: LogomarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 22 L14 8 L24 16" stroke="#D08A2C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="22" r="3" fill="#14170F" />
      <circle cx="14" cy="8" r="3" fill="#D08A2C" />
      <circle cx="24" cy="16" r="3" fill="#14170F" />
    </svg>
  )
}
