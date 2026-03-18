import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function ScrollDoodles() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcular quando cada doodle deve aparecer baseado no scroll
  const doodleThreshold1 = 300;
  const doodleThreshold2 = 800;
  const doodleThreshold3 = 1400;
  const doodleThreshold4 = 2000;
  const doodleThreshold5 = 2600;

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {/* Seta desenhando */}
      {scrollY > doodleThreshold1 && (
        <motion.svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          className="absolute opacity-40"
          style={{ top: "20%", right: "10%" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.path
            d="M10,40 Q40,20 80,40 L75,35 M80,40 L75,45"
            stroke="#ff006e"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      )}

      {/* Círculo sendo desenhado */}
      {scrollY > doodleThreshold2 && (
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="absolute opacity-30"
          style={{ top: "40%", left: "8%" }}
          initial={{ pathLength: 0, opacity: 0, rotate: -90 }}
          animate={{ pathLength: 1, opacity: 0.3, rotate: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="#ffbe0b"
            strokeWidth="4"
            fill="none"
            strokeDasharray="5,5"
          />
        </motion.svg>
      )}

      {/* Estrelas desenhadas */}
      {scrollY > doodleThreshold4 && (
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="absolute opacity-30"
          style={{ top: "70%", right: "20%" }}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{ scale: 1, opacity: 0.3, rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <path
            d="M40,10 L45,30 L65,30 L50,42 L55,62 L40,50 L25,62 L30,42 L15,30 L35,30 Z"
            fill="none"
            stroke="#ff6b35"
            strokeWidth="3"
          />
        </motion.svg>
      )}

      {/* Seta curva apontando */}
      {scrollY > 500 && (
        <motion.svg
          width="100"
          height="120"
          viewBox="0 0 100 120"
          className="absolute opacity-25"
          style={{ top: "30%", right: "15%" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.25 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        >
          <motion.path
            d="M20,20 Q50,10 70,40 T70,80 L65,75 M70,80 L75,75"
            stroke="#00ff88"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      )}
    </div>
  );
}