import { ProfileForm } from "@/Components/Form";
import { formSchema } from "@/utils/zodSchema";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { format } from "date-fns";
import { generateUniqueId } from "@/utils/generateUniqueId";
import { Lightbox } from "@dylanpiriou/simple-lightbox"
import { AppContext } from "@/context";
import { AppContextType } from "@/utils/type";

export default function Home() {

	const { addEmployee } = useContext(AppContext) as AppContextType;
	const [showLightbox, setShowLightbox] = useState(false);
	
	// Function to handle the form submission
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Format the date values to US format
		const formattedValues = {
			...values,
			dateOfBirth: values.dateOfBirth
				? format(new Date(values.dateOfBirth), "yyyy/dd/MM")
				: undefined,
			startDate: values.startDate
				? format(new Date(values.startDate), "yyyy/dd/MM")
				: undefined,
		};

		// Add a unique ID to the user data
		const userData = { ...formattedValues, id: generateUniqueId() };

		// Add the user data to the global state
		addEmployee(userData);
		setShowLightbox(true);
	}

	return (
		<main className="w-full min-h-[100vh] h-full flex flex-col items-center gap-10 p-4">
			<header className="w-full flex flex-col items-center justify-center py-10">
				<h1 className="text-4xl font-extrabold lg:text-5xl">HRnet</h1>
				<Link to="/employees">View Current Employees</Link>
			</header>
			<section className="w-full flex-1 flex flex-col items-center justify-start gap-4">
				<h2 className="pb-2 text-2xl lg:text-3xl font-semibold">
					Create Employee
				</h2>
				<ProfileForm onSubmit={onSubmit} />
				{showLightbox && (
					<Lightbox>
						<h2 className="pb-2 text-2xl lg:text-3xl font-semibold">
							Employee created !
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quo placeat omnis officia eos temporibus eum
							aspernatur soluta, quaerat, quia sit dolore quod
							nostrum. Perspiciatis voluptas quaerat voluptatem,
							totam accusamus cumque facilis vel nemo veniam est
							sapiente perferendis porro fugit expedita amet
							facere tenetur quia doloribus ad? Deleniti
							voluptatem alias consequuntur!
						</p>
					</Lightbox>
				)}
			</section>
		</main>
	);
}
