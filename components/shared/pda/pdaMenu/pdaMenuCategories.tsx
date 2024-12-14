"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui";
import { PDAMenuIco } from "@/components/shared/pda/pdaMenu";
import { CarouselApi } from "@/components/ui/carousel";
import { CategoryType } from "@/types";

interface propType {
    navCategories: CategoryType[]
}

export const PDAMenuCategories = ({ navCategories }: propType) => {
    const [api, setApi] = useState<CarouselApi>();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const router = useRouter();

    const categoryClick = (to: number, route: string | false) => {
        if (api) {
            api.scrollTo(to);
            if (route) {
                router.push(route);
            }
        };
    }

    useEffect(() => {
        if (api) {
            const onSelect = () => {
                setActiveIndex(api.selectedScrollSnap());
            };

            api.on("select", onSelect);
            setActiveIndex(api.selectedScrollSnap());

            return () => {
                api.off("select", onSelect);
            };
        }
    }, [api]);

    return (
        <Carousel className="max-w-[37.6rem] w-full" setApi={setApi} opts={{ align: "start", loop: true }}>
            <CarouselContent className="min-h-[5rem]">
                {navCategories.map((item, idx) => {
                    return (
                        <CarouselItem key={idx} className="basis-1/4" onClick={() => categoryClick(idx, item.route)}>
                            <PDAMenuIco Icon={item.ico} active={activeIndex === idx} />
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious>A</CarouselPrevious>
            <CarouselNext>D</CarouselNext>
        </Carousel>
    )
}