import { useState, useEffect, useMemo, useCallback } from "react";
import { Layout } from "react-grid-layout";
import { useCardResize } from "./useCardResize";

export const useLayoutManager = (initialLayouts: any) => {
	const [layouts, setLayouts] = useState(initialLayouts);
	const { cardSizes, updateLayoutPositions } = useCardResize();

	// Kart boyutları değiştiğinde layout'u güncelle
	useEffect(() => {
		if (Object.keys(cardSizes).length > 0) {
			const updatedLayouts = {
				...layouts,
				lg: layouts.lg.map((item) => {
					if (cardSizes[item.i]) {
						return {
							...item,
							w: cardSizes[item.i].w,
							h: cardSizes[item.i].h,
							size: getSizeFromDimensions(
								cardSizes[item.i].w,
								cardSizes[item.i].h
							),
						};
					}
					return item;
				}),
			};
			setLayouts(updatedLayouts);
		}
	}, [cardSizes]);

	// Layout değişikliklerini işle
	const handleLayoutChange = useCallback(
		(currentLayout: Layout[]) => {
			const updatedLayouts = {
				...layouts,
				lg: layouts.lg.map((item) => {
					const updatedItem = currentLayout.find(
						(layoutItem) => layoutItem.i === item.i
					);
					return updatedItem ? { ...item, ...updatedItem } : item;
				}),
			};
			setLayouts(updatedLayouts);
			updateLayoutPositions(updatedLayouts);
		},
		[layouts, updateLayoutPositions]
	);

	// Boyutlardan kart tipini belirle
	const getSizeFromDimensions = useMemo(
		() => (w: number, h: number) => {
			if (w === 1 && h === 1) return "SMALL";
			if (w === 2 && h === 1) return "MEDIUM";
			if (w === 1 && h === 2) return "TALL";
			if (w === 2 && h === 2) return "LARGE";
			return "MEDIUM";
		},
		[]
	);

	return useMemo(
		() => ({
			layouts,
			handleLayoutChange,
			getSizeFromDimensions,
		}),
		[layouts, handleLayoutChange, getSizeFromDimensions]
	);
};
