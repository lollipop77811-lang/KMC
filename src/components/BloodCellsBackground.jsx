import { useEffect, useRef } from "react";

const BloodCellsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // ── Ambient (idle) cells tuning ────────────────────────────────────────
    const AMBIENT_COUNT     = 50;    // number of always-visible floating cells
    const AMBIENT_SPEED     = 0.25;  // max idle drift speed
    const AMBIENT_DRIFT     = 0.03;  // random acceleration each frame
    const ATTRACT_RADIUS    = 250;   // px – how close cursor must be to attract
    const ATTRACT_FORCE     = 0.045; // strength of cursor pull
    const ATTRACT_MAX_SPEED = 2.5;   // max speed when being attracted
    const ATTRACT_DAMPING   = 0.94;  // friction when attracted (lower = more drag)

    // ── Merge tuning ───────────────────────────────────────────────────────
    const MERGE_THRESHOLD   = 4;     // how many cells must converge to trigger merge
    const MERGE_RADIUS      = 45;    // px – cells within this distance from cursor count
    const MERGE_COOLDOWN    = 3000;  // ms – minimum time between merges
    const LARGE_CELL_LIFE   = 3000;  // ms – how long the large cell lives
    const LARGE_CELL_RX     = 45;    // large cell x-radius
    const LARGE_CELL_RY     = 28;    // large cell y-radius

    // ── Resize ─────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Mouse ──────────────────────────────────────────────────────────────
    const mouse = { x: -9999, y: -9999, active: false };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    window.addEventListener("mousemove", onMove);

    const rand = (a, b) => a + Math.random() * (b - a);

    // ── Ambient cells (always visible, drifting) ─────────────────────────
    const makeAmbientCell = () => ({
      x:    rand(0, window.innerWidth),
      y:    rand(0, window.innerHeight),
      vx:   rand(-AMBIENT_SPEED, AMBIENT_SPEED),
      vy:   rand(-AMBIENT_SPEED, AMBIENT_SPEED),
      rx:   rand(9, 16),
      ry:   rand(5, 9),
      rot:  rand(0, Math.PI * 2),
      rotV: rand(-0.006, 0.006),
      alpha: rand(0.45, 0.8),
      absorbed: false,  // true when this cell is being sucked into a merge
      absorbT:  0,      // 0..1 animation progress for absorption
    });
    const ambientCells = Array.from({ length: AMBIENT_COUNT }, makeAmbientCell);

    // ── Large merged cells ─────────────────────────────────────────────────
    const largeCells = [];  // { x, y, vx, vy, rot, rotV, born, alpha, scale }
    let lastMergeTime = 0;

    // ── Draw one RBC ───────────────────────────────────────────────────────
    const drawRBC = (x, y, rx, ry, rot, alpha) => {
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.translate(x, y);
      ctx.rotate(rot);

      // Outer ellipse — main body
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);

      // Gradient fill for depth
      const grad = ctx.createRadialGradient(0, 0, rx * 0.1, 0, 0, rx);
      grad.addColorStop(0, "rgba(220, 70, 60, 0.35)");
      grad.addColorStop(0.5, "rgba(200, 55, 50, 0.25)");
      grad.addColorStop(1, "rgba(180, 40, 40, 0.12)");
      ctx.fillStyle = grad;
      ctx.fill();

      // Border
      ctx.strokeStyle = "rgba(195, 55, 55, 0.35)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Inner dimple (biconcave look)
      ctx.beginPath();
      ctx.ellipse(0, 0, rx * 0.38, ry * 0.38, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(170, 45, 45, 0.1)";
      ctx.fill();

      ctx.restore();
    };

    // ── Draw large merged cell (bigger, more opaque, with glow) ───────────
    const drawLargeRBC = (x, y, rx, ry, rot, alpha, scale) => {
      if (alpha <= 0.01) return;
      const sRx = rx * scale;
      const sRy = ry * scale;

      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.translate(x, y);
      ctx.rotate(rot);

      // Glow effect
      ctx.shadowColor = "rgba(220, 60, 50, 0.6)";
      ctx.shadowBlur = 30 * scale;

      // Outer ellipse — main body
      ctx.beginPath();
      ctx.ellipse(0, 0, sRx, sRy, 0, 0, Math.PI * 2);

      // Richer gradient for the large cell
      const grad = ctx.createRadialGradient(0, 0, sRx * 0.05, 0, 0, sRx);
      grad.addColorStop(0, "rgba(240, 80, 70, 0.6)");
      grad.addColorStop(0.4, "rgba(220, 60, 55, 0.45)");
      grad.addColorStop(0.7, "rgba(200, 50, 45, 0.3)");
      grad.addColorStop(1, "rgba(180, 40, 40, 0.15)");
      ctx.fillStyle = grad;
      ctx.fill();

      // Border — slightly thicker
      ctx.strokeStyle = "rgba(210, 60, 55, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner dimple
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.ellipse(0, 0, sRx * 0.35, sRy * 0.35, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(180, 45, 45, 0.15)";
      ctx.fill();

      // Second inner ring for depth
      ctx.beginPath();
      ctx.ellipse(0, 0, sRx * 0.2, sRy * 0.2, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(160, 40, 40, 0.1)";
      ctx.fill();

      ctx.restore();
    };

    // ── Main loop ──────────────────────────────────────────────────────────
    let animId;
    const loop = () => {
      animId = requestAnimationFrame(loop);
      const now = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width, H = canvas.height;

      // ── Check for merge ────────────────────────────────────────────────
      if (mouse.active && now - lastMergeTime > MERGE_COOLDOWN) {
        // Find cells close to cursor
        const nearbyCells = [];
        ambientCells.forEach((c, i) => {
          if (c.absorbed) return;
          const dist = Math.hypot(c.x - mouse.x, c.y - mouse.y);
          if (dist < MERGE_RADIUS) {
            nearbyCells.push({ cell: c, index: i, dist });
          }
        });

        if (nearbyCells.length >= MERGE_THRESHOLD) {
          // Sort by distance, take closest 7
          nearbyCells.sort((a, b) => a.dist - b.dist);
          const toAbsorb = nearbyCells.slice(0, MERGE_THRESHOLD);

          // Mark cells as absorbed — they'll animate shrinking toward cursor
          toAbsorb.forEach(({ cell }) => {
            cell.absorbed = true;
            cell.absorbT = 0;
            cell.absorbTargetX = mouse.x;
            cell.absorbTargetY = mouse.y;
          });

          // Spawn a large cell at the cursor position after a short delay
          const mergeX = mouse.x;
          const mergeY = mouse.y;
          setTimeout(() => {
            largeCells.push({
              x: mergeX,
              y: mergeY,
              vx: rand(-0.4, 0.4),
              vy: rand(-0.4, 0.4),
              rot: rand(0, Math.PI * 2),
              rotV: rand(-0.004, 0.004),
              born: performance.now(),
              alpha: 0,
              scale: 0,
            });
          }, 300); // small delay so you see the cells converge first

          lastMergeTime = now;
        }
      }

      // ── Update & draw ambient cells ────────────────────────────────────
      ambientCells.forEach((c) => {
        // Handle absorption animation
        if (c.absorbed) {
          c.absorbT += 0.04;  // speed of absorption animation
          if (c.absorbT >= 1) {
            // Respawn the cell at a random edge position
            const edge = Math.floor(rand(0, 4));
            if (edge === 0) { c.x = -20; c.y = rand(0, H); }
            else if (edge === 1) { c.x = W + 20; c.y = rand(0, H); }
            else if (edge === 2) { c.x = rand(0, W); c.y = -20; }
            else { c.x = rand(0, W); c.y = H + 20; }
            c.vx = rand(-AMBIENT_SPEED, AMBIENT_SPEED);
            c.vy = rand(-AMBIENT_SPEED, AMBIENT_SPEED);
            c.absorbed = false;
            c.absorbT = 0;
            return;
          }
          // Lerp toward the target point while shrinking
          const t = c.absorbT;
          const easeT = t * t; // ease-in
          c.x += (c.absorbTargetX - c.x) * 0.12;
          c.y += (c.absorbTargetY - c.y) * 0.12;
          const shrink = 1 - easeT;
          drawRBC(c.x, c.y, c.rx * shrink, c.ry * shrink, c.rot, c.alpha * shrink);
          return;
        }

        // Random drift
        c.vx += rand(-AMBIENT_DRIFT, AMBIENT_DRIFT);
        c.vy += rand(-AMBIENT_DRIFT, AMBIENT_DRIFT);

        // Cursor attraction
        let attracted = false;
        if (mouse.active) {
          const dx = mouse.x - c.x;
          const dy = mouse.y - c.y;
          const dist = Math.hypot(dx, dy);
          if (dist < ATTRACT_RADIUS && dist > 1) {
            const strength = ATTRACT_FORCE * (1 - dist / ATTRACT_RADIUS);
            c.vx += (dx / dist) * strength;
            c.vy += (dy / dist) * strength;
            attracted = true;
          }
        }

        // Clamp speed
        const maxSpd = attracted ? ATTRACT_MAX_SPEED : AMBIENT_SPEED;
        const spd = Math.hypot(c.vx, c.vy);
        if (spd > maxSpd) {
          c.vx *= maxSpd / spd;
          c.vy *= maxSpd / spd;
        }

        c.vx *= attracted ? ATTRACT_DAMPING : 0.99;
        c.vy *= attracted ? ATTRACT_DAMPING : 0.99;
        c.x  += c.vx;
        c.y  += c.vy;
        c.rot += c.rotV;

        // Wrap around edges
        if (c.x < -30)  c.x = W + 30;
        if (c.x > W+30) c.x = -30;
        if (c.y < -30)  c.y = H + 30;
        if (c.y > H+30) c.y = -30;

        drawRBC(c.x, c.y, c.rx, c.ry, c.rot, c.alpha);
      });

      // ── Update & draw large merged cells ───────────────────────────────
      for (let i = largeCells.length - 1; i >= 0; i--) {
        const lc = largeCells[i];
        const age = now - lc.born;
        const lifeT = Math.min(1, age / LARGE_CELL_LIFE);

        // Appear phase (0 → 0.2): scale and alpha ramp up
        // Live phase (0.2 → 0.6): full size with gentle pulse
        // Fade phase (0.6 → 1.0): shrink and fade out
        if (lifeT < 0.2) {
          const t = lifeT / 0.2; // 0..1
          const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
          lc.scale = ease;
          lc.alpha = ease * 0.85;
        } else if (lifeT < 0.6) {
          // Gentle pulse
          const pulseT = (lifeT - 0.2) / 0.4;
          lc.scale = 1 + 0.06 * Math.sin(pulseT * Math.PI * 4);
          lc.alpha = 0.85;
        } else {
          const t = (lifeT - 0.6) / 0.4; // 0..1
          const ease = 1 - t * t; // ease-out
          lc.scale = ease;
          lc.alpha = ease * 0.85;
        }

        // Drift
        lc.x += lc.vx;
        lc.y += lc.vy;
        lc.rot += lc.rotV;

        // Remove if dead
        if (lifeT >= 1) {
          largeCells.splice(i, 1);
          continue;
        }

        drawLargeRBC(lc.x, lc.y, LARGE_CELL_RX, LARGE_CELL_RY, lc.rot, lc.alpha, lc.scale);
      }
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default BloodCellsBackground;