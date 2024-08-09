import React from "react";
import { Link } from "react-router-dom";
import Form from "../Components/Form";

export default function Home() {
	return (
		<main className="w-full h-[100dvh] flex flex-col items-center justify-center gap-10">
			<header className="flex flex-col items-center justify-center">
				<h1>HRnet</h1>
				<Link to="/employees">View Current Employees</Link>
			</header>
			<section className="w-full flex flex-col items-center justify-center gap-4">
				<h2>Create Employee</h2>
				<Form />
			</section>
		</main>
	);
}
