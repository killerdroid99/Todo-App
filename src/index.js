import TodoForm from "./components/TodoForm";
import {
	CloseTodoForm,
	ViewTodoForm,
	AddTodo,
	DeleteTodo,
	MarkAsCompleted,
} from "./DomActions";

// document
// 	.querySelector(".todo-container")
// 	.insertAdjacentElement(
// 		"afterbegin",
// 		TodoItem(true, "xxxxx", "Medium", "11/05/2002")
// 	);

document.querySelector("body").appendChild(TodoForm());

CloseTodoForm();
ViewTodoForm();
AddTodo();
DeleteTodo();
MarkAsCompleted();
