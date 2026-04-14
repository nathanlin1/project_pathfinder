import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Honor reduced-motion preference — skip animation entirely
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationId: number;
    let resizeTimer: number | undefined;
    let stars: { x: number; y: number; z: number; opacity: number; speed: number }[] = [];
    let shootingStars: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; length: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      // Slightly sparse — enough to feel like deep space, not overwhelming
      const count = Math.floor((canvas.width * canvas.height) / 5000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 2.5 + 0.3,
        opacity: Math.random(),
        speed: Math.random() * 0.015 + 0.003,
      }));
    };

    const spawnShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.002) {
        shootingStars.push({
          x: Math.random() * canvas.width * 1.2,
          y: Math.random() * canvas.height * 0.5,
          vx: -(Math.random() * 4 + 3),
          vy: Math.random() * 3 + 2,
          life: 0,
          maxLife: Math.random() * 60 + 40,
          length: Math.random() * 60 + 40,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars — cold white/blue dots
      for (const star of stars) {
        star.opacity += star.speed;
        if (star.opacity > 1 || star.opacity < 0.1) star.speed *= -1;

        const size = star.z;
        const brightness = Math.floor(star.opacity * 255);
        
        // Cold blue-white tint for stars
        const blueShift = Math.min(255, brightness + 40);
        const tint = star.z > 2
          ? `rgba(100, 160, 255, ${star.opacity * 0.7})`
          : `rgba(${brightness}, ${Math.floor(brightness * 0.95)}, ${blueShift}, ${star.opacity * 0.8})`;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = tint;
        ctx.fill();

        // Subtle glow for bigger stars — blue tinted
        if (star.z > 2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, size * 1.8, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, size * 1.8);
          gradient.addColorStop(0, `rgba(80, 140, 255, ${star.opacity * 0.2})`);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }

      // Shooting stars — white to blue fade
      spawnShootingStar();
      shootingStars = shootingStars.filter(s => {
        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        const progress = s.life / s.maxLife;
        const alpha = progress < 0.1 ? progress * 10 : progress > 0.7 ? (1 - progress) / 0.3 : 1;

        const gradient = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * s.length / 5, s.y - s.vy * s.length / 5);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(0.4, `rgba(100, 160, 246, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * s.length / 5, s.y - s.vy * s.length / 5);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        return s.life < s.maxLife;
      });

      // Very subtle blue nebula clouds — barely visible
      drawNebula(ctx, canvas.width * 0.15, canvas.height * 0.25, 350, 'rgba(30, 60, 140, 0.012)');
      drawNebula(ctx, canvas.width * 0.8, canvas.height * 0.65, 280, 'rgba(20, 80, 160, 0.008)');

      animationId = requestAnimationFrame(animate);
    };

    const drawNebula = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    };

    resize();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(resizeTimer);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
