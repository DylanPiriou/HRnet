import { Tab } from "@/Components/Tab";
import { Button } from "@/Components/ui/button";
import { data } from "@/data/tabData";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Employees() {

	// Function to load data in localStorage
	const LoadData = () => {
		// Verify if data is already in localStorage
		const existingData = JSON.parse(
			localStorage.getItem("employees") || "[]"
		);

        // Merge the existing data with the new data
		const updatedData = [...existingData, ...data];

		// Update the localStorage
		localStorage.setItem("employees", JSON.stringify(updatedData));

		// Reload the page
		window.location.reload();
	};

	// Check if the data is already loaded
	const [isLoaded, setIsLoaded] = useState(true);
	useEffect(() => {
		const existingData = localStorage.getItem("employees");
		if (existingData && JSON.parse(existingData).length > 10) {
			setIsLoaded(true);
		} else {
			setIsLoaded(false);
		}
	}, [])

	return (
		<main className="w-full min-h-[100vh] h-full flex flex-col items-center gap-10 p-4">
			<header className="w-full flex flex-col items-center justify-center gap-6 py-10">
				<div className="w-full flex items-center">
					<ChevronLeft className="w-5 h-3" />
					<Link to="/">Home</Link>
				</div>
				<h1 className="text-4xl font-extrabold lg:text-5xl text-center">
					Current Employees
				</h1>
				{!isLoaded && (
					<div className="flex flex-col gap-y-2">
						Load fake data (+ save in LS)
						<Button onClick={() => LoadData()}>
							Load fake data
						</Button>
					</div>
				)}
			</header>
			<section className="w-full flex-1 flex flex-col items-center justify-start gap-4">
				<Tab />
			</section>
		</main>
	);
}