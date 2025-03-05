"use client";
import { memo, useMemo } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { cardData } from "@/utils/layout.helper";
import { InstagramCard } from "@/components/cards/InstagramCard";
import { SpotifyCards } from "@/components/cards/SpotifyCards";

import "@/public/index.css";

const Layout = () => {
	const ResponsiveReactGridLayout = useMemo(
		() => WidthProvider(Responsive),
		[]
	);

	// Tüm card'ları tek bir dizide topla
	const allCards = [...cardData.lg];

	return (
		<div className="w-screen m-auto flex justify-between b-10">
			<ResponsiveReactGridLayout
				className="m-auto w-[900px]"
				breakpoints={{ xl: 1200, lg: 899, md: 768, sm: 480, xs: 200 }}
				cols={{ xl: 4, lg: 4, md: 3, sm: 2, xs: 1 }}
				rowHeight={180}
				margin={[10, 10]}
				layouts={cardData}
				containerPadding={[10, 10]}>
				{allCards.map((card) => (
					<div
						key={card.i}
						className=" flex justify-center items-center shadow-[inset_0_0_0_2px_rgba(0,0,0,0)] 
						 rounded-2xl text-2xl text-[#1d1d1f] visible cursor-grab active:cursor-grabbing">
						<Block keyProp={card.i} {...card} />
					</div>
				))}
			</ResponsiveReactGridLayout>
		</div>
	);
};

const Block = memo(({ keyProp, ...card }: any) => {
	switch (card.type) {
		case "instagram":
			return <InstagramCard {...card} />;
		case "spotify":
			return <SpotifyCards {...card} />;
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
