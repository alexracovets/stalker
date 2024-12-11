"use client";

import { PDA, StartNavigation, StartScreen } from "@/components/shared";

export default function Home() {
  return (
    <div
      className="flex"
    >
      <StartNavigation />
      <StartScreen />
      <PDA />
    </div>
  );
}
