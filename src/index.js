import TodoForm from "./components/TodoForm";
// import ProjectCard from "./components/ProjectCard";

import {
	// CloseTodoForm,
	// ViewTodoForm,
	// AddTodo,
	// DeleteTodo,
	// MarkAsCompleted,
	// EditTodo,
	// TodoObjectArray,
	EditTitle,
	DeleteProject,
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

// document
// 	.querySelector(".project-container")
// 	.insertAdjacentElement("beforeend", ProjectCard("title"));

// if (location.reload()) {
// 	localStorage.setItem("todoList", TodoObjectArray);
// }

EditTitle();
DeleteProject();

// CloseTodoForm();
// ViewTodoForm(".item-placeholder");
// AddTodo();
// DeleteTodo();
// MarkAsCompleted();
// EditTodo();
