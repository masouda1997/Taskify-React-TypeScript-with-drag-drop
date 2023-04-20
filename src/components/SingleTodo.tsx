import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Todo } from "../Model";
import { MdDeleteForever, MdEditSquare, MdCheckBox } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

type Props = {
	index: number;
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		inputRef.current?.focus();
	}, [edit]);

	const handleDone = (id: unknown) => {
		setTodos(
			todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
		);
		console.log(todos);
		console.log(id);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((t) => t.id !== id));
	};

	const handleChange = () => {
		if (!edit && !todo.isDone) {
			setEdit(!edit);
		}
	};

	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();

		setTodos(
			todos.map((t) => (t.id === id ? { ...todo, todo: editTodo } : t))
		);
		setEdit(false);
	};
	return (
		<Draggable draggableId={todo.id.toString()} index={index}>
			{(provided) => (
				<form
					className="flex w-full p-4 mt-3 rounded-[10px] bg-[url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')] hover:scale-105 hover:shadow-[0_0_5px_black] duration-300 text-black "
					onSubmit={(e) => handleEdit(e, todo.id)}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{edit ? (
						<input
							ref={inputRef}
							className="flex p-1 border-none text-[20px] focus:outline-none"
							value={editTodo}
							onChange={(e) => setEditTodo(e.target.value)}
						/>
					) : todo.isDone ? (
						<s className="flex-grow">{todo.todo}</s>
					) : (
						<span className="flex-grow">{todo.todo}</span>
					)}

					<div className="flex items-center flex-grow-0 gap-1">
						<span>
							<MdDeleteForever
								onClick={() => handleDelete(todo.id)}
							/>
						</span>
						<span>
							<MdEditSquare onClick={() => handleChange()} />
						</span>
						<span>
							<MdCheckBox onClick={() => handleDone(todo.id)} />
						</span>
					</div>
				</form>
			)}
		</Draggable>
	);
};

export default SingleTodo;
