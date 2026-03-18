import { motion } from "motion/react";

export function FloatingStickers() {
  return (
    <div className="pointer-events-none">
      {/* Minecraft Creeper */}
      <motion.div
        className="absolute opacity-60"
        style={{ left: "8%", top: "25%" }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-12 h-14 bg-[#00ff88]/60 relative shadow-lg transform rotate-6">
          <div className="absolute top-2 left-2 w-2 h-2 bg-black" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-black" />
          <div className="absolute top-5 left-3 w-6 h-6 bg-black" />
          <div className="absolute bottom-2 left-3 w-2 h-2 bg-black" />
          <div className="absolute bottom-2 right-3 w-2 h-2 bg-black" />
        </div>
      </motion.div>

      {/* Graduation Cap */}
      <motion.div
        className="absolute opacity-60"
        style={{ right: "8%", top: "35%" }}
        whileHover={{ scale: 1.2, rotate: -10 }}
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg width="50" height="50" viewBox="0 0 60 60">
          <polygon points="30,15 50,25 30,35 10,25" fill="#ffbe0b" />
          <rect x="25" y="35" width="10" height="15" fill="#ffbe0b" />
          <circle cx="30" cy="52" r="3" fill="#ffbe0b" />
          <polygon points="48,26 52,28 52,40 48,38" fill="#ff6b35" />
        </svg>
      </motion.div>

      {/* Circuit Board */}
      <motion.div
        className="absolute opacity-50"
        style={{ right: "12%", top: "75%" }}
        whileHover={{ scale: 1.2 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <svg width="50" height="50" viewBox="0 0 60 60">
          <line x1="10" y1="30" x2="50" y2="30" stroke="#00ff88" strokeWidth="2" />
          <line x1="30" y1="10" x2="30" y2="50" stroke="#00ff88" strokeWidth="2" />
          <circle cx="30" cy="30" r="6" fill="#ff006e" />
          <circle cx="15" cy="15" r="4" fill="#ffbe0b" />
          <circle cx="45" cy="45" r="4" fill="#ff6b35" />
          <circle cx="15" cy="45" r="4" fill="#00ff88" />
          <circle cx="45" cy="15" r="4" fill="#ff006e" />
        </svg>
      </motion.div>

      {/* Coffee Cup */}
      <motion.div
        className="absolute opacity-60"
        style={{ left: "88%", top: "60%" }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg width="40" height="50" viewBox="0 0 50 60">
          <rect x="15" y="20" width="20" height="25" rx="2" fill="#ff6b35" stroke="#000" strokeWidth="2" />
          <path d="M35,28 Q42,28 42,35 Q42,42 35,42" stroke="#000" strokeWidth="2" fill="none" />
          <path d="M20,15 Q22,10 25,15 Q28,10 30,15" stroke="#000" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
}