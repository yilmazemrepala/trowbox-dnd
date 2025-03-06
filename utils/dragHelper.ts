import { useState, useEffect } from "react";

export const useDragHandler = (allCards: any[]) => {
	const [draggedCardType, setDraggedCardType] = useState<string | null>(null);

	const onDragStart = (layout: any, oldItem: any) => {
		const cardItem = allCards.find((card) => card.i === oldItem.i);
		if (cardItem) {
			setDraggedCardType(cardItem.type);
		}
	};

	const onDragStop = () => {
		setDraggedCardType(null);
	};

	useEffect(() => {
		if (!draggedCardType) return;

		const placeholder = document.querySelector(
			".react-grid-item.react-grid-placeholder"
		);
		if (placeholder) {
			placeholder.classList.add(`${draggedCardType}-placeholder`);
		}

		return () => {
			const placeholder = document.querySelector(
				".react-grid-item.react-grid-placeholder"
			);
			if (placeholder) {
				placeholder.classList.remove(
					"spotify-placeholder",
					"instagram-placeholder",
					"youtube-placeholder",
					"linkedin-placeholder"
				);
			}
		};
	}, [draggedCardType]);

	return { onDragStart, onDragStop };
};
