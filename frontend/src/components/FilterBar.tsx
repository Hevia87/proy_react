import type { TaskFilter } from "../types/task";

interface FilterBarProps {
	current: TaskFilter;
	onChange: (filter: TaskFilter) => void;
}

const options: { value: TaskFilter; label: string }[] = [
	{ value: "all", label: "Todas" },
	{ value: "pending", label: "Pendientes" },
	{ value: "done", label: "Completadas" },
];

function FilterBar({ current, onChange }: FilterBarProps) {
	return (
		<div className="filter-bar">
		{options.map((opt) => (
			<button
				key={opt.value}
				className={opt.value === current ? "active" : ""}
				onClick={() => onChange(opt.value)}
			>
				{opt.label}
			</button>
		))}
		</div>
	);
}

export default FilterBar;