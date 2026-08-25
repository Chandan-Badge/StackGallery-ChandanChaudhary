import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------
 * Cursor comet.
 *
 * One full-screen canvas paints a glowing, speed-aware trail behind the
 * pointer: it sheds sparks when you move fast, swells over links and
 * buttons, and fires a shockwave on click. Everything is drawn from
 * pre-rendered glow sprites, so the animation loop allocates nothing.
 * ------------------------------------------------------------------ */

const MAX_PARTICLES = 320;   // hard cap, oldest are dropped first
const SPRITE_SIZE = 64;      // px, source size of the cached glow sprite
const HUE_STEPS = 12;        // cached sprites: deep ember -> bright amber
const HUE_MIN = 14;
const HUE_MAX = 48;
const EMIT_SPACING = 5;      // px of travel between trail puffs
const FAST = 2200;           // px/s that counts as "full speed"
const INTERACTIVE = "a, button, input, textarea, select, summary, [role=button]";

const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
// Frame-rate independent lerp factor: how far to move toward a target in dt.
const ease = (lambda, dt) => 1 - Math.exp(-lambda * dt);

// Radial glow sprites, one per hue step. Light mode paints saturated ink on a
// bright page; dark mode paints hot cores meant to be blended additively.
const buildSprites = (light) => {
  const sprites = [];
  for (let i = 0; i < HUE_STEPS; i++) {
    const hue = HUE_MIN + ((HUE_MAX - HUE_MIN) * i) / (HUE_STEPS - 1);
    const c = document.createElement("canvas");
    c.width = SPRITE_SIZE;
    c.height = SPRITE_SIZE;
    const g = c.getContext("2d");
    const r = SPRITE_SIZE / 2;
    const grad = g.createRadialGradient(r, r, 0, r, r, r);
    if (light) {
      grad.addColorStop(0, `hsla(${hue}, 96%, 44%, 0.85)`);
      grad.addColorStop(0.35, `hsla(${hue}, 92%, 50%, 0.38)`);
      grad.addColorStop(1, `hsla(${hue}, 90%, 55%, 0)`);
    } else {
      grad.addColorStop(0, `hsla(${hue}, 100%, 90%, 1)`);
      grad.addColorStop(0.25, `hsla(${hue}, 100%, 64%, 0.75)`);
      grad.addColorStop(1, `hsla(${hue}, 100%, 50%, 0)`);
    }
    g.fillStyle = grad;
    g.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
    sprites.push(c);
  }
  return sprites;
};

const MouseAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Pointer-driven flourish: skip it on touch devices and for anyone who
    // asked the OS to keep motion down.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduceMotion.matches) return;

    const ctx = canvas.getContext("2d");
    const root = document.documentElement;

    let light = !root.classList.contains("dark");
    let sprites = buildSprites(light);
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const pointer = { x: width / 2, y: height / 2, seen: false };
    const emit = { x: pointer.x, y: pointer.y };
    const head = { x: pointer.x, y: pointer.y, px: pointer.x, py: pointer.y };
    const ring = { r: 15, alpha: 0 };
    const particles = [];
    const waves = [];
    let speed = 0;      // smoothed pointer speed, px/s
    let hovering = false;
    let visible = 0;    // fades in on first move, out when the pointer leaves

    const spawn = (kind, x, y, vx, vy, size, ttl, hue) => {
      if (particles.length >= MAX_PARTICLES) particles.shift();
      particles.push({ kind, x, y, vx, vy, size, ttl, life: 0, hue });
    };

    const hueFor = (t) => clamp(Math.round(t * (HUE_STEPS - 1)), 0, HUE_STEPS - 1);

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      if (!pointer.seen) {
        pointer.seen = true;
        emit.x = head.x = head.px = pointer.x;
        emit.y = head.y = head.py = pointer.y;
      }
      const target = e.target;
      hovering = !!(target && target.closest && target.closest(INTERACTIVE));
    };

    const onLeave = () => {
      pointer.seen = false;
    };

    const onDown = (e) => {
      const hot = HUE_STEPS - 1;
      waves.push({ x: e.clientX, y: e.clientY, r: 6, life: 0, ttl: 0.55 });
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2 + rand(-0.2, 0.2);
        const v = rand(220, 620);
        spawn(
          "spark",
          e.clientX,
          e.clientY,
          Math.cos(a) * v,
          Math.sin(a) * v,
          rand(3, 7),
          rand(0.35, 0.7),
          hot - (i % 3)
        );
      }
    };

    // Repaint the sprite cache when the site flips between light and dark.
    const themeWatcher = new MutationObserver(() => {
      const nowLight = !root.classList.contains("dark");
      if (nowLight !== light) {
        light = nowLight;
        sprites = buildSprites(light);
      }
    });
    themeWatcher.observe(root, { attributes: true, attributeFilter: ["class"] });

    let raf = 0;
    let last = performance.now();

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      visible += ((pointer.seen ? 1 : 0) - visible) * ease(6, dt);

      // The comet head trails the real cursor on a spring, so quick flicks
      // stretch it out and stopping lets it settle back.
      head.px = head.x;
      head.py = head.y;
      const follow = ease(26, dt);
      head.x += (pointer.x - head.x) * follow;
      head.y += (pointer.y - head.y) * follow;

      const dx = head.x - head.px;
      const dy = head.y - head.py;
      const instant = Math.hypot(dx, dy) / (dt || 0.016);
      speed += (instant - speed) * ease(12, dt);
      const heat = clamp(speed / FAST, 0, 1);

      // Lay trail puffs down at a fixed spacing so fast moves never gap.
      if (pointer.seen) {
        const gapTotal = Math.hypot(head.x - emit.x, head.y - emit.y);
        const steps = Math.min(Math.floor(gapTotal / EMIT_SPACING), 40);
        for (let i = 0; i < steps; i++) {
          const gx = head.x - emit.x;
          const gy = head.y - emit.y;
          const gap = Math.hypot(gx, gy) || 1;
          emit.x += (gx / gap) * EMIT_SPACING;
          emit.y += (gy / gap) * EMIT_SPACING;

          const nx = -gy / gap; // unit normal, for sideways drift
          const ny = gx / gap;
          const drift = rand(-14, 14);
          spawn(
            "trail",
            emit.x + nx * rand(-2, 2),
            emit.y + ny * rand(-2, 2),
            nx * drift,
            ny * drift - rand(4, 26),
            rand(10, 20) * (0.7 + heat * 0.8),
            rand(0.35, 0.7),
            hueFor(heat * 0.75 + Math.random() * 0.25)
          );

          // Past a brisk flick the comet starts throwing sparks sideways.
          if (heat > 0.35 && Math.random() < heat * 0.5) {
            const kick = rand(60, 260) * heat * (Math.random() < 0.5 ? 1 : -1);
            spawn(
              "spark",
              emit.x,
              emit.y,
              (gx / gap) * rand(40, 160) + nx * kick,
              (gy / gap) * rand(40, 160) + ny * kick,
              rand(2.5, 5),
              rand(0.3, 0.6),
              HUE_STEPS - 1
            );
          }
        }
      } else {
        emit.x = head.x;
        emit.y = head.y;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;
        if (p.life >= p.ttl) {
          particles[i] = particles[particles.length - 1];
          particles.pop();
          continue;
        }
        const decay = Math.exp(-(p.kind === "spark" ? 2.6 : 3.4) * dt);
        p.vx *= decay;
        p.vy *= decay;
        if (p.kind === "spark") p.vy += 420 * dt; // just enough gravity to arc
        p.x += p.vx * dt;
        p.y += p.vy * dt;
      }

      for (let i = waves.length - 1; i >= 0; i--) {
        waves[i].life += dt;
        if (waves[i].life >= waves[i].ttl) waves.splice(i, 1);
      }

      // The ring swells over anything clickable, and breathes when idle.
      const idlePulse = Math.sin(now / 620) * 1.6;
      const ringTarget = (hovering ? 30 : 15 + heat * 6) + idlePulse;
      ring.r += (ringTarget - ring.r) * ease(11, dt);
      ring.alpha += ((hovering ? 0.85 : 0.35) - ring.alpha) * ease(9, dt);

      ctx.clearRect(0, 0, width, height);
      if (visible < 0.01) return;

      // Dark pages get additive light; on a bright page additive blending would
      // wash out to white, so paint normally there.
      ctx.globalCompositeOperation = light ? "source-over" : "lighter";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const t = p.life / p.ttl;
        const fade = (1 - t) * (1 - t);
        const r = p.size * (p.kind === "spark" ? 1 - t * 0.5 : 0.5 + t * 0.9);
        ctx.globalAlpha = fade * visible * (light ? 0.55 : 0.85);
        ctx.drawImage(sprites[p.hue], p.x - r, p.y - r, r * 2, r * 2);
      }

      ctx.strokeStyle = light ? "hsl(28, 95%, 45%)" : "hsl(38, 100%, 70%)";
      for (let i = 0; i < waves.length; i++) {
        const w = waves[i];
        const t = w.life / w.ttl;
        ctx.globalAlpha = (1 - t) * (1 - t) * visible * (light ? 0.5 : 0.8);
        ctx.lineWidth = 3 * (1 - t) + 0.4;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.r + t * 130, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Comet head, squashed along its own direction of travel.
      const stretch = clamp(Math.hypot(dx, dy) * 0.06, 0, 1.1);
      const coreR = (hovering ? 16 : 12) + heat * 8;
      ctx.save();
      ctx.translate(head.x, head.y);
      ctx.rotate(Math.atan2(dy, dx));
      ctx.scale(1 + stretch, 1 / (1 + stretch * 0.6));
      ctx.globalAlpha = visible * (light ? 0.7 : 1);
      ctx.drawImage(
        sprites[hueFor(0.55 + heat * 0.45)],
        -coreR,
        -coreR,
        coreR * 2,
        coreR * 2
      );
      ctx.restore();

      // Halo ring sits on the true pointer, not the lagging head.
      ctx.globalAlpha = ring.alpha * visible;
      ctx.strokeStyle = light ? "hsl(25, 95%, 42%)" : "hsl(40, 100%, 66%)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, ring.r, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      themeWatcher.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
    />
  );
};

export default MouseAnimation;
