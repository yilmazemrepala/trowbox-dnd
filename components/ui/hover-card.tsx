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
			const viewportHeight = window.innerHeight;
			const cardHeight = 200; // Hover card'ın yaklaşık yüksekliği
			let top = position.top;

			// Eğer hover card viewport'un altından taşacaksa, kartın üstünde göster
			if (position.top + cardHeight > viewportHeight) {
				top = position.top - cardHeight - 40; // 40px offset
			}

			setCardPosition({
				top,
				left: position.left,
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
				transform: "translateY(0)",
			}}>
			<div className="flex flex-col gap-3">
				<div className="flex items-center gap-3">
					<div className="w-12 h-12 rounded-full bg-gray-100"></div>
					<div className="flex flex-col">
						<span className="font-medium text-sm">{title}</span>
						<span className="text-gray-500 text-xs">{cardType}</span>
					</div>
				</div>

				{/* <div className="flex items-center justify-between border-t border-b border-gray-100 py-2">
					<div className="flex flex-col items-center">
						<span className="font-medium text-sm">1.2K</span>
						<span className="text-gray-500 text-xs">Posts</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="font-medium text-sm">12.3K</span>
						<span className="text-gray-500 text-xs">Followers</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="font-medium text-sm">321</span>
						<span className="text-gray-500 text-xs">Following</span>
					</div>
				</div>

				<p className="text-sm text-gray-600">
					Instagram account description goes here. This is a sample bio text.
				</p>
			</div> */}
			</div>
		</div>,
		document.body
	);
};
