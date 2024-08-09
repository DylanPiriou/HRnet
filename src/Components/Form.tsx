import React from "react";
import { Button } from "./ui/button";

export default function Form() {
	return (
		<form
			action="#"
			id="create-employee"
			className="flex flex-col w-full max-w-[550px] p-4 bg-red-200"
		>
			<label htmlFor="first-name">First Name</label>
			<input type="text" id="first-name" />

			<label htmlFor="last-name">Last Name</label>
			<input type="text" id="last-name" />

			<label htmlFor="date-of-birth">Date of Birth</label>
			<input id="date-of-birth" type="text" />

			<label htmlFor="start-date">Start Date</label>
			<input id="start-date" type="text" />

			<fieldset className="flex flex-col border p-4">
				<legend className="p-2">Address</legend>

				<label htmlFor="street">Street</label>
				<input id="street" type="text" />

				<label htmlFor="city">City</label>
				<input id="city" type="text" />

				<label htmlFor="state">State</label>
				<select name="state" id="state">
					<option>France</option>
					<option>USA</option>
					<option>Allemagne</option>
					<option>UK</option>
					<option>Italie</option>
					<option>Japon</option>
				</select>

				<label htmlFor="zip-code">Zip Code</label>
				<input id="zip-code" type="number" />
			</fieldset>
			<label htmlFor="department">Department</label>
			<select name="department" id="department">
				<option>Sales</option>
				<option>Marketing</option>
				<option>Engineering</option>
				<option>Human Resources</option>
				<option>Legal</option>
			</select>
			<Button type="submit">Create Employee</Button>
		</form>
	);
}
