import { createContext, useState } from "react";
import { AppContextType, Children, Employee, GlobalState } from "./utils/type";

// Context creation
export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children } : Children ) => {
	// Global state
	const [state, setState] = useState<GlobalState>({
        employees:  []
	});

	// Function to add an employee to the global state
    const addEmployee = (employee: Employee) => {
		setState((prevState) => ({
			...prevState,
			employees: [...prevState.employees, employee],
		}));
	};

	return (
		<AppContext.Provider value={{ state, setState, addEmployee }}>
			{children}
		</AppContext.Provider>
	);
};
