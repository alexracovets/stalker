"use client";

import { Initial, InitialVideo } from "@/components/shared/mainScreen";

export default function Home() {

  return (
    <main className="flex">
      <Initial />
      <InitialVideo />
    </main>
  );
}