"use client";

import { useEffect, useState } from "react";

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

    const categoryClick = (to: number) => {
        if (api) { api.scrollTo(to); };
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
                        <CarouselItem key={idx} className="basis-1/4" onClick={() => categoryClick(idx)}>
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