"use client";

import { motion } from "framer-motion";

interface FortuneProps {
  fortune: string;
  luckyNumbers: number[];
  onReset: () => void;
}

export default function Fortune({ fortune, luckyNumbers, onReset }: FortuneProps) {
  return (
    <div className="mt-6 flex flex-col items-center">
      {/* Frase da sorte */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="fortune-box"
      >
        {fortune}
      </motion.div>

      {/* Números da sorte */}
      <div className="lucky-numbers-container">
        {luckyNumbers.map((num, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0, scale: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 400, damping: 15 }}
            className="lucky-number"
          >
            {num}
          </motion.div>
        ))}
      </div>

      {/* Botão "Try Again" */}
      <motion.button
        onClick={onReset}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="try-again"
      >
        Try Again!
      </motion.button>
    </div>
  );
}
