"use client";

import { FooterPDA, HeaderPDA } from "@/components/shared";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

const PDALayout = ({ children }: ChildrenProps) => {

  return (
    <>
      <HeaderPDA />
      <main
        className="flex flex-grow pt-[.3rem]"
      >
        {children}
      </main>
      <FooterPDA />
    </>
  )
}

export default PDALayout;