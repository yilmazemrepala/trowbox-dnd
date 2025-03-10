import { useState, useEffect, useMemo, useCallback } from "react";
import { Layout } from "react-grid-layout";
import { useCardResize } from "./useCardResize";

export const useLayoutManager = (initialLayouts: any) => {
	const [layouts, setLayouts] = useState(initialLayouts);
	const { cardSizes, updateLayoutPositions } = useCardResize();

	// Kart boyutları değiştiğinde layout'u güncelle
	useEffect(() => {
		if (Object.keys(cardSizes).length > 0) {
			const updatedLayouts = Object.keys(layouts).reduce(
				(acc, breakpoint) => {
					// Layout array'i varsa işlem yap
					if (Array.isArray(layouts[breakpoint])) {
						acc[breakpoint] = layouts[breakpoint].map((item) => {
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
						});
					} else {
						// Layout array'i yoksa orijinal değeri koru
						acc[breakpoint] = layouts[breakpoint];
					}
					return acc;
				},
				{ ...layouts }
			);

			setLayouts(updatedLayouts);
		}
	}, [cardSizes]);

	// Layout değişikliklerini işle
	const handleLayoutChange = useCallback(
		(currentLayout: Layout[], allLayouts: any) => {
			// allLayouts null veya undefined ise erken çık
			if (!allLayouts) return;

			const updatedLayouts = Object.keys(allLayouts).reduce(
				(acc, breakpoint) => {
					// Layout array'i varsa işlem yap
					if (
						Array.isArray(layouts[breakpoint]) &&
						Array.isArray(allLayouts[breakpoint])
					) {
						acc[breakpoint] = layouts[breakpoint].map((item) => {
							const updatedItem = allLayouts[breakpoint].find(
								(layoutItem) => layoutItem.i === item.i
							);
							return updatedItem ? { ...item, ...updatedItem } : item;
						});
					} else {
						// Layout array'i yoksa orijinal değeri koru
						acc[breakpoint] = layouts[breakpoint];
					}
					return acc;
				},
				{ ...layouts }
			);

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
