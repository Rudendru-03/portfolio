"use client"; // This component will use client-side features

import { useEffect, useRef } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  if (level < 0 || level > 100) {
    console.error("Level must be between 0 and 100");
    return null; // or return a default representation
  }

  // Reference to the canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Drawing the circular progress
  const drawCircle = (context: CanvasRenderingContext2D, percentage: number) => {
    const radius = 60; // Circle radius
    const centerX = 70; // Center X position
    const centerY = 70; // Center Y position
    const startAngle = -0.5 * Math.PI; // Start at the top (12 o'clock)
    const endAngle = ((percentage / 100) * 2 * Math.PI) - 0.5 * Math.PI; // End angle based on percentage

    // Clear the canvas
    context.clearRect(0, 0, 140, 140);

    // Draw the background circle
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.fillStyle = '#2D2D2D'; // Background color
    context.fill();

    // Draw the progress circle
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.lineWidth = 12; // Width of the circle
    context.strokeStyle = '#FFD700'; // Progress color
    context.stroke();

    // Draw the percentage text in the center
    context.fillStyle = 'white'; // Text color
    context.font = 'bold 20px Arial'; // Font style
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(`${level}%`, centerX, centerY);
  };

  // useEffect to draw the circle after the component mounts
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        drawCircle(context, level);
      }
    }
  }, [level]);

  return (
    <div className="my-4 flex flex-col items-center rounded-lg">
      <span className="text-center block">{skill}</span>
      <canvas ref={canvasRef} width={140} height={140} className="border-2 border-gray-600 rounded-full" />
    </div>
  );
};

export default SkillBar;
