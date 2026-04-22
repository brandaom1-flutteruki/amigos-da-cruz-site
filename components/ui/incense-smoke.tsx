"use client";

import { useEffect, useRef } from "react";

type SmokeParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  ttl: number;
  opacity: number;
};

const MAX_PARTICLES = 70;
const MOBILE_BREAKPOINT = 640;
const EMIT_INTERVAL = 85;

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

export const IncenseSmoke = () => {
  const shellRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shell = shellRef.current;
    const hero = canvas?.closest<HTMLElement>(".hero-section");
    if (!canvas || !shell || !hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || window.innerWidth <= MOBILE_BREAKPOINT) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const particles: SmokeParticle[] = [];
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastFrame = performance.now();
    let lastEmit = 0;
    let isHovering = false;
    let pointerX = 0;
    let pointerY = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = hero.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const pushParticle = (x: number, y: number) => {
      if (particles.length >= MAX_PARTICLES) particles.shift();

      particles.push({
        x: x + randomBetween(-20, 20),
        y: y + randomBetween(-12, 12),
        vx: randomBetween(-0.06, 0.06),
        vy: randomBetween(-0.22, -0.1),
        radius: randomBetween(44, 118),
        life: 0,
        ttl: randomBetween(3600, 6200),
        opacity: randomBetween(0.12, 0.24),
      });
    };

    const emitBurst = (x: number, y: number, count: number) => {
      for (let index = 0; index < count; index += 1) {
        pushParticle(x + randomBetween(-28, 28), y + randomBetween(-18, 18));
      }
    };

    const positionFromEvent = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
    };

    const handlePointerEnter = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      positionFromEvent(event);
      isHovering = true;
      shell.classList.add("is-active");
      emitBurst(pointerX, pointerY, 10);
      lastEmit = performance.now();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isHovering || event.pointerType === "touch") return;
      positionFromEvent(event);

      const now = performance.now();
      if (now - lastEmit < EMIT_INTERVAL) return;

      pushParticle(pointerX, pointerY);
      if (Math.random() > 0.45) pushParticle(pointerX, pointerY);
      lastEmit = now;
    };

    const handlePointerLeave = () => {
      isHovering = false;
      shell.classList.remove("is-active");
    };

    const drawParticle = (particle: SmokeParticle, delta: number) => {
      particle.life += delta;
      const progress = particle.life / particle.ttl;
      if (progress >= 1) return false;

      particle.x += particle.vx * delta;
      particle.y += particle.vy * delta;
      particle.vx += Math.sin((particle.life + particle.x) * 0.0016) * 0.0007 * delta;
      particle.radius += 0.01 * delta;

      const fadeIn = Math.min(progress / 0.16, 1);
      const fadeOut = Math.max(1 - progress, 0);
      const alpha = particle.opacity * fadeIn * fadeOut;

      const gradient = context.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.radius,
      );

      gradient.addColorStop(0, `rgba(220, 205, 174, ${alpha})`);
      gradient.addColorStop(0.45, `rgba(246, 238, 220, ${alpha * 0.46})`);
      gradient.addColorStop(0.75, `rgba(138, 107, 40, ${alpha * 0.18})`);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      context.save();
      context.filter = "blur(12px)";
      context.globalCompositeOperation = "source-over";
      context.translate(particle.x, particle.y);
      context.scale(1 + progress * 0.65, 1.7 + progress);
      context.translate(-particle.x, -particle.y);
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
      context.restore();

      return true;
    };

    const render = (time: number) => {
      const delta = Math.min(time - lastFrame, 42);
      lastFrame = time;
      context.clearRect(0, 0, width, height);

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        if (!drawParticle(particles[index], delta)) particles.splice(index, 1);
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    animationFrame = window.requestAnimationFrame(render);
    window.addEventListener("resize", resize);
    hero.addEventListener("pointerenter", handlePointerEnter, { passive: true });
    hero.addEventListener("pointermove", handlePointerMove, { passive: true });
    hero.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      hero.removeEventListener("pointerenter", handlePointerEnter);
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div ref={shellRef} className="incense-smoke-shell" aria-hidden="true">
      <canvas ref={canvasRef} className="incense-smoke" />
    </div>
  );
};
