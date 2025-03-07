import { createContext, useContext, useState, ReactNode, useMemo } from "react";

interface CardResizeContextType {
	resizeCard: (id: string, newSize: { w: number; h: number }) => void;
	cardSizes: Record<string, { w: number; h: number }>;
	updateLayoutPositions: (layouts: any) => void;
}

const CardResizeContext = createContext<CardResizeContextType | undefined>(
	undefined
);

export const CardResizeProvider = ({
	children,
	initialLayouts,
}: {
	children: ReactNode;
	initialLayouts: any;
}) => {
	// Initialize with the current card sizes from layout
	const initialSizes = useMemo(() => {
		const sizes: Record<string, { w: number; h: number }> = {};
		initialLayouts.lg.forEach((item: any) => {
			sizes[item.i] = { w: item.w, h: item.h };
		});
		return sizes;
	}, [initialLayouts]);

	const [cardSizes, setCardSizes] = useState(initialSizes);
	const [currentLayouts, setCurrentLayouts] = useState(initialLayouts);

	// Yeni eklenen fonksiyon - layout pozisyonlarını günceller
	const updateLayoutPositions = useMemo(
		() => (layouts: any) => {
			setCurrentLayouts(layouts);
		},
		[]
	);

	const resizeCard = useMemo(
		() => (id: string, newSize: { w: number; h: number }) => {
			setCardSizes((prev) => ({
				...prev,
				[id]: newSize,
			}));
		},
		[]
	);

	const value = useMemo(
		() => ({
			resizeCard,
			cardSizes,
			updateLayoutPositions,
		}),
		[resizeCard, cardSizes, updateLayoutPositions]
	);

	return (
		<CardResizeContext.Provider value={value}>
			{children}
		</CardResizeContext.Provider>
	);
};

export const useCardResize = () => {
	const context = useContext(CardResizeContext);
	return context;
};
