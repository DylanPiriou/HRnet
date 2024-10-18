import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Popover, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { formSchema } from "@/utils/zodSchema";
import { departments, states } from "@/data/formData";

interface ProfileFormProps {
	onSubmit: (data: z.infer<typeof formSchema>) => void;
}

export function ProfileForm({ onSubmit }: ProfileFormProps) {
	// Create the form instance
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			dateOfBirth: new Date(),
			startDate: new Date(),
			street: "",
			city: "",
			state: "",
			zipCode: 0,
			department: "",
		},
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full max-w-[800px] grid grid-cols-2 items-start justify-start gap-4"
			>
				<fieldset className="col-span-2 md:col-span-1">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Elon"
										aria-label="first name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Musk"
										aria-label="last name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="dateOfBirth"
						render={({ field }) => (
							<FormItem className="flex flex-col gap-1 my-2">
								<FormLabel>Date of birth</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												name="date of birth"
												variant={"outline"}
												aria-label="date of birth"
												className={cn(
													!field.value &&
														"text-muted-foreground"
												)}
											>
												{field.value ? (
													format(field.value, "PPP")
												) : (
													<span>Pick a date</span>
												)}
												<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent
										className="w-fit bg-white shadow-2xl p-0"
										align="start"
									>
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												date > new Date() ||
												date < new Date("1900-01-01")
											}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="startDate"
						render={({ field }) => (
							<FormItem className="flex flex-col gap-1 my-2">
								<FormLabel>Start Date</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												name="start date"
												aria-label="start date"
												variant={"outline"}
												className={cn(
													!field.value &&
														"text-muted-foreground"
												)}
											>
												{field.value ? (
													format(field.value, "PPP")
												) : (
													<span>Pick a date</span>
												)}
												<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent
										className="w-fit bg-white shadow-2xl p-0"
										align="start"
									>
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												date > new Date() ||
												date < new Date("1900-01-01")
											}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>
				</fieldset>
				<fieldset className="col-span-2 md:col-span-1">
					<FormField
						control={form.control}
						name="street"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Street</FormLabel>
								<FormControl>
									<Input
										aria-label="street"
										placeholder="1234 Main St"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="city"
						render={({ field }) => (
							<FormItem>
								<FormLabel>City</FormLabel>
								<FormControl>
									<Input
										aria-label="city"
										placeholder="Los Angeles"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="state"
						render={({ field }) => (
							<FormItem>
								<FormLabel>State</FormLabel>
								<FormControl>
									<Select
										aria-label="state"
										value={field.value}
										onValueChange={(value) =>
											field.onChange(value)
										}
									>
										<SelectTrigger aria-label="select a state">
											<SelectValue placeholder="Select a state" />
										</SelectTrigger>
										<SelectContent>
											{states.map((state) => (
												<SelectItem
													key={state.abbreviation}
													value={state.abbreviation}
												>
													{state.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="zipCode"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Zip Code</FormLabel>
								<FormControl>
									<Input
										aria-label="zip code"
										placeholder="90001"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="department"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Department</FormLabel>
								<FormControl>
									<Select
										aria-label="department"
										value={field.value}
										onValueChange={(value) =>
											field.onChange(value)
										}
									>
										<SelectTrigger aria-label="select a department">
											<SelectValue placeholder="Select a department" />
										</SelectTrigger>
										<SelectContent>
											{departments.map((department) => (
												<SelectItem
													key={
														department.abbreviation
													}
													value={department.name}
												>
													{department.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</fieldset>
				<Button
					aria-label="save"
					type="submit"
					name="save"
					className="col-span-2"
				>
					Save
				</Button>
			</form>
		</Form>
	);
}
