import { useRef, useEffect, useCallback } from 'react';

// ─── Color Palette (Teal & Rose — Option A) ────────────────────────────────
const COLORS = {
  bg: 'rgba(10, 22, 40, 1)',           // #0A1628 dark navy
  bgFade: 'rgba(10, 22, 40, 0.18)',    // fade overlay for trails

  strand1Core: [0, 191, 165],          // Teal #00BFA5
  strand1Glow: [100, 255, 218],        // Light teal #64FFDA
  strand2Core: [244, 143, 177],        // Rose #F48FB1
  strand2Glow: [255, 128, 171],        // Light rose #FF80AB

  basePairLine: [224, 247, 250],       // Warm white #E0F7FA
  centerGlow: [0, 191, 165],           // Teal glow for center ambiance
};

// ─── Interfaces ─────────────────────────────────────────────────────────────
interface Particle {
  // Helix position
  strand: 0 | 1;          // which strand (0 or 1)
  t: number;              // parameter along helix (0 to 1, vertical position)
  phase: number;          // phase offset for organic motion
  depth: number;          // 0–1 depth layering

  // Visual properties
  radius: number;
  baseRadius: number;
  opacity: number;
  baseOpacity: number;

  // Animation state
  scatterX: number;
  scatterY: number;
  scatterVX: number;
  scatterVY: number;

  // Trail
  trail: Array<{ x: number; y: number; opacity: number }>;
}

