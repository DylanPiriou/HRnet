import { z } from "zod";

// Defines the form rules using Zod
export const formSchema = z.object({
	firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lastName: z.string().min(2, {
		message: "Last name must be at least 2 characters.",
	}),
	dateOfBirth: z.date({
		message: "Date of birth must be a valid date.",
	}),
	startDate: z.date({
		message: "Start date must be a valid date.",
	}),
	street: z.string().min(2, {
		message: "Street must be at least 2 characters.",
	}),
	city: z.string().min(2, {
		message: "City must be at least 2 characters.",
	}),
	state: z.string().min(1, {
		message: "A state must be selected.",
	}),
	zipCode: z.coerce
		.number({
			message: "Zip code must be a number.",
		})
		.int({
			message: "Zip code must be an integer.",
		})
		.min(1, {
			message: "Zip code must be at least 1 digit.",
		}),
	department: z.string().min(1, {
		message: "A department must be selected.",
	}),
});
