"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const HeaderTime = () => {
    const [currentTime, setCurrentTime] = useState<string>("00:00");
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setCurrentTime(`${hours}:${minutes}`);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        setIsActive(true)
        return () => clearInterval(intervalId);

    }, []);

    return (
        <div className="w-[9.9rem] flex justify-center items-center gap-x-[.8rem] select-none">
            <div className={cn(
                "text-[1.6rem] text-pda-white font-roboto transition-opacity ease-in-out duration-300",
                isActive ? "opacity-1" : "opacity-0"
            )}>
                {currentTime}
            </div>
            <div className="relative w-[1.6rem] h-[.8rem]">
                <svg width="100%" height="100%" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6 8C13.8267 8 14.0167 7.92333 14.17 7.77C14.3233 7.61667 14.4 7.42667 14.4 7.2V5.6H16V2.4H14.4V0.8C14.4 0.573333 14.3233 0.383333 14.17 0.23C14.0167 0.0766667 13.8267 0 13.6 0H0.8C0.573334 0 0.383333 0.0766667 0.23 0.23C0.0766668 0.383333 0 0.573333 0 0.8V7.2C0 7.42667 0.0766668 7.61667 0.23 7.77C0.383333 7.92333 0.573334 8 0.8 8H13.6ZM12.8 6.4H9.6V1.6H12.8V6.4Z" fill="#A8A3A0" />
                </svg>
            </div>
        </div>
    );
};
