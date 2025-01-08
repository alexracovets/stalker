"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface ItemType {
	left: string;
	width: string;
}

interface HeaderLinksDashType {
	styles: {
		underline: ItemType;
		shortline: ItemType;
	};
	isHidenDash: boolean;
}

export const HeaderLinksDash = ({
	styles,
	isHidenDash,
}: HeaderLinksDashType) => {
	return (
		<div
			className={cn(
				"relative transition-opacity ease-out duration-300 select-none pointer-events-none",
				isHidenDash ? "opacity-0" : "opacity-1"
			)}
		>
			<div
				className={cn(
					"absolute bottom-[0] h-[.15rem] bg-custom-gradient transition-all ease-out duration-300 flex justify-center items-center"
				)}
				style={styles.underline}
			>
				<div className="relative w-full h-full flex justify-center items-end">
					<div className="relative w-[8.5rem] h-[2.5rem]">
						<Image
							src="/headerPDA/line_dot.png"
							fill
							alt="dot"
							className="object-cover"
						/>
					</div>
				</div>
			</div>
			<div
				className="absolute bottom-[.15rem] h-[.3rem] bg-custom-gradient_second transition-all ease-out duration-300 flex justify-center items-center"
				style={styles.shortline}
			>
				<div className="relative w-full h-full flex justify-center items-end">
					<div className="relative w-[4.4rem] h-[1.7rem] blur-[1rem]">
						<Image
							src="/headerPDA/line_dot_small.png"
							fill
							alt="dot"
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
