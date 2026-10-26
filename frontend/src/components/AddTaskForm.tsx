import { useState, type FormEvent } from "react";

interface AddTaskFormProps {
	onAdd: (title: string) => void;
}

function AddTaskForm({ onAdd }: AddTaskFormProps) {
	const [title, setTitle] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const clean = title.trim();
		if (!clean) return;
		onAdd(clean);
		setTitle("");
	};

	return (
		<form onSubmit={handleSubmit} className="add-form">
			<input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Nueva tarea..."
			/>
			<button type="submit">Agregar</button>
		</form>
	);
}

export default AddTaskForm;