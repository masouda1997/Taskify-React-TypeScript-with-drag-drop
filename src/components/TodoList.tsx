import React from "react";
import { Todo } from "../Model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface IProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos: Todo[];
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
	todos,
	setTodos,
	completedTodos,
	setCompletedTodos,
}: IProps) => {
	return (
		<div className="w-[95%] gap-1 mt-3 flex md:flex-col ">
			<Droppable droppableId="TodoList">
				{(provided) => (
					<section
						ref={provided.innerRef}
						{...provided.droppableProps}
						className="bg-[#32c3cd] rounded-[10px] flex-1 p-6 text-[25px] text-white"
					>
						<span>Active Tasks</span>
						{todos.map((task, index) => (
							<SingleTodo
								index={index}
								key={task.id}
								todo={task}
								todos={todos}
								setTodos={setTodos}
							/>
						))}
					</section>
				)}
			</Droppable>

			<Droppable droppableId="TodosRemove">
				{(provided) => (
					<section
						ref={provided.innerRef}
						{...provided.droppableProps}
						className="bg-orange-600 rounded-[10px] flex-1 p-6 text-[25px] text-white"
					>
						<span>Completed Tasks</span>
						{completedTodos.map((task, index) => (
							<SingleTodo
								index={index}
								key={task.id}
								todo={task}
								todos={completedTodos}
								setTodos={setCompletedTodos}
							/>
						))}
					</section>
				)}
			</Droppable>
		</div>
	);
};

export default TodoList;
