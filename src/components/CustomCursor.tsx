import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [big, setBig] = useState(false);

  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      gsap.to(dotRef.current, { x, y, duration: 0.12, ease: 'power2.out' });
    };

    const render = () => {
      gsap.to(glowRef.current, { x, y, duration: 0.5, ease: 'power2.out' });
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setBig(!!(t.closest('a') || t.closest('button') || t.classList.contains('cursor-grow')));
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    gsap.ticker.add(render);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      gsap.ticker.remove(render);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className={`spotlight-cursor hidden md:block ${big ? 'big' : ''}`} />
      <div ref={dotRef} className="cursor-ring hidden md:block" />
    </>
  );
}
