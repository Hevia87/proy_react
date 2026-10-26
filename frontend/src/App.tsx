import { useEffect, useState } from "react";
import type { TaskFilter } from "./types/task";
import { useTasks } from "./hooks/useTasks";
import AddTaskForm from "./components/AddTaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import ChatPanel from "./components/ChatPanel";
import "./App.css";

function App() {
	const { tasks, addTask, toggleTask, deleteTask } = useTasks();
	const [filter, setFilter] = useState<TaskFilter>("all");

	const pending = tasks.filter((t) => !t.done).length;

	const visibleTasks = tasks.filter((t) => {
		if (filter === "pending") return !t.done;
		if (filter === "done") return t.done;
		return true;
	});

	useEffect(() => {
		document.title = `Pendientes: ${pending}`;
	}, [pending]);

	return (
		<main className="app">
		<h1>Gestor de tareas</h1>
		<p>
			{pending} pendiente(s) de {tasks.length}
		</p>
		<AddTaskForm onAdd={addTask} />
		<FilterBar current={filter} onChange={setFilter} />
		<TaskList
			tasks={visibleTasks}
			onToggle={toggleTask}
			onDelete={deleteTask}
		/>
      	<ChatPanel />
		</main>
	);
}

export default App;