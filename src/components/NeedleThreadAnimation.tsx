'use client';

import { useEffect, useRef } from 'react';

export default function NeedleThreadAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Animation variables
    let animationFrame: number;
    let time = 0;
    const threadPoints: { x: number; y: number; age: number }[] = [];
    const maxThreadPoints = 50;

    // Needle position
    let needleX = canvas.width / 2;
    let needleY = canvas.height / 2;
    let needleAngle = 0;
    let targetX = needleX;
    let targetY = needleY;

    // Sewing pattern - creates a decorative path
    const createSewingPath = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;
      
      // Create a flower-like pattern
      const petals = 6;
      const angle = (time * 0.02) % (Math.PI * 2);
      const petalAngle = angle * petals;
      
      const r = radius * (0.7 + 0.3 * Math.sin(petalAngle));
      targetX = centerX + r * Math.cos(angle);
      targetY = centerY + r * Math.sin(angle);
    };

    // Draw needle
    const drawNeedle = () => {
      ctx.save();
      ctx.translate(needleX, needleY);
      ctx.rotate(needleAngle);

      // Needle body (darker metallic)
      const gradient = ctx.createLinearGradient(-3, -35, 3, -35);
      gradient.addColorStop(0, '#808080');
      gradient.addColorStop(0.5, '#b0b0b0');
      gradient.addColorStop(1, '#606060');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, -35);
      ctx.lineTo(3, -8);
      ctx.lineTo(3, 8);
      ctx.lineTo(-3, 8);
      ctx.lineTo(-3, -8);
      ctx.closePath();
      ctx.fill();

      // Needle outline for visibility
      ctx.strokeStyle = '#404040';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Needle point (sharp tip)
      ctx.fillStyle = '#404040';
      ctx.beginPath();
      ctx.moveTo(0, -35);
      ctx.lineTo(2, -32);
      ctx.lineTo(-2, -32);
      ctx.closePath();
      ctx.fill();

      // Needle eye (hole) - darker blue
      ctx.fillStyle = '#0066cc';
      ctx.beginPath();
      ctx.arc(0, 10, 3, 0, Math.PI * 2);
      ctx.fill();

      // Eye outline
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    // Draw thread
    const drawThread = () => {
      if (threadPoints.length < 2) return;

      ctx.strokeStyle = '#0066cc';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Draw thread with gradient opacity
      for (let i = 1; i < threadPoints.length; i++) {
        const point = threadPoints[i];
        const prevPoint = threadPoints[i - 1];
        
        const opacity = 0.9 - (point.age / maxThreadPoints) * 0.5;
        ctx.globalAlpha = opacity;

        ctx.beginPath();
        ctx.moveTo(prevPoint.x, prevPoint.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;

      // Draw thread connecting to needle
      if (threadPoints.length > 0) {
        const lastPoint = threadPoints[threadPoints.length - 1];
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(needleX, needleY);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    };

    // Draw decorative stitches (completed pattern)
    const drawStitches = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;
      const petals = 6;
      const stitchCount = 120;

      ctx.strokeStyle = 'rgba(0, 102, 204, 0.4)';
      ctx.fillStyle = 'rgba(0, 102, 204, 0.5)';
      ctx.lineWidth = 2;

      for (let i = 0; i < stitchCount; i++) {
        const progress = i / stitchCount;
        const angle = progress * Math.PI * 2;
        const petalAngle = angle * petals;
        const r = radius * (0.7 + 0.3 * Math.sin(petalAngle));
        
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);

        // Draw small stitch marks
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background stitches
      drawStitches();

      // Update needle position
      createSewingPath();
      
      const dx = targetX - needleX;
      const dy = targetY - needleY;
      needleX += dx * 0.1;
      needleY += dy * 0.1;

      // Update needle angle to point in direction of movement
      needleAngle = Math.atan2(dy, dx) + Math.PI / 2;

      // Add thread point
      if (time % 2 === 0) {
        threadPoints.push({ x: needleX, y: needleY, age: 0 });
        if (threadPoints.length > maxThreadPoints) {
          threadPoints.shift();
        }
      }

      // Age thread points
      threadPoints.forEach(point => point.age++);

      // Draw
      drawThread();
      drawNeedle();

      time++;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
