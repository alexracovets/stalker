"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

import usePDA from "@/store/usePDA";
import { cn } from "@/lib/utils";

interface HeaderLinksListType {
	name: string;
	route: string;
	id: string;
	handleMouseEnter: (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => void;
}

export const HeaderLink = ({
	name,
	route,
	id,
	handleMouseEnter,
}: HeaderLinksListType) => {
	const setMainSection = usePDA((state) => state.setMainSection);
	const mainSection = usePDA((state) => state.mainSection);
	const pathname = usePathname();

	useEffect(() => {
		if (pathname.includes(route)) {
			setMainSection(id);
		}
	}, [pathname, route, id, setMainSection]);

	return (
		<li>
			<Link
				id={id}
				href={route}
				onMouseEnter={handleMouseEnter}
				className={cn(
					"block text-[2.5rem] font-roboto_condensed py-[3.2rem] px-[3rem] cursor-pointer",
					"hover:font-[500] hover:text-pda-linksActive",
					mainSection === id
						? "text-pda-linksActive"
						: "text-pda-links"
				)}
			>
				<span>{name}</span>
			</Link>
		</li>
	);
};
