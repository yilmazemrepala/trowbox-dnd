import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";

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
	const initialSizes: Record<string, { w: number; h: number }> = {};
	initialLayouts.lg.forEach((item: any) => {
		initialSizes[item.i] = { w: item.w, h: item.h };
	});

	const [cardSizes, setCardSizes] = useState(initialSizes);
	const [currentLayouts, setCurrentLayouts] = useState(initialLayouts);

	// Yeni eklenen fonksiyon - layout pozisyonlarını günceller
	const updateLayoutPositions = (layouts: any) => {
		setCurrentLayouts(layouts);
	};

	const resizeCard = (id: string, newSize: { w: number; h: number }) => {
		setCardSizes((prev) => ({
			...prev,
			[id]: newSize,
		}));
	};

	return (
		<CardResizeContext.Provider
			value={{
				resizeCard,
				cardSizes,
				updateLayoutPositions,
			}}>
			{children}
		</CardResizeContext.Provider>
	);
};

export const useCardResize = () => {
	const context = useContext(CardResizeContext);
	if (context === undefined) {
		throw new Error("useCardResize must be used within a CardResizeProvider");
	}
	return context;
};
