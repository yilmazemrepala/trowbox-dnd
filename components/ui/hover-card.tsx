import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { LuRectangleVertical, LuRectangleHorizontal } from "react-icons/lu";
import { TbSquareDashed } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { Separator } from "@/components/ui/separator";
import { useCardResize } from "@/hooks/useCardResize";

interface HoverCardProps {
	isHovered: boolean;
	isImage?: boolean;
	title: string;
	position: {
		top: number;
		left: number;
	};
	cardType: string;
	cardRef: React.RefObject<HTMLDivElement>;
	cardId: string; // Add cardId to identify which card to resize
	onSizeChange?: (
		size: "SMALL" | "MEDIUM" | "TALL" | "LARGE" | "BANNER"
	) => void;
}

export const HoverCard = ({
	isHovered: initialIsHovered,
	position,
	cardType,
	cardRef,
	cardId,
	isImage,
	onSizeChange,
}: HoverCardProps) => {
	const [cardPosition, setCardPosition] = useState(position);
	const [isHovered, setIsHovered] = useState(initialIsHovered);
	const [activeIcon, setActiveIcon] = useState<string | null>(null);
	const hoverCardRef = useRef<HTMLDivElement>(null);
	const { resizeCard } = useCardResize();

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
		switch (iconType) {
			case "squareSmall":
				onSizeChange?.("SMALL");
				break;
			case "horizontal":
				onSizeChange?.("MEDIUM");
				break;
			case "vertical":
				onSizeChange?.("TALL");
				break;
			case "square":
				onSizeChange?.("LARGE");
				break;
			case "banner":
				onSizeChange?.("BANNER");
				break;
			default:
				break;
		}
	};

	const getIconClassName = (iconType: string) => {
		return `transition-colors ${
			activeIcon === iconType ? "text-black" : "text-white hover:text-gray-300"
		}`;
	};

	const getSpanClassName = (iconType: string) => {
		return `cursor-pointer relative p-1.5 flex items-center justify-center rounded-sm ${
			activeIcon === iconType ? "bg-white" : "hover:bg-gray-800"
		}`;
	};

	return createPortal(
		<div
			ref={hoverCardRef}
			className="absolute z-20 w-fit bg-black gap-3 rounded-xl shadow-lg p-2 select-none"
			style={{
				top: `${cardPosition.top}px`,
				left: `${cardPosition.left}px`,
			}}
			onMouseDown={(e) => e.stopPropagation()}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={(e) => {
				if (
					!e.relatedTarget ||
					!hoverCardRef.current?.contains(e.relatedTarget as Node)
				) {
					setIsHovered(false);
				}
			}}>
			<div className="flex flex-row flex-1 no-wrap gap-1 items-center">
				<span
					onClick={(e) => handleIconClick("squareSmall", e)}
					className={getSpanClassName("squareSmall")}>
					<TbSquareDashed
						className={`${getIconClassName(
							"squareSmall"
						)} h-3 w-3 stroke-[3.5]`}
					/>
				</span>
				<span
					onClick={(e) => handleIconClick("horizontal", e)}
					className={getSpanClassName("horizontal")}>
					<LuRectangleHorizontal
						className={`${getIconClassName("horizontal")} h-5 w-5 stroke-[2.5]`}
					/>
				</span>
				<span
					onClick={(e) => handleIconClick("vertical", e)}
					className={getSpanClassName("vertical")}>
					<LuRectangleVertical
						className={`${getIconClassName("vertical")} h-5 w-5 stroke-[2.5]`}
					/>
				</span>
				<span
					onClick={(e) => handleIconClick("square", e)}
					className={getSpanClassName("square")}>
					<TbSquareDashed
						className={`${getIconClassName("square")} h-5 w-5 stroke-[2.5]`}
					/>
				</span>
				{isImage && (
					<span
						onClick={(e) => handleIconClick("banner", e)}
						className={getSpanClassName("banner")}>
						<LuRectangleHorizontal
							className={`${getIconClassName("banner")} h-8 w-12 stroke-[2.5]`}
						/>
					</span>
				)}
				<Separator
					orientation="vertical"
					className=" !h-3 !bg- !text-gray-500"
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
