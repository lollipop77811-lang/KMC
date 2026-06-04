import { useRef, MouseEvent } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'navy';
}

export default function MagneticButton({ children, className = '', onClick, to, variant = 'primary' }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  const move = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    gsap.to(ref.current, { x: x * 0.25, y: y * 0.35, duration: 0.5, ease: 'power3.out' });
  };
  const leave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.3)' });
  };

  const variants: Record<string, string> = {
    primary: 'bg-[var(--color-teal)] text-white hover:bg-[var(--color-teal-dark)] shadow-lg shadow-teal-900/20',
    navy: 'bg-[var(--color-navy)] text-white hover:bg-[#1E3A5F] shadow-lg shadow-slate-900/20',
    outline: 'border-2 border-[var(--color-teal)] text-[var(--color-teal)] hover:bg-[var(--color-teal)] hover:text-white',
    ghost: 'bg-white/80 backdrop-blur text-[var(--color-navy)] border border-[var(--color-border)] hover:shadow-lg',
  };

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      onClick={handleClick}
      className={`pill-btn ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
    </button>
  );
}
