"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import usePDA from '@/store/usePDA';

export const VideoPDA = () => {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);
    const isPlay = usePDA(state => state.isPlay);

    const setIsPlay = usePDA(state => state.setIsPlay);

    const handleVideoPlay = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const handleVideoEnd = () => {
        router.push("/pda");
        setTimeout(() => {
            setIsPlay(false);
        }, 300);
    };

    useEffect(() => {
        if (isPlay && videoRef) {
            handleVideoPlay();
        };
    }, [isPlay, videoRef]);

    return (
        <AnimatePresence>
            {
                isPlay &&
                <motion.dialog
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring" }}
                    className={cn(
                        "absolute left-0 top-0 w-full h-screen flex items-center justify-center bg-pda-black"
                    )}
                >
                    <video
                        ref={videoRef}
                        onEnded={handleVideoEnd}
                        className="w-full h-full object-cover"
                    >
                        <source src="/pda/pda_open.mp4" type="video/mp4" />
                    </video>
                </motion.dialog>
            }
        </AnimatePresence>
    );
};
