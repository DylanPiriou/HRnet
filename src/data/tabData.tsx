import { Button } from "@/Components/ui/button";
import { Employee } from "@/utils/type";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Employee>[] = [
	{
		accessorKey: "firstName",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					First Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="px-4">{row.getValue("firstName")}</div>
		),
	},
	{
		accessorKey: "lastName",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Last Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="px-4">{row.getValue("lastName")}</div>
		),
	},
	{
		accessorKey: "startDate",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Start Date
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="px-4">{row.getValue("startDate")}</div>
		),
	},
	{
		accessorKey: "department",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Department
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="px-4">{row.getValue("department")}</div>
		),
	},
	{
		accessorKey: "dateOfBirth",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Date of birth
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="px-4">{row.getValue("dateOfBirth")}</div>
		),
	},
	{
		accessorKey: "street",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Street
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="px-4">{row.getValue("street")}</div>
		),
	},
	{
		accessorKey: "city",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					City
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="px-4">{row.getValue("city")}</div>
		),
	},
	{
		accessorKey: "state",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					State
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="px-4">{row.getValue("state")}</div>
		),
	},
	{
		accessorKey: "zipCode",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Zip code
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="px-4">{row.getValue("zipCode")}</div>
		),
	},
];

export const data: Employee[] = [
	{
		id: "1",
		firstName: "John",
		lastName: "Doe",
		startDate: "2022-02-15",
		department: "Marketing",
		dateOfBirth: "1985-03-22",
		street: "456 Oak Ave",
		city: "Springfield",
		state: "IL",
		zipCode: 62701,
	},
	{
		id: "2",
		firstName: "Jane",
		lastName: "Smith",
		startDate: "2020-06-10",
		department: "Finance",
		dateOfBirth: "1992-07-18",
		street: "789 Pine St",
		city: "Metropolis",
		state: "NY",
		zipCode: 10001,
	},
	{
		id: "3",
		firstName: "Alice",
		lastName: "Johnson",
		startDate: "2019-08-20",
		department: "Human Resources",
		dateOfBirth: "1980-11-30",
		street: "101 Maple St",
		city: "Gotham",
		state: "NJ",
		zipCode: 7001,
	},
	{
		id: "4",
		firstName: "Michael",
		lastName: "Williams",
		startDate: "2021-09-01",
		department: "Engineering",
		dateOfBirth: "1991-05-12",
		street: "202 Elm St",
		city: "Star City",
		state: "CA",
		zipCode: 90001,
	},
	{
		id: "5",
		firstName: "Emily",
		lastName: "Davis",
		startDate: "2023-01-05",
		department: "Sales",
		dateOfBirth: "1988-02-25",
		street: "303 Birch St",
		city: "Central City",
		state: "TX",
		zipCode: 73301,
	},
	{
		id: "6",
		firstName: "Robert",
		lastName: "Brown",
		startDate: "2018-12-15",
		department: "Support",
		dateOfBirth: "1983-09-14",
		street: "404 Cedar St",
		city: "Blüdhaven",
		state: "FL",
		zipCode: 33101,
	},
	{
		id: "7",
		firstName: "Linda",
		lastName: "Taylor",
		startDate: "2021-11-07",
		department: "Legal",
		dateOfBirth: "1990-04-09",
		street: "505 Spruce St",
		city: "Coast City",
		state: "NV",
		zipCode: 88901,
	},
	{
		id: "8",
		firstName: "David",
		lastName: "Lee",
		startDate: "2017-04-25",
		department: "IT",
		dateOfBirth: "1979-08-22",
		street: "606 Willow St",
		city: "Keystone City",
		state: "PA",
		zipCode: 15101,
	},
	{
		id: "9",
		firstName: "Karen",
		lastName: "Anderson",
		startDate: "2022-05-11",
		department: "Product",
		dateOfBirth: "1986-06-30",
		street: "707 Ash St",
		city: "National City",
		state: "WA",
		zipCode: 98001,
	},
	{
		id: "10",
		firstName: "Chris",
		lastName: "Martinez",
		startDate: "2019-03-03",
		department: "Engineering",
		dateOfBirth: "1984-12-15",
		street: "808 Redwood St",
		city: "Smallville",
		state: "KS",
		zipCode: 66502,
	},
	{
		id: "11",
		firstName: "Susan",
		lastName: "Clark",
		startDate: "2020-09-17",
		department: "Operations",
		dateOfBirth: "1993-01-27",
		street: "909 Fir St",
		city: "Gateway City",
		state: "CO",
		zipCode: 80201,
	},
	{
		id: "12",
		firstName: "Daniel",
		lastName: "Lopez",
		startDate: "2016-11-23",
		department: "Design",
		dateOfBirth: "1982-07-10",
		street: "1010 Dogwood St",
		city: "Fawcett City",
		state: "OH",
		zipCode: 43001,
	},
	{
		id: "13",
		firstName: "Patricia",
		lastName: "Hall",
		startDate: "2021-07-19",
		department: "Research",
		dateOfBirth: "1987-11-03",
		street: "1111 Alder St",
		city: "Midway City",
		state: "OR",
		zipCode: 97001,
	},
	{
		id: "14",
		firstName: "Charles",
		lastName: "Walker",
		startDate: "2018-06-22",
		department: "Maintenance",
		dateOfBirth: "1994-10-05",
		street: "1212 Sycamore St",
		city: "Hub City",
		state: "AZ",
		zipCode: 85001,
	},
	{
		id: "15",
		firstName: "Barbara",
		lastName: "Young",
		startDate: "2019-10-31",
		department: "Training",
		dateOfBirth: "1985-05-19",
		street: "1313 Magnolia St",
		city: "Ivy Town",
		state: "VA",
		zipCode: 22301,
	},
	{
		id: "16",
		firstName: "Steven",
		lastName: "King",
		startDate: "2022-01-18",
		department: "Engineering",
		dateOfBirth: "1990-02-14",
		street: "1414 Poplar St",
		city: "River City",
		state: "IN",
		zipCode: 46201,
	},
	{
		id: "17",
		firstName: "Betty",
		lastName: "Scott",
		startDate: "2023-04-12",
		department: "Compliance",
		dateOfBirth: "1989-08-25",
		street: "1515 Hickory St",
		city: "Opal City",
		state: "TN",
		zipCode: 37201,
	},
	{
		id: "18",
		firstName: "Matthew",
		lastName: "Adams",
		startDate: "2020-05-27",
		department: "Legal",
		dateOfBirth: "1983-06-17",
		street: "1616 Palm St",
		city: "St. Roch",
		state: "GA",
		zipCode: 30301,
	},
	{
		id: "19",
		firstName: "Sandra",
		lastName: "Baker",
		startDate: "2017-02-02",
		department: "Admin",
		dateOfBirth: "1978-03-28",
		street: "1717 Cherry St",
		city: "New Carthage",
		state: "MO",
		zipCode: 64101,
	},
	{
		id: "20",
		firstName: "James",
		lastName: "Gonzalez",
		startDate: "2021-08-14",
		department: "Research",
		dateOfBirth: "1991-11-11",
		street: "1818 Beech St",
		city: "Ivytown",
		state: "MD",
		zipCode: 21201,
	},
	{
		id: "21",
		firstName: "Laura",
		lastName: "Perez",
		startDate: "2019-12-08",
		department: "Sales",
		dateOfBirth: "1984-09-02",
		street: "1919 Cedarwood St",
		city: "New Venice",
		state: "LA",
		zipCode: 70112,
	},
	{
		id: "22",
		firstName: "Kevin",
		lastName: "Carter",
		startDate: "2022-06-19",
		department: "Product",
		dateOfBirth: "1993-05-06",
		street: "2020 Ironwood St",
		city: "Venture City",
		state: "NM",
		zipCode: 87501,
	},
	{
		id: "23",
		firstName: "Michelle",
		lastName: "Mitchell",
		startDate: "2021-03-23",
		department: "HR",
		dateOfBirth: "1986-07-19",
		street: "2121 Chestnut St",
		city: "Smalltown",
		state: "KY",
		zipCode: 40501,
	},
	{
		id: "24",
		firstName: "Joshua",
		lastName: "Roberts",
		startDate: "2020-07-30",
		department: "Marketing",
		dateOfBirth: "1990-12-30",
		street: "2222 Maplewood St",
		city: "Delta City",
		state: "MI",
		zipCode: 48201,
	},
	{
		id: "25",
		firstName: "Rebecca",
		lastName: "Nelson",
		startDate: "2018-03-15",
		department: "Finance",
		dateOfBirth: "1979-04-15",
		street: "2323 Aspen St",
		city: "Emerald City",
		state: "OK",
		zipCode: 73101,
	},
	{
		id: "26",
		firstName: "Paul",
		lastName: "Moore",
		startDate: "2017-09-09",
		department: "IT",
		dateOfBirth: "1988-10-05",
		street: "2424 Redwood St",
		city: "Pleasantville",
		state: "ME",
		zipCode: 4101,
	},
	{
		id: "27",
		firstName: "Nancy",
		lastName: "Garcia",
		startDate: "2019-05-02",
		department: "Support",
		dateOfBirth: "1983-01-22",
		street: "2525 Pinecone St",
		city: "Rosewood",
		state: "MA",
		zipCode: 2101,
	},
	{
		id: "28",
		firstName: "Timothy",
		lastName: "Hernandez",
		startDate: "2016-07-15",
		department: "Engineering",
		dateOfBirth: "1982-03-14",
		street: "2626 Cypress St",
		city: "Bayside",
		state: "VT",
		zipCode: 5401,
	},
	{
		id: "29",
		firstName: "Jessica",
		lastName: "Rodriguez",
		startDate: "2023-02-09",
		department: "Operations",
		dateOfBirth: "1995-06-21",
		street: "2727 Willowbrook St",
		city: "Shady Acres",
		state: "NH",
		zipCode: 3101,
	},
	{
		id: "30",
		firstName: "Brian",
		lastName: "Martinez",
		startDate: "2022-04-01",
		department: "Sales",
		dateOfBirth: "1990-12-09",
		street: "2828 Mulberry St",
		city: "Laketown",
		state: "WV",
		zipCode: 25301,
	},
];