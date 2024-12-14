"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui";
import { PDAMenuIco } from "@/components/shared/pda/pdaMenu";
import { CarouselApi } from "@/components/ui/carousel";
import { CategoryType } from "@/types";
import { cn } from "@/lib/utils";

interface propType {
    navCategories: CategoryType[]
}

export const PDAMenuCategories = ({ navCategories }: propType) => {
    const [api, setApi] = useState<CarouselApi>();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const router = useRouter();
    const duplicatedCategories = [...navCategories, ...navCategories];

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
        <Carousel className="max-w-[37.6rem] w-full" setApi={setApi} opts={{ align: "start", loop: true, dragFree: true, skipSnaps: true }}>
            <CarouselContent className="min-h-[5rem]">
                {duplicatedCategories.map((item, idx) => {
                    return (
                        <CarouselItem
                            key={idx}
                            onClick={() => categoryClick(idx, item.route)}
                            className={cn(
                                navCategories.length <= 4 ? `basis-1/${navCategories.length === 1 ? 2 : navCategories.length - 1}` : "basis-1/4"
                            )}
                        >
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