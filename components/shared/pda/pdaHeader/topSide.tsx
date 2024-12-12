"use client";

import { HeaderInternet, HeaderPlug, HeaderTime, } from "@/components/shared/pda/pdaHeader";

export const TopSide = () => {

    return (
        <div className="flex justify-center items-center">
            <HeaderInternet />
            <HeaderPlug />
            <HeaderTime />
        </div>
    )
}