"use server";
import GridLayout from "@/components/cards";
import ProfileSection from "@/components/ProfileSection";
import BottomNavigationBar from "@/components/BottomNavigationBar";

async function HomePage() {
	return (
		<div className="overflow-hidden pb-24">
			<div className="flex flex-col md:flex-row bg-white p-4 max-w-[1800px] mx-auto">
				<div className="md:w-5/12 mb-4 mx-8 md:mb-0 min-w-[450px] relative">
					<ProfileSection />
				</div>

				<div className="ml-8 w-full md:w-7/12">
					<GridLayout />
				</div>
			</div>

			<BottomNavigationBar />
		</div>
	);
}

export default HomePage;
