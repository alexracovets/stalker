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
    const duplicatedCategories = [...navCategories, ...navCategories];

    const routeTo = (to: string) => {
        router.push(to);
    }

    const categoryClick = (to: number, route: string | false) => {
        if (api) {
            api.scrollTo(to);
        };
    }

    useEffect(() => {
        const correctedIndex = activeIndex % navCategories.length;
        const route = navCategories[correctedIndex]?.route;

        if (route) {
            routeTo(route);
        }
    }, [activeIndex, navCategories]);

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
                            className="basis-1/4"
                        >
                            <PDAMenuIco Icon={item.ico} active={activeIndex === idx} />
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious data-menu_pda-previous>A</CarouselPrevious>
            <CarouselNext data-menu_pda-next>D</CarouselNext>
        </Carousel>
    )
}