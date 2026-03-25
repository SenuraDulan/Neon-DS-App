import React, { useEffect, useRef } from 'react';

const MouseTrail = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const dots = [];
    const maxDots = 50;

    for (let i = 0; i < maxDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'mouse-trail-dot';
      containerRef.current.appendChild(dot);
      dots.push({ 
        element: dot, 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
      });
    }

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const animate = () => {
      let x = mouse.x;
      let y = mouse.y;

      dots.forEach((dot, index) => {
        const nextDot = dots[index + 1] || dots[0];
        
        dot.x = x;
        dot.y = y;
        
        dot.element.style.left = `${dot.x}px`;
        dot.element.style.top = `${dot.y}px`;
        
        const scale = 1 - (index / maxDots);
        dot.element.style.transform = `translate(-50%, -50%) scale(${scale})`;
        dot.element.style.opacity = scale;

        x += (nextDot.x - x) * 0.4;
        y += (nextDot.y - y) * 0.4;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="mouse-trail-container" />;
};

export default MouseTrail;
