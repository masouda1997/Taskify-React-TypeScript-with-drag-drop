import "./App.css";
import React from "react";
import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./Model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(todo);
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo("");
		}
	};

	console.log(todos);

	return (
		<div className="w-full h-[100vh] flex flex-col items-center bg-[#2f74c0] font-Neu">
			<header className="uppercase text-white text-[40px] my-[30px] z-10 ">
				Taskify
			</header>
			<InputField todo={todo} setTodo={setTodo} addHandler={handleAdd} />
			<div className="flex justify-between md:flex-col w-[95%] gap-1 mt-3">
				<section className="bg-[#32c3cd] rounded-[10px] flex-1 p-6 text-[25px] text-white">
					<span>Active Tasks</span>
					<TodoList todos={todos} setTodos={setTodos} />
				</section>

				<section className="bg-orange-600 rounded-[10px] flex-1 p-6 text-[25px] text-white">
					<span>Completed Tasks</span>
					<TodoList todos={todos} setTodos={setTodos} />
				</section>
			</div>
		</div>
	);
};

export default App;
