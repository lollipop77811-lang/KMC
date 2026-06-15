import { Quote } from 'lucide-react'
import chairmanImg from '../assets/chairman.webp'

interface SectionProps {
  name: string
  message: string[]
  role?: string
}

interface PortraitProps {
  name: string
  imgSrc?: string
  role?: string
  compact?: boolean
}

function PortraitCard({ name, imgSrc, role, compact }: PortraitProps) {
  const imgW = compact ? 160 : 200
  const imgH = compact ? 200 : 250
  const offset = compact ? 8 : 10
  const wrapperH = compact ? 260 : 310

  return (
    <div className="shrink-0 self-center relative group cursor-pointer" style={{ width: compact ? 200 : 240, height: wrapperH }}>
      <div className="absolute rounded-[10px] bg-[#e8a87c]" style={{ top: offset, left: offset, width: imgW, height: imgH }} />
      <div className="absolute rounded-[10px] overflow-hidden border-[3px] border-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]" style={{ top: 0, left: 0, width: imgW, height: imgH }}>
        <img src={imgSrc || chairmanImg} alt={role || 'Portrait'} className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-105" />
      </div>

      <div className="absolute text-center" style={{ top: imgH + 20, left: '50%', transform: 'translateX(-50%)', width: imgW }}>
        <p className="text-[13px] font-medium" style={{ color: '#1a3a31' }}>{name}</p>
        <p className="text-[11px]" style={{ color: '#6b7c75' }}>{role || 'Chairman'}</p>

      </div>
    </div>
  )
}

export default function ChairmanSection({ name, message, role }: SectionProps) {
  return (
    <div className="bg-white rounded-[2rem] p-10 md:p-14 border border-[var(--color-border)]">
      <Quote size={32} className="text-[var(--color-teal)]/30 mb-6" />
      <div className="space-y-5 text-lg text-[var(--color-text)] leading-relaxed">
        {message.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
        <p className="font-serif text-2xl font-bold text-[var(--color-navy)]">{name}</p>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">{role || 'Chairman'}</p>
      </div>
    </div>
  )
}

export { PortraitCard }
