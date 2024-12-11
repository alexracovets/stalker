"use client";

import { PDA, StartNavigation, StartScreen } from "@/components/shared";

export default function Home() {

  return (
    <main className="flex">
      <StartNavigation />
      <StartScreen />
      <PDA />
    </main>
  );
}