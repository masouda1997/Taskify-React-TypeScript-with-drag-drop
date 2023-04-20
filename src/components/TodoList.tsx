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
		<ul className="w-[95%] gap-1 mt-3 flex md:flex-col ">
			{todos.map((task) => (
				<>
					<section className="bg-[#32c3cd] rounded-[10px] flex-1 p-6 text-[25px] text-white">
						<span>Active Tasks</span>
						<SingleTodo
							key={task.id}
							todo={task}
							todos={todos}
							setTodos={setTodos}
						/>
					</section>

					<section className="bg-orange-600 rounded-[10px] flex-1 p-6 text-[25px] text-white">
						<span>Completed Tasks</span>
						<SingleTodo
							key={task.id}
							todo={task}
							todos={todos}
							setTodos={setTodos}
						/>
					</section>
				</>
			))}
		</ul>
	);
};

export default TodoList;
