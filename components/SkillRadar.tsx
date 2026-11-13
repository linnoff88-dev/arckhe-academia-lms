
import React from 'react';

interface SkillRadarProps {
  stats: {
    label: string;
    value: number; // 0-100
    color: string;
  }[];
}

const SkillRadar: React.FC<SkillRadarProps> = ({ stats }) => {
  const size = 300;
  const center = size / 2;
  const radius = size / 2 - 40;
  const angleSlice = (Math.PI * 2) / stats.length;

  // Helper to calculate points
  const getCoordinates = (index: number, value: number) => {
    const angle = index * angleSlice - Math.PI / 2; // Start from top
    const x = center + radius * (value / 100) * Math.cos(angle);
    const y = center + radius * (value / 100) * Math.sin(angle);
    return { x, y };
  };

  // Generate polygon points
  const points = stats.map((stat, i) => {
    const { x, y } = getCoordinates(i, stat.value);
    return `${x},${y}`;
  }).join(' ');

  // Background grids
  const levels = [25, 50, 75, 100];

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <svg width={size} height={size} className="overflow-visible" viewBox={`0 0 ${size} ${size}`}>
        {/* Background Levels */}
        {levels.map((level, i) => (
          <polygon
            key={i}
            points={stats.map((_, j) => {
              const { x, y } = getCoordinates(j, level);
              return `${x},${y}`;
            }).join(' ')}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        {stats.map((_, i) => {
          const { x, y } = getCoordinates(i, 100);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Area */}
        <polygon
          points={points}
          fill="rgba(6, 182, 212, 0.3)"
          stroke="#06b6d4"
          strokeWidth="2"
          className="drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-1000 ease-out"
        />

        {/* Data Points */}
        {stats.map((stat, i) => {
            const { x, y } = getCoordinates(i, stat.value);
            return (
                <circle 
                    key={i} 
                    cx={x} 
                    cy={y} 
                    r="4" 
                    fill={stat.color} 
                    className="shadow-[0_0_8px_currentColor]"
                />
            );
        })}

        {/* Labels */}
        {stats.map((stat, i) => {
          const { x, y } = getCoordinates(i, 115);
          return (
            <g key={i}>
                <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                className="text-[10px] font-bold font-mono uppercase tracking-wider"
                >
                {stat.label}
                </text>
                <text
                x={x}
                y={y + 12}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[10px] font-bold font-mono"
                fill={stat.color}
                >
                {Math.round(stat.value)}%
                </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default SkillRadar;
