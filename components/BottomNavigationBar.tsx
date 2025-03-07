import React from "react";
import { Button } from "@/components/ui/button";

function BottomNavigationBar() {
	return (
		<div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center items-center">
			<div className="bg-white border border-gray-200 rounded-xl w-fit h-16 flex px-4 items-center">
				<div className="flex flex-row col">
					<Button
						variant="outline"
						className="bg-gradient-to-r from-green-400 to-green-300 hover:from-green-500 hover:to-green-400 text-white hover:text-white font-bold border-none transition-all duration-75">
						Kaydet
					</Button>
				</div>
			</div>
		</div>
	);
}

export default BottomNavigationBar;
