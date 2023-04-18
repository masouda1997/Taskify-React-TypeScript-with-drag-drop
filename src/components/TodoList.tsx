import React from "react";
import { Todo } from "../Model";
import SingleTodo from "./SingleTodo";

interface IProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: IProps) => {
	console.log(todos);
	return (
		<ul className="flex justify-evenly w-[90%] flex-wrap ">
			{todos.map((task) => (
				<SingleTodo
					key={task.id}
					todo={task}
					todos={todos}
					setTodos={setTodos}
				/>
			))}
		</ul>
	);
};

export default TodoList;
