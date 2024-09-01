import { Tab } from "@/Components/Tab";
import { Button } from "@/Components/ui/button";
import { data } from "@/data/tabData";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Employees() {

	const LoadData = () => {
		// Récupérer les données existantes du localStorage
		const existingData = JSON.parse(
			localStorage.getItem("employees") || "[]"
		);

		// Fusionner les nouvelles données avec les données existantes
		const updatedData = [...existingData, ...data];

		// Mettre à jour le localStorage avec les données fusionnées
		localStorage.setItem("employees", JSON.stringify(updatedData));

		// Recharger la page
		window.location.reload();
	};

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
		<main className="w-full flex flex-col items-center justify-center gap-10 p-4">
			<header className="w-full flex flex-col items-center justify-center gap-8">
				<div className="w-full flex items-center">
					<ChevronLeft className="w-5 h-3" />
					<Link to="/">Home</Link>
				</div>
				<h1 className="text-4xl font-extrabold lg:text-5xl">
					Current Employees
				</h1>
				{!isLoaded && (
					<div className="flex flex-col gap-y-2">
						Load fake data (+ save in LS)<Button onClick={() => LoadData()}>Load fake data</Button>
					</div>
				)}
			</header>
			<section className="w-full flex flex-col items-center justify-center gap-4">
				<Tab />
			</section>
		</main>
	);
}
