import { Tab } from "@/Components/Tab";
import { Button } from "@/Components/ui/button";
import { AppContext } from "@/context";
import { data } from "@/data/tabData";
import { AppContextType } from "@/utils/type";
import { ChevronLeft } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function Employees() {

	const { state, addEmployee } = useContext(AppContext) as AppContextType;

	// Function to load data in global state
	const [isLoaded, setIsLoaded] = useState(false);
	const LoadData = () => {
		// Add the user data to the global state
		data.forEach((employee) => {
			addEmployee(employee);
		});
		setIsLoaded(true);
	};

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
				{state.employees.length < 10 && !isLoaded && (
					<div className="flex flex-col justify-center items-center gap-y-2">
						Load fake data
						<Button
							aria-label="load fake data"
							onClick={() => LoadData()}
						>
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