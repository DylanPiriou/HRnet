import { Dispatch, SetStateAction } from "react";

export interface Employee {
	id: string;
	firstName: string;
	lastName: string;
	startDate: string | undefined;
	department: string;
	dateOfBirth: string | undefined;
	street: string;
	city: string;
	state: string;
	zipCode: number;
};

export interface AppContextType {
	state: GlobalState;
	setState: Dispatch<SetStateAction<GlobalState>>;
	addEmployee: (employee: Employee) => void;
}

export interface Children {
	children: React.ReactNode;
}

export interface GlobalState {
	employees: Employee[];
}