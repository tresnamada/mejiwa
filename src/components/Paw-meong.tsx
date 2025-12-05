"use client"

interface PawPrintProps {
  color?: string
}

export default function PawPrint({ color = "#00296B" }: PawPrintProps) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* tengah */}
      <ellipse cx="40" cy="55" rx="12" ry="15" fill={color} />

      {/* kiri ata */}
      <ellipse cx="18" cy="25" rx="8" ry="12" fill={color} transform="rotate(-35 18 25)" />

      {/* kiri tengah */}
      <ellipse cx="32" cy="12" rx="8" ry="12" fill={color} transform="rotate(-15 32 12)" />

      {/* kanan tengah */}
      <ellipse cx="48" cy="10" rx="8" ry="12" fill={color} transform="rotate(15 48 10)" />

      {/* kanan bawah */}
      <ellipse cx="62" cy="22" rx="8" ry="12" fill={color} transform="rotate(35 62 22)" />
    </svg>
  )
}
