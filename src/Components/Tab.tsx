import * as React from "react";
import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import { columns } from "../data/tabData";
import SelectForm from "./SelectForm";
import { AppContext } from "@/context";
import { AppContextType, Employee } from "@/utils/type";


export function Tab() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [totalEntries, setTotalEntries] = React.useState(10);
	const [pageIndex, setPageIndex] = React.useState(0);
	const { state } = React.useContext(AppContext) as AppContextType;

	// Load the data from global state
	const [data, setData] = React.useState<Employee[]>([]);
	React.useEffect(() => {
		setData(state.employees);
	}, [state]);

	// Function to handle the select change
	const handleSelectChange = (value: string) => {
		setTotalEntries(parseInt(value, 10));
		setPageIndex(0);
	};

	// Create the table instance
	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
			globalFilter,
			pagination: {
				pageSize: totalEntries,
				pageIndex,
			},
		},
	});

	// Function to handle the next page
	const handleNext = () => {
		setPageIndex((prev) => Math.min(prev + 1, table.getPageCount() - 1));
	};

	// Function to handle the previous page
	const handlePrevious = () => {
		setPageIndex((prev) => Math.max(prev - 1, 0));
	};

	return (
		<div className="w-full max-w-[1350px]">
			<div className="w-full flex items-center justify-between flex-wrap gap-y-2 py-4">
				<SelectForm handleSelectChange={handleSelectChange} />
				<Input
					placeholder="Search..."
					value={globalFilter}
					onChange={(event) => setGlobalFilter(event.target.value)}
					className="max-w-sm"
				/>
			</div>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef
															.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={
										row.getIsSelected() && "selected"
									}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-between space-x-2 py-4">
				<div className="flex-1 text-sm text-muted-foreground">
					Showing {table.getRowModel().rows.length.toLocaleString()}{" "}
					of {table.getRowCount().toLocaleString()} entries
				</div>

				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => handlePrevious()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => handleNext()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}