interface DNAHelixProps {
  className?: string;
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function DNAHelix({ className = '' }: DNAHelixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  // ── Create particles ──────────────────────────────────────────────────────
  const initParticles = useCallback((_width: number, _height: number) => {
    const particles: Particle[] = [];
    const count = 120; // 60 per strand

    for (let i = 0; i < count; i++) {
      const strand = i < count / 2 ? 0 : 1;
      const t = (i % (count / 2)) / (count / 2);

      particles.push({
        strand,
        t,
        phase: Math.random() * Math.PI * 2,
        depth: 0.2 + Math.random() * 0.8,
        radius: (1.5 + Math.random() * 3) * (0.5 + 0.5 * (strand === 0 ? COLORS.strand1Glow[0] / 255 : COLORS.strand2Glow[0] / 255)),
        baseRadius: 0,
        opacity: 0.25 + Math.random() * 0.55,
        baseOpacity: 0,
        scatterX: 0,
        scatterY: 0,
        scatterVX: 0,
        scatterVY: 0,
        trail: [],
      });
      particles[particles.length - 1].baseRadius = particles[particles.length - 1].radius;
      particles[particles.length - 1].baseOpacity = particles[particles.length - 1].opacity;
    }

    particlesRef.current = particles;
  }, []);

  // ── Main animation loop ───────────────────────────────────────────────────
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    timeRef.current += 0.004;
    const time = timeRef.current;

    // ── Clear with fade trail ──────────────────────────────────────────────
    ctx.fillStyle = COLORS.bgFade;
    ctx.fillRect(0, 0, W, H);

    // ── Center ambient glow ────────────────────────────────────────────────
    const cGlow = ctx.createRadialGradient(W * 0.5, H * 0.45, 0, W * 0.5, H * 0.45, W * 0.5);
    cGlow.addColorStop(0, `rgba(${COLORS.centerGlow[0]}, ${COLORS.centerGlow[1]}, ${COLORS.centerGlow[2]}, 0.04)`);
    cGlow.addColorStop(0.5, `rgba(${COLORS.centerGlow[0]}, ${COLORS.centerGlow[1]}, ${COLORS.centerGlow[2]}, 0.015)`);
    cGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = cGlow;
    ctx.fillRect(0, 0, W, H);

    // ── Helix parameters ───────────────────────────────────────────────────
    const centerX = W * 0.5;
    const helixRadius = Math.min(W * 0.18, 140);     // horizontal radius of helix
    const verticalExtent = H * 0.85;                  // vertical span
    const startY = (H - verticalExtent) / 2;
    const rotationAngle = time;                       // slow rotation

    // ── Helper: compute helix position ────────────────────────────────────
    const getHelixPos = (strand: 0 | 1, t: number) => {
      const angle = t * Math.PI * 4 + rotationAngle + (strand === 1 ? Math.PI : 0);
      const x = centerX + Math.cos(angle) * helixRadius;
      const y = startY + t * verticalExtent;
      const z = Math.sin(angle); // -1 to 1, depth
      return { x, y, z };
    };

    // ── Update & draw particles ───────────────────────────────────────────
    for (const p of particles) {
      const helix = getHelixPos(p.strand, p.t);
      const depthScale = 0.4 + 0.6 * ((helix.z + 1) / 2); // front: larger, back: smaller

      // Organic drift noise
      const noiseX = Math.sin(time * 2.5 + p.phase) * 2.5;
      const noiseY = Math.cos(time * 1.8 + p.phase * 1.3) * 2;

      // Target position (helix + noise)
      let targetX = helix.x + noiseX;
      let targetY = helix.y + noiseY;

      // ── Mouse interaction: scatter/unwind ────────────────────────────────
      const dx = targetX - mouse.x;
      const dy = targetY - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const mouseRadius = 200;

      if (mouse.active && dist < mouseRadius) {
        const force = (1 - dist / mouseRadius) * 60 * p.depth;
        const angle = Math.atan2(dy, dx);
        p.scatterVX += Math.cos(angle) * force * 0.15;
        p.scatterVY += Math.sin(angle) * force * 0.15;

        // Brighten near mouse
        p.opacity = Math.min(0.95, p.baseOpacity + (1 - dist / mouseRadius) * 0.4);
        p.radius = p.baseRadius + (1 - dist / mouseRadius) * 3;
      } else {
        // Ease back to base
        p.opacity += (p.baseOpacity - p.opacity) * 0.04;
        p.radius += (p.baseRadius - p.radius) * 0.04;
      }

      // Spring back scatter
      p.scatterVX *= 0.92;
      p.scatterVY *= 0.92;
      p.scatterX += p.scatterVX;
      p.scatterY += p.scatterVY;
      p.scatterX *= 0.94;
      p.scatterY *= 0.94;

      const finalX = targetX + p.scatterX;
      const finalY = targetY + p.scatterY;

      // ── Update trail ────────────────────────────────────────────────────
      p.trail.push({ x: finalX, y: finalY, opacity: p.opacity * depthScale });
      if (p.trail.length > 6) p.trail.shift();

      // ── Pick color based on strand ───────────────────────────────────────
      const coreColor = p.strand === 0 ? COLORS.strand1Core : COLORS.strand2Core;
      const glowColor = p.strand === 0 ? COLORS.strand1Glow : COLORS.strand2Glow;

      // ── Draw trail ───────────────────────────────────────────────────────
      for (let ti = 0; ti < p.trail.length - 1; ti++) {
        const tp = p.trail[ti];
        const trailAlpha = (ti / p.trail.length) * tp.opacity * 0.2;
        const trailR = p.radius * (0.3 + 0.5 * (ti / p.trail.length)) * depthScale;

        if (trailR > 0.3 && trailAlpha > 0.01) {
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, trailR, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${glowColor[0]}, ${glowColor[1]}, ${glowColor[2]}, ${trailAlpha})`;
          ctx.fill();
        }
      }

      // ── Draw glow halo ──────────────────────────────────────────────────
      const glowR = p.radius * depthScale * 5;
      if (glowR > 1) {
        const grad = ctx.createRadialGradient(finalX, finalY, 0, finalX, finalY, glowR);
        grad.addColorStop(0, `rgba(${glowColor[0]}, ${glowColor[1]}, ${glowColor[2]}, ${0.12 * p.opacity * depthScale})`);
        grad.addColorStop(0.4, `rgba(${coreColor[0]}, ${coreColor[1]}, ${coreColor[2]}, ${0.05 * p.opacity * depthScale})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(finalX, finalY, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // ── Draw core dot ───────────────────────────────────────────────────
      const coreR = Math.max(0.5, p.radius * depthScale);
      ctx.beginPath();
      ctx.arc(finalX, finalY, coreR, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${coreColor[0]}, ${coreColor[1]}, ${coreColor[2]}, ${p.opacity * depthScale})`;
      ctx.fill();
    }

    // ── Draw base pair connections ──────────────────────────────────────────
    const basePairCount = 14;
    for (let i = 0; i < basePairCount; i++) {
      const t = (i + 0.5) / basePairCount;
      const pos0 = getHelixPos(0, t);
      const pos1 = getHelixPos(1, t);

      // Add noise same as particles
      const nPhase = i * 1.7;
      const noise0X = Math.sin(time * 2.5 + nPhase) * 2.5;
      const noise0Y = Math.cos(time * 1.8 + nPhase * 1.3) * 2;
      const noise1X = Math.sin(time * 2.5 + nPhase + Math.PI) * 2.5;
      const noise1Y = Math.cos(time * 1.8 + (nPhase + Math.PI) * 1.3) * 2;

      const x0 = pos0.x + noise0X;
      const y0 = pos0.y + noise0Y;
      const x1 = pos1.x + noise1X;
      const y1 = pos1.y + noise1Y;

      // Base pair opacity: brighter when strands are at front, dimmer when at back
      const avgZ = (pos0.z + pos1.z) / 2;
      const baseAlpha = 0.06 + 0.14 * ((avgZ + 1) / 2);

      // Mouse proximity brightening
      const midX = (x0 + x1) / 2;
      const midY = (y0 + y1) / 2;
      const mDist = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
      const mouseBoost = mouse.active && mDist < 200 ? (1 - mDist / 200) * 0.35 : 0;

      // Pulse effect (light traveling along base pairs)
      const pulse = Math.sin(time * 3 - i * 0.8) * 0.04 + 0.04;

      const lineAlpha = Math.min(0.5, baseAlpha + mouseBoost + pulse);

      const bpColor = COLORS.basePairLine;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = `rgba(${bpColor[0]}, ${bpColor[1]}, ${bpColor[2]}, ${lineAlpha})`;
      ctx.lineWidth = 0.6 + ((avgZ + 1) / 2) * 0.8;
      ctx.stroke();

      // Small dots at connection endpoints
      const dotR = 1.2 + ((avgZ + 1) / 2) * 1;
      for (const [px, py] of [[x0, y0], [x1, y1]]) {
        ctx.beginPath();
        ctx.arc(px, py, dotR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${bpColor[0]}, ${bpColor[1]}, ${bpColor[2]}, ${lineAlpha * 1.5})`;
        ctx.fill();
      }
    }

    // ── Mouse glow ─────────────────────────────────────────────────────────
    if (mouse.active) {
      const mGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 120);
      mGrad.addColorStop(0, 'rgba(100, 255, 218, 0.06)');
      mGrad.addColorStop(0.3, 'rgba(244, 143, 177, 0.025)');
      mGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI * 2);
      ctx.fillStyle = mGrad;
      ctx.fill();
    }

