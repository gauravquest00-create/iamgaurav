import React, { useEffect, useRef } from 'react';
import './HeroVisual.css';

export const HeroVisual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement.clientHeight || 400);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse / Pointer coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 1.5;
      targetRotX = -y * 1.5;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = (touch.clientX - rect.left) / rect.width - 0.5;
        const y = (touch.clientY - rect.top) / rect.height - 0.5;
        targetRotY = x * 1.2;
        targetRotX = -y * 1.2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Generate 3D Spherical & Icosahedron Node Matrix
    const numPoints = width < 500 ? 54 : 96;
    const points = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numPoints; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / numPoints);
      const radius = 130;
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        origRadius: radius,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Ambient floating particles
    const particleCount = width < 500 ? 25 : 45;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 350,
        y: (Math.random() - 0.5) * 350,
        z: (Math.random() - 0.5) * 350,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;

      // Smooth camera rotation inertia
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const currentRotY = rotY + time * 0.4;
      const currentRotX = rotX + Math.sin(time * 0.3) * 0.2;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 340;

      // Check current theme accent
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const nodeColor = isLight ? 'rgba(79, 70, 229, ' : 'rgba(99, 102, 241, ';
      const secondaryColor = isLight ? 'rgba(219, 39, 119, ' : 'rgba(236, 72, 153, ';
      const wireColor = isLight ? 'rgba(79, 70, 229, ' : 'rgba(129, 140, 248, ';

      // Draw Center Glow Core
      const glowGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 160);
      glowGrad.addColorStop(0, isLight ? 'rgba(79, 70, 229, 0.18)' : 'rgba(99, 102, 241, 0.25)');
      glowGrad.addColorStop(0.5, isLight ? 'rgba(124, 58, 237, 0.08)' : 'rgba(139, 92, 246, 0.12)');
      glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 160, 0, Math.PI * 2);
      ctx.fill();

      // Project & Transform Sphere Nodes
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      const projectedPoints = points.map((p) => {
        // Pulsate radius
        const dynamicR = p.origRadius + Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 6;
        const norm = dynamicR / p.origRadius;
        
        let x = p.x * norm;
        let y = p.y * norm;
        let z = p.z * norm;

        // Rotation around Y
        let x1 = x * cosY - z * sinY;
        let z1 = z * cosY + x * sinY;

        // Rotation around X
        let y2 = y * cosX - z1 * sinX;
        let z2 = z1 * cosX + y * sinX;

        // Perspective Projection
        const scale = fov / (fov + z2 + 180);
        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          pz: z2,
          scale: scale,
          alpha: Math.max(0.15, Math.min(1, (z2 + 140) / 280))
        };
      });

      // Sort by depth for correct rendering
      projectedPoints.sort((a, b) => a.pz - b.pz);

      // Draw connection lines between nearest nodes
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p2 = projectedPoints[j];
          const distSq = (p1.px - p2.px) ** 2 + (p1.py - p2.py) ** 2;
          if (distSq < 2200) {
            const lineAlpha = (1 - distSq / 2200) * 0.22 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `${wireColor}${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw Projected Sphere Nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        const r = Math.max(1.2, p.scale * 2.6);
        ctx.fillStyle = i % 3 === 0 ? `${secondaryColor}${p.alpha})` : `${nodeColor}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & Draw Ambient Dust Particles
      for (let i = 0; i < particles.length; i++) {
        const part = particles[i];
        part.x += part.vx;
        part.y += part.vy;
        part.z += part.vz;

        if (part.x > 200) part.x = -200;
        if (part.x < -200) part.x = 200;
        if (part.y > 200) part.y = -200;
        if (part.y < -200) part.y = 200;
        if (part.z > 200) part.z = -200;
        if (part.z < -200) part.z = 200;

        let px1 = part.x * cosY - part.z * sinY;
        let pz1 = part.z * cosY + part.x * sinY;
        let py2 = part.y * cosX - pz1 * sinX;
        let pz2 = pz1 * cosX + part.y * sinX;

        const pscale = fov / (fov + pz2 + 200);
        const screenX = cx + px1 * pscale;
        const screenY = cy + py2 * pscale;
        const pAlpha = Math.max(0.1, (pz2 + 150) / 300) * 0.6;

        ctx.fillStyle = `${nodeColor}${pAlpha})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, part.size * pscale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Outer Orbital Rings
      ctx.lineWidth = 1;
      ctx.strokeStyle = isLight ? 'rgba(79, 70, 229, 0.12)' : 'rgba(99, 102, 241, 0.18)';
      ctx.beginPath();
      ctx.ellipse(cx, cy, 175 * Math.abs(cosX), 175, currentRotY * 0.2, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="hero-visual-wrapper" aria-hidden="true">
      <div className="hero-visual-badge">
        <span className="visual-core-pulse"></span>
        <span>SYSTEM MATRIX · 60 FPS</span>
      </div>
      <canvas ref={canvasRef} className="hero-visual-canvas" />
    </div>
  );
};

export default HeroVisual;
