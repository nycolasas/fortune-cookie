"use client";

import { motion } from "framer-motion";

export default function LoadingDots() {
  return (
    <div className="loading-dots">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="loading-dot"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
