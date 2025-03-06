import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface HoverCardProps {
	isHovered: boolean;
	title: string;
	position: {
		top: number;
		left: number;
	};
	cardType: string;
}

export const HoverCard = ({
	isHovered,
	title,
	position,
	cardType,
}: HoverCardProps) => {
	const [cardPosition, setCardPosition] = useState(position);

	useEffect(() => {
		const updatePosition = () => {
			// Calculate position to show hover card below the main card
			const top = position.top; // Add small offset from the bottom of the card
			const left = position.left;

			setCardPosition({
				top,
				left,
			});
		};

		updatePosition();
		window.addEventListener("scroll", updatePosition);
		window.addEventListener("resize", updatePosition);

		return () => {
			window.removeEventListener("scroll", updatePosition);
			window.removeEventListener("resize", updatePosition);
		};
	}, [position]);

	if (!isHovered) return null;

	return createPortal(
		<div
			className="absolute z-[999] w-[280px] bg-white border border-gray-200 rounded-xl shadow-lg p-4"
			style={{
				top: `${cardPosition.top}px`,
				left: `${cardPosition.left}px`,
			}}>
			<div className="flex flex-col gap-3">
				<div className="flex items-center gap-3">
					<div className="flex flex-col">
						<span className="font-medium text-sm">{title}</span>
						<span className="text-gray-500 text-xs">{cardType}</span>
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
};
