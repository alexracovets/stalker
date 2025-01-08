"use client";

import Image from "next/image";

export const PDAMainBorder = () => {
	// Массив с данными для каждого края
	const borders = [
		{
			position: "top",
			src: "/pda/border/top.jpg",
			height: "1rem",
			width: "100%",
		},
		{
			position: "bottom",
			src: "/pda/border/horizontal_center.jpg",
			height: ".8rem",
			width: "100%",
		},
		{
			position: "left",
			src: "/pda/border/left.jpg",
			height: "100%",
			width: ".9rem",
		},
		{
			position: "right",
			src: "/pda/border/right.jpg",
			height: "100%",
			width: ".9rem",
		},
	];

	return (
		<div className="absolute left-0 top-0 w-full h-full z-[-1]">
			<div className="relative w-full h-full">
				{borders.map(({ position, src, height, width }, index) => {
					const isVertical =
						position === "left" || position === "right";
					const styles = isVertical
						? `absolute ${position}-0 top-0 w-[${width}] h-full`
						: `absolute left-0 ${position}-0 w-full h-[${height}]`;

					return (
						<div key={index} className={styles}>
							<div className="relative w-full h-full">
								<Image
									src={src}
									fill
									alt={position}
									className="object-cover"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
