"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const HeaderTime = () => {
    const [currentTime, setCurrentTime] = useState<string>("00:00"); 
    
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setCurrentTime(`${hours}:${minutes}`);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-[9.9rem] flex justify-center items-center gap-x-[.8rem]">
            <div className="text-[1.6rem] text-pda-white font-roboto">
                {currentTime}
            </div>
            <div className="relative w-[1.6rem] h-[1.6rem]">
                <Image src="/headerPDA/chargeBattery.svg" alt="internet" fill className="object-contain" />
            </div>
        </div>
    );
};
