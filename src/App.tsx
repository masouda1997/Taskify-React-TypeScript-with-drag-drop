import React from "react";
import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./Model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);
	const [CompletedTodos, setCompletedTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(todo);
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo("");
		}
	};

	// drag and drop logic
	const onDragEnd = (result: DropResult) => {
		const { destination, source } = result;

		console.log(result);

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		let add;
		let active = todos;
		let complete = CompletedTodos;
		// Source Logic
		if (source.droppableId === "theID") {
			add = active[source.index];
			active.splice(source.index, 1);
		} else {
			add = complete[source.index];
			complete.splice(source.index, 1);
		}

		// Destination Logic
		if (destination.droppableId === "theID") {
			active.splice(destination.index, 0, add);
		} else {
			complete.splice(destination.index, 0, add);
		}

		setCompletedTodos(complete);
		setTodos(active);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="w-full h-[100vh] flex flex-col items-center bg-[#2f74c0] font-Neu">
				<header className="uppercase text-white text-[40px] my-[30px] z-10 ">
					Taskify
				</header>
				<InputField
					todo={todo}
					setTodo={setTodo}
					addHandler={handleAdd}
				/>
				<TodoList
					todos={todos}
					setTodos={setTodos}
					completedTodos={CompletedTodos}
					setCompletedTodos={setCompletedTodos}
				/>
			</div>
		</DragDropContext>
	);
};

export default App;
