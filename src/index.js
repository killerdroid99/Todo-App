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
	AddProject,
	DeleteProject,
	EditTitle,
	Redirect,
	BackToProjects,
	// ProjectObjectArray,
} from "./DomActions";

document.querySelector("body").appendChild(TodoForm());

window.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
	}
});

AddProject();
DeleteProject();
EditTitle();
Redirect();
BackToProjects();
