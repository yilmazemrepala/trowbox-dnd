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
import { LinkedinCards } from "./LinkedinCards";
import { useDragHandler } from "@/utils/dragHelper";
import { CardProps } from "@/types/cardProps.types";
import { CardResizeProvider } from "@/hooks/useCardResize";
import { useLayoutManager } from "@/hooks/useLayoutManager";

const LayoutContent = memo(() => {
	const [isDragging, setIsDragging] = useState(false);
	const { layouts, handleLayoutChange } = useLayoutManager(cardData);

	const allCards = layouts.lg.map(
		(card: Omit<CardProps, "isDragging" | "keyProp">) => ({
			...card,
			size: card.size as "TALL" | "SMALL" | "MEDIUM" | "LARGE",
		})
	);

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
		<div className="w-full flex justify-center">
			<ResponsiveReactGridLayout
				className="w-full"
				breakpoints={{ xl: 1200, lg: 899, md: 768, sm: 480, xs: 200 }}
				cols={{ xl: 4, lg: 4, md: 4, sm: 2, xs: 1 }}
				rowHeight={180}
				margin={[10, 10]}
				layouts={layouts}
				containerPadding={[10, 10]}
				onDragStart={handleDragStart}
				onDragStop={handleDragStop}
				onLayoutChange={handleLayoutChange}>
				{allCards.map((card: Omit<CardProps, "isDragging" | "keyProp">) => (
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
});

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

const GridLayout = () => {
	return (
		<CardResizeProvider initialLayouts={cardData}>
			<LayoutContent />
		</CardResizeProvider>
	);
};

Block.displayName = "Block";
LayoutContent.displayName = "LayoutContent";

export default memo(GridLayout);
