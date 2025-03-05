import { memo, useMemo } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { cardData } from "@/utils/layout.helper";
// import { CardTypes, cardData, keys } from "@/utils/layout.helper";
// import { SpotifyCards } from "@/components/cards/SpotifyCards";
// import { InstagramCard } from "@/components/cards/InstagramCard";

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
				rowHeight={164}
				margin={[10, 10]}
				layouts={cardData}
				containerPadding={[10, 10]}>
				{allCards.map((card) => (
					<div
						key={card.i}
						className="bg-slate-200 flex justify-center items-center shadow-[inset_0_0_0_2px_rgba(0,0,0,0)] 
						 rounded-2xl text-2xl text-[#1d1d1f] visible cursor-grab active:cursor-grabbing">
						<Block keyProp={card.i} />
					</div>
				))}
			</ResponsiveReactGridLayout>
		</div>
	);
};

const Block = memo(({ keyProp }: { keyProp: string }) => {
	return (
		<div className="h-full w-full flex flex-col justify-center items-center p-6 bg-slate-200  text-[var(--black-1)] rounded-2xl text-3xl uppercase">
			{keyProp}
		</div>
	);
});

Block.displayName = "Block";

export default memo(Layout);
