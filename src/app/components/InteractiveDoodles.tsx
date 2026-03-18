import { motion } from "motion/react";
import { useState } from "react";

interface DoodleProps {
  children: React.ReactNode;
  className?: string;
}

export function InteractiveDoodle({ children, className = "" }: DoodleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.1 : 1,
        rotate: isHovered ? 5 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export function BouncingSticker({ children, position }: { children: React.ReactNode; position: { top?: string; left?: string; right?: string; bottom?: string } }) {
  return (
    <motion.div
      className="absolute"
      style={position}
      whileHover={{ scale: 1.2, rotate: 10 }}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ShakingPostIt({ children, color, position }: { children: React.ReactNode; color: string; position: { top?: string; left?: string; right?: string; bottom?: string } }) {
  const [isShaking, setIsShaking] = useState(false);

  return (
    <motion.div
      className={`absolute ${color} p-6 shadow-xl cursor-pointer`}
      style={position}
      onMouseEnter={() => setIsShaking(true)}
      onMouseLeave={() => setIsShaking(false)}
      animate={{
        rotate: isShaking ? [2, -2, 2, -2, 2] : 3,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-gray-400/60" />
      {children}
    </motion.div>
  );
}

export function PulsingCircle({ color, position, size = 40 }: { color: string; position: { top?: string; left?: string; right?: string; bottom?: string }; size?: number }) {
  return (
    <motion.div
      className="absolute"
      style={position}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          opacity: 0.3,
        }}
      />
    </motion.div>
  );
}

export function FloatingArrow({ position }: { position: { top?: string; left?: string; right?: string; bottom?: string } }) {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      className="absolute opacity-40"
      style={position}
      animate={{
        x: [0, 10, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M20,40 L55,40 L50,35 M55,40 L50,45"
        stroke="#00ff88"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="40" r="4" fill="#00ff88" />
    </motion.svg>
  );
}

export function RotatingStar({ position, color }: { position: { top?: string; left?: string; right?: string; bottom?: string }; color: string }) {
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      className="absolute"
      style={position}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      whileHover={{
        scale: 1.3,
        transition: { duration: 0.2 },
      }}
    >
      <path
        d="M25,5 L30,18 L43,18 L33,26 L37,40 L25,31 L13,40 L17,26 L7,18 L20,18 Z"
        fill={color}
        opacity="0.6"
      />
    </motion.svg>
  );
}

export function WavyUnderline({ width = "200px", color = "#ff006e" }: { width?: string; color?: string }) {
  return (
    <motion.svg
      width={width}
      height="20"
      viewBox="0 0 200 20"
      className="absolute bottom-0 left-0"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <motion.path
        d="M5,10 Q25,5 45,10 T85,10 T125,10 T165,10 T195,10"
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

export function DrawingCircle({ position, color, size = 60 }: { position: { top?: string; left?: string; right?: string; bottom?: string }; color: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="absolute"
      style={position}
      initial={{ pathLength: 0, opacity: 0, rotate: -90 }}
      whileInView={{ pathLength: 1, opacity: 0.5, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={(size / 2) - 5}
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeDasharray="5,5"
      />
    </motion.svg>
  );
}
