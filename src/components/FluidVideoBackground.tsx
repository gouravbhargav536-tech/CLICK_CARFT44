import React, { useEffect, useRef } from 'react';

export const FluidVideoBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Floating particles like in reference screenshot
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      shape: 'rect' | 'circle';
      alpha: number;
    }[] = [];

    const colors = [
      'rgba(249, 115, 22, 0.45)', // Orange
      'rgba(234, 88, 12, 0.35)',  // Deep Coral
      'rgba(37, 99, 235, 0.35)',  // Royal Blue
      'rgba(209, 180, 85, 0.35)', // Gold
    ];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: Math.random() > 0.5 ? 'rect' : 'circle',
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    let time = 0;

    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // 1. Fluid Ambient Blobs (Video-like fluid gradient lighting)
      const grad1X = width * 0.8 + Math.cos(time * 1.5) * 120;
      const grad1Y = height * 0.2 + Math.sin(time * 1.2) * 80;
      const grad1 = ctx.createRadialGradient(grad1X, grad1Y, 10, grad1X, grad1Y, width * 0.45);
      grad1.addColorStop(0, 'rgba(251, 146, 60, 0.16)'); // Soft Peach / Orange
      grad1.addColorStop(0.5, 'rgba(249, 115, 22, 0.08)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2X = width * 0.15 + Math.sin(time) * 100;
      const grad2Y = height * 0.85 + Math.cos(time * 0.8) * 90;
      const grad2 = ctx.createRadialGradient(grad2X, grad2Y, 10, grad2X, grad2Y, width * 0.4);
      grad2.addColorStop(0, 'rgba(59, 130, 246, 0.12)'); // Electric Blue glow
      grad2.addColorStop(0.6, 'rgba(37, 99, 235, 0.04)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Elegant Topological Wireframe Curves (Direct match to reference design)
      ctx.save();
      ctx.lineWidth = 1;
      const curveCount = 8;
      for (let c = 0; c < curveCount; c++) {
        const offset = c * 35;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(209, 180, 85, ${0.08 + c * 0.015})`;

        const startX = width * 0.4 + offset;
        const startY = 0;
        const cp1x = width * 0.95 - Math.sin(time + c * 0.2) * 50;
        const cp1y = height * 0.35 + offset;
        const cp2x = width * 0.75 + Math.cos(time + c * 0.2) * 60;
        const cp2y = height * 0.75 + offset;
        const endX = width * 0.2;
        const endY = height;

        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Floating Micro-Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;

        if (p.shape === 'rect') {
          ctx.fillRect(p.x, p.y, p.size, p.size);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
};
