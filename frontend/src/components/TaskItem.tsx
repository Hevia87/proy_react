import type { Task } from "../types/task";

interface TaskItemProps {
	task: Task;
	onToggle: (id: number) => void;
	onDelete: (id: number) => void;
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
	return (
		<li className={task.done ? "task done" : "task"}>
		<input
			type="checkbox"
			checked={task.done}
			onChange={() => onToggle(task.id)}
		/>
		<span>{task.title}</span>
		<button onClick={() => onDelete(task.id)}>Eliminar</button>
		</li>
	);
}

export default TaskItem;