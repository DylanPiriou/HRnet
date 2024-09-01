import { ProfileForm } from "@/Components/Form";
import { formSchema } from "@/utils/zodSchema";
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { format } from "date-fns";
import { generateUniqueId } from "@/utils/generateUniqueId";
import { Lightbox } from "minimalist-react-lightbox";

export default function Home() {

	const [showLightbox, setShowLightbox] = useState(false);
	
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Formater les dates au format américain
		const formattedValues = {
			...values,
			dateOfBirth: values.dateOfBirth
				? format(new Date(values.dateOfBirth), "yyyy/dd/MM")
				: undefined,
			startDate: values.startDate
				? format(new Date(values.startDate), "yyyy/dd/MM")
				: undefined,
		};

		// Ajouter un identifiant unique aux données du formulaire
		const userData = { ...formattedValues, id: generateUniqueId() };

		// Récupérer les données existantes du localStorage
		const existingData = JSON.parse(
			localStorage.getItem("employees") || "[]"
		);

		// Ajouter les nouvelles données au tableau existant
		const updatedData = [...existingData, userData];

		// Enregistrer le tableau mis à jour dans le localStorage
		localStorage.setItem("employees", JSON.stringify(updatedData));
		setShowLightbox(true);
	}

	return (
		<main className="w-full h-[100dvh] flex flex-col items-center justify-center gap-10 p-4">
			<header className="flex flex-col items-center justify-center">
				<h1 className="text-4xl font-extrabold lg:text-5xl">HRnet</h1>
				<Link to="/employees">View Current Employees</Link>
			</header>
			<section className="w-full flex flex-col items-center justify-center gap-4">
				<h2 className="pb-2 text-3xl font-semibold">Create Employee</h2>
				<ProfileForm onSubmit={onSubmit} />
				{showLightbox && (
					<Lightbox>
						<h2 className="pb-2 text-3xl font-semibold">
							Employee created !
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quo placeat omnis officia eos temporibus eum aspernatur
							soluta, quaerat, quia sit dolore quod nostrum.
							Perspiciatis voluptas quaerat voluptatem, totam
							accusamus cumque facilis vel nemo veniam est sapiente
							perferendis porro fugit expedita amet facere tenetur
							quia doloribus ad? Deleniti voluptatem alias
							consequuntur!
						</p>
					</Lightbox>
				)}
			</section>
		</main>
	);
}
