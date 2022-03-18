import TodoForm from "./components/TodoForm";
import {
	CloseTodoForm,
	ViewTodoForm,
	AddTodo,
	DeleteTodo,
	MarkAsCompleted,
	EditTodo,
	TodoObjectArray,
} from "./DomActions";

// document
// 	.querySelector(".todo-container")
// 	.insertAdjacentElement(
// 		"afterbegin",
// 		TodoItem(true, "xxxxx", "Medium", "11/05/2002")
// 	);

document.querySelector("body").appendChild(TodoForm());

window.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
	}
});

// if (location.reload()) {
// 	localStorage.setItem("todoList", TodoObjectArray);
// }

CloseTodoForm();
ViewTodoForm(".item-placeholder");
AddTodo();
DeleteTodo();
MarkAsCompleted();
EditTodo();