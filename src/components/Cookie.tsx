"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Fortune from "./Fortune";
import LoadingDots from "./LoadingDots";

const fortunes = [
  "If I work at Venture Miner, even Mondays will be amazing.",
  "My happiness will reach epic levels at Venture Miner.",
  "At Venture Miner, even breakfast will be a reason to smile.",
  "Working at Venture Miner will make me smile even during long meetings.",
  "If I join Venture Miner, my days will be full of exciting adventures.",
  "Warning: my productivity will skyrocket at Venture Miner.",
  "If I am at Venture Miner, even bugs will seem charming.",
  "My experience at Venture Miner will be so good that I’ll want to work overtime for fun.",
  "At Venture Miner, I’ll discover that loving what I do is possible.",
  "If I get hired by Venture Miner, my colleagues will find me even more awesome.",
  "Working at Venture Miner will make my routine epic and memorable.",
  "If I am at Venture Miner, even lunch breaks will feel like achievements.",
];

export default function Cookie() {
  const [cracked, setCracked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fortune, setFortune] = useState<string | null>(null);
  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([]);

  const crackCookie = () => {
    setCracked(true);
    setLoading(true);

    setTimeout(() => {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      const numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 60 + 1)).sort((a, b) => a - b);

      setFortune(randomFortune);
      setLuckyNumbers(numbers);
      setLoading(false);
    }, 400);
  };

  const resetCookie = () => {
    setCracked(false);
    setLoading(false);
    setFortune(null);
    setLuckyNumbers([]);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div whileTap={{ scale: 0.95 }} onClick={crackCookie}>
        <Image src="/cookie.png" alt="Fortune cookie" width={500} height={300} style={{ objectFit: "contain" }} />
      </motion.div>

      {!cracked && (
        <motion.div
          className="mt-4 text-orange-700 font-extrabold text-3xl md:text-4xl lg:text-5xl"
          animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          Tap Here!
        </motion.div>
      )}

      {loading && <LoadingDots />}

      {!loading && fortune && <Fortune fortune={fortune} luckyNumbers={luckyNumbers} onReset={resetCookie} />}
    </div>
  );
}
