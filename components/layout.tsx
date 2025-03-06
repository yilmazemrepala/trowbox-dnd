"use client";
import "@/public/index.css";
import { memo, useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import type { Layout } from "react-grid-layout";
import { cardData } from "@/utils/layout.helper";
import { InstagramCards } from "@/components/cards/InstagramCards";
import { SpotifyCards } from "@/components/cards/SpotifyCards";
import { CatalogCards } from "@/components/cards/CatalogCards";
import { YoutubeCards } from "@/components/cards/YoutubeCards";
import { LinkedinCards } from "./cards/LinkedinCards";
import { useDragHandler } from "@/utils/dragHelper";
import { CardProps } from "@/types/cardProps.types";

const Layout = () => {
	const [isDragging, setIsDragging] = useState(false);

	const allCards = cardData.lg.map((card) => ({
		...card,
		size: card.size as "TALL" | "SMALL" | "MEDIUM" | "LARGE",
	}));

	const { onDragStart, onDragStop } = useDragHandler(allCards);

	const handleDragStart = (layout: Layout[], oldItem: Layout) => {
		setIsDragging(true);
		onDragStart?.(layout, oldItem);
	};

	const handleDragStop = () => {
		setIsDragging(false);
		onDragStop?.();
	};

	const ResponsiveReactGridLayout = useMemo(
		() => WidthProvider(Responsive),
		[]
	);

	return (
		<div className="w-screen m-auto flex justify-between b-10">
			<ResponsiveReactGridLayout
				className="m-auto max-w-[900px]"
				breakpoints={{ xl: 1200, lg: 899, md: 768, sm: 480, xs: 200 }}
				cols={{ xl: 4, lg: 4, md: 3, sm: 2, xs: 1 }}
				rowHeight={180}
				margin={[10, 10]}
				layouts={cardData}
				containerPadding={[10, 10]}
				onDragStart={handleDragStart}
				onDragStop={handleDragStop}
				preventCollision={true} // sonradan ekledim
				compactType={null} // sonradan ekledim
			>
				{allCards.map((card) => (
					<div
						key={card.i}
						className=" flex justify-center items-center shadow-[inset_0_0_0_2px_rgba(0,0,0,0)] 
						 rounded-2xl text-2xl text-[#1d1d1f] visible cursor-grab active:cursor-grabbing">
						<Block keyProp={card.i} isDragging={isDragging} {...card} />
					</div>
				))}
			</ResponsiveReactGridLayout>
		</div>
	);
};

const Block = memo(({ keyProp, isDragging, ...card }: CardProps) => {
	switch (card.type) {
		case "instagram":
			return <InstagramCards {...card} isDragging={isDragging} />;
		case "spotify":
			return <SpotifyCards {...card} isDragging={isDragging} />;
		case "catalog":
			return <CatalogCards {...card} isDragging={isDragging} />;
		case "youtube":
			return <YoutubeCards {...card} isDragging={isDragging} />;
		case "linkedin":
			return <LinkedinCards {...card} isDragging={isDragging} />;
		default:
			return (
				<div className="h-full w-full flex flex-col justify-center items-center p-6 bg-slate-200 text-[var(--black-1)] rounded-2xl text-3xl uppercase">
					{keyProp}
				</div>
			);
	}
});

Block.displayName = "Block";

export default memo(Layout);
