import TodoForm from "./components/TodoForm";
// import ProjectCard from "./components/ProjectCard";

import {
	AddProject,
	DeleteProject,
	EditTitle,
	Redirect,
	BackToProjects,
} from "./DomActions";

document.querySelector("body").appendChild(TodoForm());

window.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
	}
});

// Set a sample project in the local storage
localStorage.setItem(
	"TodoProject",
	JSON.stringify([
		{
			pid: "1",
			title: "Sample Project",
			linkedTodoList: [
				{
					uuid: "1a",
					completedStatus: false,
					task: "this is the task 3",
					priority: "High",
					date: "01/01/2020",
				},
				{
					uuid: "1b",
					completedStatus: false,
					task: "this is the task 2",
					priority: "Medium",
					date: "01/01/2020",
				},
				{
					uuid: "1c",
					completedStatus: true,
					task: "this is the task 1",
					priority: "Low",
					date: "01/01/2020",
				},
			],
			total: 3,
			complete: 1,
			high: 1,
			med: 1,
			low: 1,
		},
	])
);

AddProject();
DeleteProject();
EditTitle();
Redirect();
BackToProjects();
