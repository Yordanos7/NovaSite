"use client";
import { useEffect, useRef } from "react";

export function Ethiopian3DVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    const onPointer = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener("pointermove", onPointer);

    let scroll = 0;
    const onScroll = () => {
      scroll = window.scrollY / 900;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    let t0: number | null = null;

    // Draw 3D Ethiopian Cross
    const draw = (ts: number) => {
      if (t0 === null) t0 = ts;
      const time = (ts - t0) / 1000;

      // Smooth interpolation
      curX += (targetX - curX) * 0.1;
      curY += (targetY - curY) * 0.1;

      ctx.fillStyle = "transparent";
      ctx.clearRect(0, 0, width, height);

      // Draw 3D Ethiopian Cross with depth
      const centerX = width / 2;
      const centerY = height / 2;
      const scale = Math.min(width, height) * 0.15;

      // Rotation angles based on movement
      const rotX = curY * Math.PI + scroll * 0.5;
      const rotY = curX * Math.PI + time * 0.3;

      // Draw layers of cross creating depth effect
      const layers = 5;
      for (let i = 0; i < layers; i++) {
        const depth = (i / layers) * 0.3;
        const alpha = 0.8 - i * 0.15;
        const offset = Math.sin(time + i * 0.5) * 3;
        
        // Outer cross arm
        const armLength = scale * (1 + depth);
        const armWidth = scale * 0.3 * (1 - depth * 0.5);

        // Rotate cross
        ctx.save();
        ctx.translate(centerX + offset, centerY + offset);
        ctx.rotate(rotY * 0.1 + i * 0.1);
        ctx.globalAlpha = alpha;

        // Draw cross (vertical and horizontal)
        const colors = [
          "#06752F", // Ethiopian Green
          "#F3D02D", // Ethiopian Gold
          "#EE334E", // Ethiopian Red
          "#8B7355", // Ethiopian Brown
          "#D4A76A", // Ethiopian Tan
        ];

        ctx.fillStyle = colors[i % colors.length];

        // Vertical bar
        ctx.fillRect(
          -armWidth / 2,
          -armLength,
          armWidth,
          armLength * 2
        );
        // Horizontal bar
        ctx.fillRect(
          -armLength,
          -armWidth / 2,
          armLength * 2,
          armWidth
        );

        // Center decorative circle
        if (i === 0) {
          ctx.fillStyle = "rgba(243, 208, 45, 0.9)";
          ctx.beginPath();
          ctx.arc(0, 0, armWidth * 0.6, 0, Math.PI * 2);
          ctx.fill();

          // Inner circle
          ctx.fillStyle = "rgba(6, 117, 47, 0.95)";
          ctx.beginPath();
          ctx.arc(0, 0, armWidth * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{
        display: "block",
        background: "radial-gradient(ellipse at center, rgba(243, 208, 45, 0.1) 0%, transparent 70%)",
      }}
    />
  );
}
