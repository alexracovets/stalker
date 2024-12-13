"use client";

import React from "react";

import { PDAFooter } from "@/components/shared/pda/pdaFooter/pdaFooter";
import { PDADisplay } from "@/components/shared/pda/pdaDisplay";
import { PDAHeader } from "@/components/shared/pda/pdaHeader";
import { PDAMenu } from "@/components/shared/pda/pdaMenu";
import { PDAMainBorder } from "@/components/shared/pda";

interface ChildrenProps {
  children: React.ReactNode;
}

const PDALayout = ({ children }: ChildrenProps) => {

  return (
    <>
      <PDAHeader />
      <div className="flex justify-between w-full flex-grow relative">
        <PDAMainBorder />
        <PDAMenu />
        <PDADisplay>
          {children}
        </PDADisplay>
      </div>
      <PDAFooter />
    </>
  )
}

export default PDALayout;