import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { LuRectangleVertical, LuRectangleHorizontal } from "react-icons/lu";
import { PiRectangleBold } from "react-icons/pi";
import { TbSquareDashed } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { Separator } from "@/components/ui/separator";

interface HoverCardProps {
	isHovered: boolean;
	title: string;
	position: {
		top: number;
		left: number;
	};
	cardType: string;
	cardRef: React.RefObject<HTMLDivElement>;
}

export const HoverCard = ({
	isHovered,
	position,
	// cardType,
	cardRef,
}: HoverCardProps) => {
	const [cardPosition, setCardPosition] = useState(position);
	const hoverCardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updatePosition = () => {
			if (!cardRef.current || !hoverCardRef.current) return;
			const rect = cardRef.current.getBoundingClientRect();
			const hoverWidth = hoverCardRef.current.offsetWidth;

			const top = rect.bottom + window.scrollY + 4;
			const left = rect.left + rect.width / 2 - hoverWidth / 2;

			setCardPosition({ top, left });
		};

		updatePosition();
		window.addEventListener("scroll", updatePosition);
		window.addEventListener("resize", updatePosition);

		return () => {
			window.removeEventListener("scroll", updatePosition);
			window.removeEventListener("resize", updatePosition);
		};
	}, [position, cardRef]);

	if (!isHovered) return null;

	return createPortal(
		<div
			ref={hoverCardRef}
			className="absolute z-[999] w-fit bg-black gap-3 rounded-xl shadow-lg p-4"
			style={{
				top: `${cardPosition.top}px`,
				left: `${cardPosition.left}px`,
			}}>
			<div className="flex flex-row flex-1 no-wrap gap-3 items-center">
				<span>
					<LuRectangleVertical className="text-white" />
				</span>
				<span>
					<LuRectangleHorizontal className="text-white" />
				</span>
				<span>
					<PiRectangleBold className="text-white" />
				</span>
				<span>
					<TbSquareDashed className="text-white" />
				</span>
				<Separator
					orientation="vertical"
					className=" !h-2 !bg- !text-gray-500"
				/>
				<span>
					<HiDotsHorizontal className="text-white" />
				</span>
			</div>
		</div>,
		document.body
	);
};
