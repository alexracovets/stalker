"use client";

import { HeaderPDA, BorderPDA, FooterPDA, MenuPDA } from "@/components/shared";
import Image from "next/image";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

const PDALayout = ({ children }: ChildrenProps) => {

  return (
    <>
      <HeaderPDA />
      <div
        className="flex flex-col flex-grow pt-[.3rem] relative"
      >
        <main
          className="relative flex bg-pda-display flex-grow z-0"
        >
          <div className="absolute bottom-0 left-0 w-full h-[.8rem]">
            <div className="relative w-full h-full">
              <Image src="/pda/border/horizontal_center.jpg" fill alt="center" className="object-cover" />
            </div>
          </div>
          <MenuPDA />
          <div
            className="flex-grow h-full"
          >
            {children}
          </div>
        </main>
        <FooterPDA />
        <BorderPDA />
      </div>
    </>
  )
}

export default PDALayout;