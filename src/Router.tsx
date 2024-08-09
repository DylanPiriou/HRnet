import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Employees from "./Pages/Employees";
import NotFound from "./Pages/NotFound";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/employees" element={<Employees />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
