import { motion } from "motion/react";

export function AnimatedBackground() {
  const doodles = [
    { id: 1, x: "10%", y: "20%", rotation: 15, duration: 20 },
    { id: 2, x: "80%", y: "30%", rotation: -25, duration: 25 },
    { id: 3, x: "30%", y: "60%", rotation: 10, duration: 30 },
    { id: 4, x: "70%", y: "70%", rotation: -15, duration: 22 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Linhas de caderno - mais sutis */}
      <div className="absolute inset-0 opacity-3">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute w-full border-b border-white/10"
            style={{ top: `${i * 50}px` }}
          />
        ))}
      </div>

      {/* Doodles flutuantes - reduzidos e mais sutis */}
      {doodles.map((doodle) => (
        <motion.div
          key={doodle.id}
          className="absolute opacity-20"
          style={{ left: doodle.x, top: doodle.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [doodle.rotation, doodle.rotation + 5, doodle.rotation],
          }}
          transition={{
            duration: doodle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {doodle.id % 4 === 0 && <Arrow />}
          {doodle.id % 4 === 1 && <Star />}
          {doodle.id % 4 === 2 && <Squiggle />}
          {doodle.id % 4 === 3 && <Circle />}
        </motion.div>
      ))}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-30">
      <path
        d="M10 30 L45 30 L40 25 M45 30 L40 35"
        stroke="#00ff88"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Star() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-30">
      <path
        d="M25 5 L30 20 L45 20 L33 30 L38 45 L25 35 L12 45 L17 30 L5 20 L20 20 Z"
        fill="#ffbe0b"
        opacity="0.6"
      />
    </svg>
  );
}

function Squiggle() {
  return (
    <svg width="80" height="40" viewBox="0 0 80 40" className="opacity-30">
      <path
        d="M5 20 Q15 10, 25 20 T45 20 T65 20"
        stroke="#ff006e"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Circle() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-30">
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="#ff6b35"
        strokeWidth="3"
        fill="none"
        strokeDasharray="5,5"
      />
    </svg>
  );
}