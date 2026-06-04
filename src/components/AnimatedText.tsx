import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const words = containerRef.current.querySelectorAll('.word');
    
    gsap.fromTo(
      words,
      { y: 60, opacity: 0, rotateX: -20 },
      { 
        y: 0, 
        opacity: 1, 
        rotateX: 0, 
        stagger: 0.08, 
        duration: 0.9, 
        delay,
        ease: "power3.out", 
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: "top 85%" 
        } 
      }
    );
  }, [text, delay]);

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap gap-x-3`}>
      {words.map((word, index) => (
        <span key={index} className="word-span">
          <span className="word">{word}</span>
        </span>
      ))}
    </div>
  );
}
