"use client";

import Cookie from "@/components/Cookie";
import Fortune from "@/components/Fortune";
import LoadingDots from "@/components/LoadingDots";
import './globals.css';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-4">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-700 text-center">
          Fortune Cookie
        </h1>
      </header>
      <Cookie />
      <footer className="mt-10 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Venture Miner
      </footer>
    </main>
  );
}
