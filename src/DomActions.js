import TodoItem from "./components/TodoItem";
import ProjectCard from "./components/ProjectCard";
import { v4 } from "uuid";

const TodoItemObject = (uuid, completedStatus, task, priority, date) => {
	return { uuid, completedStatus, task, priority, date };
};

const ProjectObject = (
	pid,
	title,
	linkedTodoList = [],
	total = linkedTodoList.length,
	complete = 0,
	high = 0,
	med = 0,
	low = 0
) => {
	return { pid, title, linkedTodoList, total, complete, high, med, low };
};

// ProjectObject = JSON.parse(localStorage.getItem("TodoProject"));

let ProjectObjectArray = [];

if (localStorage.length) {
	ProjectObjectArray = JSON.parse(localStorage.getItem("TodoProject"));
	// console.table(ProjectObjectArray);

	ProjectObjectArray.forEach((projectObject) => {
		// console.log(projectObject);
		document
			.querySelector(".project-container")
			.appendChild(
				ProjectCard(
					projectObject.pid,
					projectObject.title,
					projectObject.total,
					projectObject.high,
					projectObject.med,
					projectObject.low
				)
			);
	});
}
// Close the Todo form
export const CloseTodoForm = () => {
	const exitBtn = document.getElementById("exit");

	exitBtn.addEventListener("click", () => {
		document.querySelector(".overlay").style.animation =
			"scaleDownEffect 500ms";
		setTimeout(() => {
			document.querySelector(".overlay").style.transform = "scale(0)";
		}, 400);
	});
};

// View the form to add todo item
export const ViewTodoForm = () => {
	const addBtn = document.querySelector(".item-placeholder");

	addBtn.addEventListener("click", () => {
		document.querySelector(".overlay").style.animation = "scaleUpEffect 500ms";
		setTimeout(() => {
			document.querySelector(".overlay").style.transform = "scale(1)";
		}, 400);
	});
};

Date.prototype.toDateInputValue = function () {
	var local = new Date(this);
	local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	return local.toJSON().slice(0, 10);
};

// Add Todo item
export const AddTodo = (targetProject) => {
	const Task = document.getElementById("task");
	let DateF = document.getElementById("date");

	document.getElementById("add").addEventListener("click", (e) => {
		e.preventDefault();

		if (document.getElementById("task").value === "") {
			alert("Task field can't be empty");
		} else {
			let Priority = "Not set";
			document.getElementsByName("priority").forEach((element) => {
				if (element.checked === true) {
					Priority = element.value;
				}
			});

			if (DateF.value === "") {
				DateF.value = new Date().toDateInputValue();
			}

			const uuid = v4();

			targetProject.linkedTodoList.unshift(
				TodoItemObject(
					uuid,
					false,
					Task.value,
					Priority,
					DateF.value.split("-").reverse().join("/")
				)
			);
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));

			// console.log(TodoObjectArray);

			document.querySelector(".overlay").style.animation =
				"scaleDownEffect 500ms";
			setTimeout(() => {
				const Todo = TodoItem(
					uuid,
					false,
					Task.value,
					Priority,
					DateF.value.split("-").reverse().join("/")
				);
				// console.log(Todo);
				Todo.style.animation = "scaleUpEffect 400ms";
				document
					.querySelector(".todo-container")
					.insertAdjacentElement("afterbegin", Todo);
				document.querySelector(".overlay").style.transform = "scale(0)";
				document.getElementById("form").reset();
			}, 400);
		}
	});
};

// Delete any Todo item
export const DeleteTodo = (targetProject) => {
	const container = document.querySelector(".todo-container");

	container.addEventListener("click", (e) => {
		const target = e.target;
		if (
			target.matches(".del") &&
			target.getAttribute("data-id") ===
				target.parentElement.getAttribute("data-id")
		) {
			target.parentElement.style.animation = "scaleDownEffect 400ms";

			const afterDelete = targetProject.linkedTodoList.filter(
				(todoObject) => todoObject.uuid !== target.getAttribute("data-id")
			);

			targetProject.linkedTodoList = [...afterDelete];
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
			// console.log(TodoObjectArray);

			setTimeout(() => {
				target.parentElement.remove();
			}, 300);
		}
	});
};

// Mark as complete when user selects the checkbox
export const MarkAsCompleted = (targetProject) => {
	const container = document.querySelector(".todo-container");

	container.addEventListener("click", (e) => {
		const target = e.target;

		targetProject.linkedTodoList.forEach((todoObject) => {
			if (todoObject.uuid === target.parentElement.getAttribute("data-id")) {
				if (target.matches("input[type='checkbox']")) {
					if (target.checked) {
						todoObject.completedStatus = true;
						target.parentElement.classList.add("completed");
					} else {
						todoObject.completedStatus = false;
						target.parentElement.classList.remove("completed");
					}
				}
			}
		});

		localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
		// console.log(target.checked);
		// console.log(TodoObjectArray);
	});
};

