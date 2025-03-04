import { useMemo } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { CardTypes, cardData, keys } from "@/utils/layout.helper";
import { SpotifyCards } from "@/components/cards/SpotifyCards";
import { InstagramCard } from "@/components/cards/InstagramCard";

function Layout() {
	const ResponsiveReactGridLayout = useMemo(
		() => WidthProvider(Responsive),
		[]
	);

	// Kart tipine göre render edecek fonksiyon
	const renderCard = (key: string) => {
		const card = cardData.lg.find((item) => item.i === key);

		// Eğer key için bir kart tanımlanmadıysa boş bir div döndür
		if (!card) {
			return (
				<div className="h-full w-full flex justify-center items-center bg-white rounded-2xl border border-gray-200 p-4">
					{key}
				</div>
			);
		}

		// Kart boyutuna göre className belirleme
		const sizeClass =
			{
				SMALL: "h-full w-full",
				MEDIUM: "h-full w-full",
				LARGE: "h-full w-full",
				TALL: "h-full w-full",
			}[card.size] || "h-full w-full";

		if (card.type === CardTypes.Spotify) {
			return (
				<div className={sizeClass}>
					<SpotifyCards
						size={card.size}
						title={card.title}
						songCount={card.songCount}
						songArtist={card.songArtist}
						imageUrl={card.imageUrl}
						songs={card.songs}
					/>
				</div>
			);
		} else if (card.type === CardTypes.Instagram) {
			return (
				<div className={sizeClass}>
					<InstagramCard
						size={card.size}
						title={card.title}
						imageUrl={card.imageUrl}
						username={card.username}
					/>
				</div>
			);
		}

		// Bilinmeyen kart tipi için fallback
		return (
			<div className="h-full w-full flex justify-center items-center bg-white rounded-2xl border border-gray-200 p-4">
				Unknown card type: {card.type}
			</div>
		);
	};

	return (
		<div className="w-screen m-auto flex justify-between b-10">
			<ResponsiveReactGridLayout
				className="m-auto w-[900px]"
				breakpoints={{ xl: 1200, lg: 899, md: 768, sm: 480, xs: 200 }}
				cols={{ xl: 4, lg: 4, md: 3, sm: 2, xs: 1 }}
				rowHeight={170}
				margin={[10, 10]}
				containerPadding={[10, 10]} // Dış kenar boşluğu
				layouts={cardData.lg}>
				{keys.map((key) => (
					<div
						key={key}
						className="rounded-2xl cursor-grab active:cursor-grabbing overflow-hidden">
						{renderCard(key)}
					</div>
				))}
			</ResponsiveReactGridLayout>
		</div>
	);
}

export default Layout;
