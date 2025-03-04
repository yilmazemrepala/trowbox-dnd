"use client";

import React, { ReactNode, memo } from "react";

interface FlatCardWrapperProps {
	children: ReactNode;
}

// FlatCardWrapper bileşeni, Spotify ve Instagram gibi FLAT kartları
// sağ bölümde üst üste yerleştirmek için kullanılır.
const FlatCardWrapper = memo(({ children }: FlatCardWrapperProps) => {
	const childrenArray = React.Children.toArray(children);

	return (
		<div className="grid grid-cols-2 col-span-2 gap-4">
			{/* İlk kart tam genişlikte alacak */}
			{childrenArray.length > 0 && (
				<div className="col-span-2">{childrenArray[0]}</div>
			)}

			{/* Diğer kartlar sağ tarafta alt alta gösterilecek */}
			{childrenArray.length > 1 && (
				<div className="col-span-1">
					{childrenArray.slice(1).map((child, index) => (
						<div key={index} className="mb-4 last:mb-0">
							{child}
						</div>
					))}
				</div>
			)}
		</div>
	);
});

// Setting a display name for better debugging
FlatCardWrapper.displayName = "FlatCardWrapper";

export { FlatCardWrapper };
