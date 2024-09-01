import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function SelectForm({ handleSelectChange}) {
  return (
		<div className="flex items-center gap-2">
			Show
			<Select onValueChange={handleSelectChange}>
				<SelectTrigger>
					<SelectValue placeholder="10" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="10">10</SelectItem>
						<SelectItem value="25">25</SelectItem>
						<SelectItem value="50">50</SelectItem>
						<SelectItem value="100">100</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			entries
		</div>
  );
}
