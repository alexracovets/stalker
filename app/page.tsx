"use client";

import { PDAVideo, StartNavigation, StartScreen } from "@/components/shared";

export default function Home() {

  return (
    <main className="flex">
      <StartNavigation />
      <StartScreen />
      <PDAVideo />
    </main>
  );
}