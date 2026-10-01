"use client";
import { useEffect, useRef } from "react";

type V3 = [number, number, number];

function icosahedron(): { vertices: V3[]; edges: [number, number][] } {
    const t = (1 + Math.sqrt(5)) / 2;
    const raw: V3[] = [
        [-1, t, 0],
        [1, t, 0],
        [-1, -t, 0],
        [1, -t, 0],
        [0, -1, t],
        [0, 1, t],
        [0, -1, -t],
        [0, 1, -t],
        [t, 0, -1],
        [t, 0, 1],
        [-t, 0, -1],
        [-t, 0, 1],
    ];
    const len = Math.hypot(1, t);
    const vertices = raw.map(([x, y, z]) => [x / len, y / len, z / len] as V3);
    const edges: [number, number][] = [];
    const target = 2 / len; // edge length of a unit icosahedron
    for (let i = 0; i < vertices.length; i++) {
        for (let j = i + 1; j < vertices.length; j++) {
            const a = vertices[i]!;
            const b = vertices[j]!;
            const d = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
            if (Math.abs(d - target) < 0.01) edges.push([i, j]);
        }
    }
    return { vertices, edges };
}

export function HeroVisual() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const { vertices, edges } = icosahedron();

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
            targetX = (e.clientX / window.innerWidth - 0.5) * 0.9;
            targetY = (e.clientY / window.innerHeight - 0.5) * 0.9;
        };
        window.addEventListener("pointermove", onPointer);

        let scroll = 0;
        const onScroll = () => {
            scroll = window.scrollY / 900;
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        let raf = 0;
        let t0: number | null = null;

        const rotate = (v: V3, ax: number, ay: number): V3 => {
            const [x, y, z] = v;
            const cy = Math.cos(ay);
            const sy = Math.sin(ay);
            let x1 = x * cy + z * sy;
            const z1 = -x * sy + z * cy;
            const cx = Math.cos(ax);
            const sx = Math.sin(ax);
            const y1 = y * cx - z1 * sx;
            const z2 = y * sx + z1 * cx;
            x1 += 0;
            return [x1, y1, z2];
        };

        const draw = (ts: number) => {
            if (t0 === null) t0 = ts;
            const time = reduced ? 0 : (ts - t0) / 1000;

            curX += (targetY * 0.7 - curX) * 0.05;
            curY += (targetX * 0.9 - curY) * 0.05;

            const ax = curX + Math.sin(time * 0.18) * 0.25 + scroll * 0.4;
            const ay = curY + time * 0.16;

            ctx.clearRect(0, 0, width, height);
            const cx = width / 2;
            const cy = height / 2;
            const r = Math.min(width, height) * 0.34;

            const projected = vertices.map((v) => {
                const [x, y, z] = rotate(v, ax, ay);
                const persp = 2.6 / (2.6 - z);
                return { x: cx + x * r * persp, y: cy + y * r * persp, z };
            });

            // radiating nova lines from the core
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            for (const p of projected) {
                const depth = (p.z + 1) / 2;
                const grad = ctx.createLinearGradient(cx, cy, p.x, p.y);
                grad.addColorStop(0, `rgba(124, 92, 255, ${0.28 * depth})`);
                grad.addColorStop(1, "rgba(124, 92, 255, 0)");
                ctx.strokeStyle = grad;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
            ctx.restore();

            // wireframe
            for (const [a, b] of edges) {
                const pa = projected[a]!;
                const pb = projected[b]!;
                const depth = (pa.z + pb.z) / 2;
                const alpha = 0.14 + ((depth + 1) / 2) * 0.6;
                ctx.strokeStyle = `rgba(245, 246, 250, ${alpha * 0.55})`;
                ctx.lineWidth = depth > 0 ? 1.15 : 0.6;
                ctx.beginPath();
                ctx.moveTo(pa.x, pa.y);
                ctx.lineTo(pb.x, pb.y);
                ctx.stroke();
            }

            // vertices
            for (const p of projected) {
                const depth = (p.z + 1) / 2;
                ctx.fillStyle =
                    p.z > 0.55 ? `rgba(255, 107, 74, ${0.5 + depth * 0.5})` : `rgba(124, 92, 255, ${0.35 + depth * 0.6})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.2 + depth * 2.2, 0, Math.PI * 2);
                ctx.fill();
            }

            // core
            const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.9);
            core.addColorStop(0, "rgba(124, 92, 255, 0.45)");
            core.addColorStop(0.4, "rgba(124, 92, 255, 0.10)");
            core.addColorStop(1, "rgba(10, 14, 26, 0)");
            ctx.fillStyle = core;
            ctx.beginPath();
            ctx.arc(cx, cy, r * 0.9, 0, Math.PI * 2);
            ctx.fill();

            raf = requestAnimationFrame(draw);
        };

        raf = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onPointer);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className="relative aspect-square w-full max-w-[560px]" aria-hidden="true">
            <div className="nova-glow pointer-events-none absolute inset-[12%] rounded-full opacity-60" />
            <canvas ref={canvasRef} className="relative h-full w-full" />
        </div>
    );
}
