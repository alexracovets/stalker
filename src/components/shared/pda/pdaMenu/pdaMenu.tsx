"use client";

import {
	PDAMenuBorder,
	PDAMenuNavigation,
} from "@/components/shared/pda/pdaMenu";

export const PDAMenu = () => {
	return (
		<aside className="relative w-[52.5rem] max-w-[52.5rem] h-auto flex-grow pt-[1rem] pb-[.8rem] pl-[.9rem] pr-[.8rem]">
			<PDAMenuBorder />
			<PDAMenuNavigation />
		</aside>
	);
};
