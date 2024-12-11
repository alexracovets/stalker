"use client";

import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: ChildrenProps) => {

  return (
    <main className="bg-neutral-100 min-h-screen">
      {children}
    </main>
  )
}

export default AuthLayout;