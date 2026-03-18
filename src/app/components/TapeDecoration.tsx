import { motion } from "motion/react";

interface TapeProps {
  color?: string;
  width?: string;
  rotation?: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export function TapeDecoration({ color = "bg-yellow-300/70", width = "w-32", rotation = "rotate-12", position }: TapeProps) {
  return (
    <motion.div
      className={`absolute ${width} h-6 ${color} ${rotation} shadow-md pointer-events-none opacity-50`}
      style={position}
      whileHover={{ scale: 1.05 }}
    />
  );
}

export function MultipleTapes() {
  return (
    <div className="pointer-events-none">
      <TapeDecoration
        color="bg-yellow-300/50"
        width="w-24"
        rotation="-rotate-12"
        position={{ top: "10%", left: "5%" }}
      />
      <TapeDecoration
        color="bg-pink-300/50"
        width="w-32"
        rotation="rotate-6"
        position={{ top: "15%", right: "8%" }}
      />
      <TapeDecoration
        color="bg-blue-300/50"
        width="w-28"
        rotation="-rotate-3"
        position={{ top: "65%", left: "12%" }}
      />
      <TapeDecoration
        color="bg-green-300/50"
        width="w-36"
        rotation="rotate-12"
        position={{ bottom: "25%", right: "15%" }}
      />
    </div>
  );
}