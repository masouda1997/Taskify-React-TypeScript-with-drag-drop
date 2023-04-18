import React from "react";
import { Todo } from "../Model";
import { MdDeleteForever, MdEditSquare, MdCheckBox } from "react-icons/md";

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
	return (
		<form className="flex md:w-full xl:w-[40%] 2xl:w-[30%] lg:w-[30%] p-4 mt-3 rounded-[10px] bg-[url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')] ">
			<span className="flex-grow">{todo.todo}</span>
			<div className="flex items-center flex-grow-0">
				<span>
					<MdDeleteForever />
				</span>
				<span>
					<MdEditSquare />
				</span>
				<span>
					<MdCheckBox />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
