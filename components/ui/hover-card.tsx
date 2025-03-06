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
	isHovered: initialIsHovered,
	position,
	// cardType,
	cardRef,
}: HoverCardProps) => {
	const [cardPosition, setCardPosition] = useState(position);
	const [isHovered, setIsHovered] = useState(initialIsHovered);
	const [activeIcon, setActiveIcon] = useState<string | null>(null);
	const hoverCardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setIsHovered(initialIsHovered);
	}, [initialIsHovered]);

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

	const handleIconClick = (iconType: string, e: React.MouseEvent) => {
		e.stopPropagation();
		setActiveIcon(activeIcon === iconType ? null : iconType);
		setIsHovered(true);
		console.log(`Clicked on ${iconType}`);
	};

	const getIconClassName = (iconType: string) => {
		return `transition-colors relative ${
			activeIcon === iconType ? "text-black" : "text-white hover:text-gray-300"
		}`;
	};

	const getSpanClassName = (iconType: string) => {
		return `cursor-pointer relative ${
			activeIcon === iconType
				? "before:absolute before:content-[''] before:bg-white before:w-[140%] before:h-[140%] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-sm before:-z-10"
				: ""
		}`;
	};

	return createPortal(
		<div
			ref={hoverCardRef}
			className="absolute z-[999] w-fit bg-black gap-3 rounded-xl shadow-lg p-4"
			style={{
				top: `${cardPosition.top}px`,
				left: `${cardPosition.left}px`,
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={(e) => {
				if (!hoverCardRef.current?.contains(e.relatedTarget as Node)) {
					setIsHovered(false);
				}
			}}>
			<div className="flex flex-row flex-1 no-wrap gap-3 items-center">
				<span
					onClick={(e) => handleIconClick("vertical", e)}
					className={getSpanClassName("vertical")}>
					<LuRectangleVertical className={getIconClassName("vertical")} />
				</span>
				<span
					onClick={(e) => handleIconClick("horizontal", e)}
					className={getSpanClassName("horizontal")}>
					<LuRectangleHorizontal className={getIconClassName("horizontal")} />
				</span>
				<span
					onClick={(e) => handleIconClick("rectangle", e)}
					className={getSpanClassName("rectangle")}>
					<PiRectangleBold className={getIconClassName("rectangle")} />
				</span>
				<span
					onClick={(e) => handleIconClick("square", e)}
					className={getSpanClassName("square")}>
					<TbSquareDashed className={getIconClassName("square")} />
				</span>
				<Separator
					orientation="vertical"
					className=" !h-2 !bg- !text-gray-500"
				/>
				<span
					onClick={(e) => handleIconClick("dots", e)}
					className={getSpanClassName("dots")}>
					<HiDotsHorizontal className={getIconClassName("dots")} />
				</span>
			</div>
		</div>,
		document.body
	);
};
