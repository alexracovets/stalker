"use client";

import { StartNavigation, StartScreen } from "@/components/shared";

export default function Home() {

  return (
    <main className="flex">
      <StartNavigation />
      <StartScreen />
    </main>
  );
}