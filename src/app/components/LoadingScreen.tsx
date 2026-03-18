import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-[#0a1628] via-[#1a2744] to-[#0a1628] flex items-center justify-center"
    >
      <div className="relative">
        {/* Papel colado com o logo */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 2 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-12 transform rotate-2 shadow-2xl border-4 border-black"
        >
          <div className="absolute -top-4 left-1/4 w-24 h-6 bg-yellow-300/80 shadow-md" />
          <div className="absolute -top-4 right-1/4 w-24 h-6 bg-pink-300/80 shadow-md rotate-3" />
          
          <h1 className="text-5xl md:text-6xl font-black text-[#0a1628] text-center">
            PAPO DE
            <br />
            <span className="text-[#00ff88]">CALOURO</span>
          </h1>

          {/* Loading bar */}
          <div className="mt-8 w-64 h-3 bg-gray-200 relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#ff006e] via-[#ffbe0b] to-[#00ff88]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <p className="text-center mt-4 text-gray-700 font-bold">
            Carregando... {progress}%
          </p>
        </motion.div>

        {/* Elementos decorativos animados */}
        <motion.div
          className="absolute -top-12 -left-12"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path
              d="M30,5 L35,20 L50,20 L38,30 L43,45 L30,35 L17,45 L22,30 L10,20 L25,20 Z"
              fill="#ffbe0b"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute -bottom-12 -right-12"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="#00ff88" strokeWidth="4" fill="none" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