// Edit any created Todo item
export const EditTodo = (targetProject) => {
	const container = document.querySelector(".todo-container");

	container.addEventListener("click", (e) => {
		const target = e.target;
		if (
			target.matches(".edit") &&
			target.getAttribute("data-id") ===
				target.parentElement.getAttribute("data-id")
		) {
			const form = target.parentElement.lastElementChild;

			if (!form.classList.contains("hideEdit")) {
				form.classList.add("hideEdit");
				target.parentElement.style.marginBottom = "";

				target.parentElement.children[1].textContent = form.children[0].value;

				target.parentElement.children[2].innerText = form.children[1].value;
				if (target.parentElement.children[2].innerText === "Low") {
					target.parentElement.children[2].style.color = "green";
				} else if (target.parentElement.children[2].innerText === "Medium") {
					target.parentElement.children[2].style.color = "orange";
				} else if (target.parentElement.children[2].innerText === "High") {
					target.parentElement.children[2].style.color = "red";
				}

				target.parentElement.children[3].textContent = form.children[2].value
					.split("-")
					.reverse()
					.join("/");

				targetProject.linkedTodoList.forEach((todoObject) => {
					if (
						todoObject.uuid === target.parentElement.getAttribute("data-id")
					) {
						todoObject.task = form.children[0].value;
						todoObject.priority = form.children[1].value;
						todoObject.date = form.children[2].value
							.split("-")
							.reverse()
							.join("/");
					}
				});
				localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));

				// console.table(TodoObjectArray);
			} else if (form.classList.contains("hideEdit")) {
				form.classList.remove("hideEdit");
				target.parentElement.style.marginBottom = "3rem";
			}
		}
	});
};

// Adding project card
export const AddProject = () => {
	const container = document.querySelector(".project-container");

	container.addEventListener("click", (e) => {
		const target = e.target;

		if (target.matches("span")) {
			const newProject = ProjectCard(v4(), "Title");

			newProject.style.animation = "scaleUpEffect 300ms";
			target.parentElement.parentElement.insertAdjacentElement(
				"beforeend",
				newProject
			);
			ProjectObjectArray.push(
				ProjectObject(
					newProject.getAttribute("PID"),
					newProject.firstElementChild.value
				)
			);
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
		} else if (target.className === "card-placeholder") {
			const newProject = ProjectCard(v4(), "Title");

			newProject.style.animation = "scaleUpEffect 300ms";
			target.parentElement.insertAdjacentElement("beforeend", newProject);
			ProjectObjectArray.push(
				ProjectObject(
					newProject.getAttribute("PID"),
					newProject.firstElementChild.value
				)
			);
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
		}
		// console.table(ProjectObjectArray);
	});
};

// Deleting a particular project
export const DeleteProject = () => {
	const container = document.querySelector(".project-container");

	container.addEventListener("click", (e) => {
		const target = e.target;

		if (
			target.getAttribute("class") === "delImg" &&
			target.getAttribute("PID") === target.parentElement.getAttribute("PID")
		) {
			const afterDelete = [];
			ProjectObjectArray.forEach((proj) => {
				if (proj.pid !== target.getAttribute("PID")) {
					afterDelete.push(proj);
				}
			});
			ProjectObjectArray = afterDelete;
			localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
			target.parentElement.style.animation = "scaleDownEffect 300ms";
			setTimeout(() => {
				target.parentElement.remove();
			}, 250);
		}
		// console.table(ProjectObjectArray);
	});
};

// Edit the title
export const EditTitle = () => {
	const container = document.querySelector(".project-container");

	container.addEventListener("keydown", (e) => {
		const target = e.target;
		if (
			target.getAttribute("class") === "titleInput" &&
			target.getAttribute("PID") === target.parentElement.getAttribute("PID") &&
			e.code == "Enter"
		) {
			ProjectObjectArray.forEach((proj) => {
				if (proj.pid === target.getAttribute("PID")) {
					proj.title = target.value;
					target.blur();
				}
			});
		}
		localStorage.setItem("TodoProject", JSON.stringify(ProjectObjectArray));
		// console.table(ProjectObjectArray);
	});
};

// Redirect to todo list
export const Redirect = () => {
	const main = document.querySelector(".projects");
	const projectContainer = document.querySelector(".project-container");
	const backButton = document.createElement("img");
	backButton.className = "backBtn";
	backButton.src = "./assets/btn.svg";
	backButton.alt = "back";
	const itemPlaceholder = document.createElement("div");
	itemPlaceholder.className = "item-placeholder";
	itemPlaceholder.innerText = "Add Todo	";
	const rArrow = document.createElement("div");
	rArrow.innerText = "➜";
	itemPlaceholder.append(rArrow);
	const todoContainer = document.createElement("div");
	todoContainer.className = "todo-container";

	projectContainer.addEventListener("click", (e) => {
		const target = e.target;
		let targetProject;
		ProjectObjectArray.forEach((projectObject) => {
			if (target.getAttribute("PID") === projectObject.pid) {
				targetProject = projectObject;
			}
		});
		if (
			target.getAttribute("class") === "btn" &&
			target.getAttribute("PID") === target.parentElement.getAttribute("PID")
		) {
			main.firstElementChild.innerText =
				target.parentElement.firstElementChild.value;
			projectContainer.style.display = "none";
			main.append(backButton, itemPlaceholder, todoContainer);
			ViewTodoForm();
			CloseTodoForm();
			AddTodo(targetProject);
			DeleteTodo(targetProject);
			MarkAsCompleted(targetProject);
			EditTodo(targetProject);
			if (targetProject.linkedTodoList.length) {
				targetProject.linkedTodoList.map((todoObject) => {
					document
						.querySelector(".todo-container")
						.appendChild(
							TodoItem(
								todoObject.uuid,
								todoObject.completedStatus,
								todoObject.task,
								todoObject.priority,
								todoObject.date
							)
						);

					if (todoObject.completedStatus) {
						TodoItem().classList.add("completed");
						// console.log("yes");
					} else {
						TodoItem().classList.remove("completed");
						// console.log("no");
					}
				});
			}
		}
	});
};

export const BackToProjects = () => {
	const main = document.querySelector(".projects");

	main.addEventListener("click", (e) => {
		const target = e.target;
		if (target.matches("img") && target.getAttribute("class") === "backBtn") {
			location.reload();
		}
	});
};
