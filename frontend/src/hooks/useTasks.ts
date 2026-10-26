import { useState } from "react";
import type { Task } from "../types/task";
import { initialTasks } from "../data/tasks";

export function useTasks() {
	const [tasks, setTasks] = useState<Task[]>(initialTasks);

	const addTask = (title: string) => {
		const newTask: Task = { id: Date.now(), title, done: false };
		setTasks((prev) => [...prev, newTask]);
	};

	const toggleTask = (id: number) => {
		setTasks((prev) =>
		prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
		);
	};

	const deleteTask = (id: number) => {
		setTasks((prev) => prev.filter((t) => t.id !== id));
	};

	return { tasks, addTask, toggleTask, deleteTask };
}