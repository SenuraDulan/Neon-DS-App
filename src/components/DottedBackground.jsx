import React, { useRef, useEffect } from 'react';

const DottedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    const spacing = 35; // Grid spacing
    const dotRadius = 1.5;
    const mouseRadius = 200;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const cols = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);

      const offsetX = (canvas.width - cols * spacing) / 2;
      const offsetY = (canvas.height - rows * spacing) / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          particles.push({
            x: offsetX + i * spacing,
            y: offsetY + j * spacing,
            baseX: offsetX + i * spacing,
            baseY: offsetY + j * spacing,
            vx: 0,
            vy: 0
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';

      particles.forEach(p => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repulsion logic
        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          // Push away from mouse
          p.vx -= Math.cos(angle) * force * 2;
          p.vy -= Math.sin(angle) * force * 2;
        }

        // Spring back to base position
        p.vx += (p.baseX - p.x) * 0.05;
        p.vy += (p.baseY - p.y) * 0.05;

        // Friction
        p.vx *= 0.85;
        p.vy *= 0.85;

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        // Give dots close to mouse a slight glow/size bump
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        ctx.arc(p.x, p.y, dotRadius + (speed * 0.2), 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const relativeY = e.clientY - rect.top;
      // Check if mouse is within hero bounds vertically
      if (relativeY >= 0 && relativeY <= rect.height) {
        mouse.x = e.clientX - rect.left;
        mouse.y = relativeY;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }} 
    />
  );
};

export default DottedBackground;
