"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import usePDA from '@/store/usePDA';

export const PDAVideo = () => {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);
    const isPlay = usePDA(state => state.isPlay);
    const isOpenedPDA = usePDA(state => state.isOpen);

    const setIsPlay = usePDA(state => state.setIsPlay);

    const handleVideoPlay = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const handleVideoEnd = () => {
        if (isOpenedPDA) {
            router.push("/pda");
        } else {
            router.push("/");
        }
        setTimeout(() => {
            setIsPlay(false);
        }, 300)

    };

    useEffect(() => {
        if (isPlay) handleVideoPlay();
    }, [isPlay]);

    return (
        <AnimatePresence>
            {
                isPlay &&
                <motion.dialog
                    className={cn(
                        "absolute left-0 top-0 w-full h-screen flex items-center justify-center bg-black"
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
