import React, { memo, useRef } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";
import { CardProps } from "@/types/cardProps.types";
import { HoverCard } from "@/components/ui/hover-card";
import { useHoverCard } from "@/hooks/useHoverCard";

const ImageCards = memo(
	({ i, title, imageUrl, isDragging, onSizeChange }: CardProps) => {
		const defaultImage = "https://placehold.co/400x400";
		const catalogImage = imageUrl || defaultImage;

		const cardRef = useRef<HTMLDivElement>(null);
		const { isHovered, hoverCardPosition, handleMouseEnter, handleMouseLeave } =
			useHoverCard({ ref: cardRef, isDragging });

		const transitionStyle = {
			transition: "opacity 100ms ease",
		};

		return (
			<div
				ref={cardRef}
				className="size-full relative"
				style={transitionStyle}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<div className="size-full bg-white rounded-3xl flex flex-col justify-between relative group">
					<div
						className={`remove-card absolute top-[-10px] left-[-10px] border border-gray-200 bg-white 
						rounded-full w-8 h-8 flex items-center justify-center p-1.5 z-50
						${isDragging ? "hidden" : "opacity-0 group-hover:opacity-100"} 
						transition-opacity duration-200`}>
						<Trash className="w-10 h-10 text-black" />
					</div>

					<div className="size-full relative overflow-hidden">
						<Image
							src={catalogImage}
							alt={title}
							fill
							className="rounded-3xl object-cover pointer-events-none"
						/>
					</div>
				</div>

				<HoverCard
					isHovered={isHovered}
					isImage={true}
					title={title}
					position={hoverCardPosition}
					cardType="image"
					cardRef={cardRef}
					cardId={i}
					onSizeChange={onSizeChange}
				/>
			</div>
		);
	}
);

ImageCards.displayName = "ImageCards";

export { ImageCards };