    animFrameRef.current = requestAnimationFrame(animate);
  }, []);

  // ── Setup & teardown ───────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let W = canvas.parentElement?.clientWidth || window.innerWidth;
    let H = canvas.parentElement?.clientHeight || window.innerHeight;

    const resize = () => {
      W = canvas!.parentElement?.clientWidth || window.innerWidth;
      H = canvas!.parentElement?.clientHeight || window.innerHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      canvas!.style.width = `${W}px`;
      canvas!.style.height = `${H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Fill initial background
      ctx!.fillStyle = COLORS.bg;
      ctx!.fillRect(0, 0, W, H);

      initParticles(W, H);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking
    const handleMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const handleLeave = () => {
      mouseRef.current.active = false;
    };
    const handleTouch = (e: TouchEvent) => {
      const rect = canvas!.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current.x = touch.clientX - rect.left;
      mouseRef.current.y = touch.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const handleTouchEnd = () => {
      mouseRef.current.active = false;
    };

    const parent = canvas.parentElement;
    parent?.addEventListener('mousemove', handleMouse);
    parent?.addEventListener('mouseleave', handleLeave);
    parent?.addEventListener('touchmove', handleTouch, { passive: true });
    parent?.addEventListener('touchend', handleTouchEnd);

    // Start animation
    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      parent?.removeEventListener('mousemove', handleMouse);
      parent?.removeEventListener('mouseleave', handleLeave);
      parent?.removeEventListener('touchmove', handleTouch);
      parent?.removeEventListener('touchend', handleTouchEnd);
    };
  }, [animate, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
