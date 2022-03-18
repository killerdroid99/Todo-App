import TodoItem from "./components/TodoItem";
import { v4 } from "uuid";

const TodoItemObject = (uuid, completedStatus, task, priority, date) => {
	return { uuid, completedStatus, task, priority, date };
};

let TodoObjectArray = [];
if (localStorage.length) {
	TodoObjectArray = JSON.parse(localStorage.getItem("todoList"));
	TodoObjectArray.forEach((todoObject) => {
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
	});
}
// localStorage.setItem("todoList", JSON.stringify(TodoObjectArray));
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
export const AddTodo = () => {
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

			TodoObjectArray.unshift(
				TodoItemObject(
					uuid,
					false,
					Task.value,
					Priority,
					DateF.value.split("-").reverse().join("/")
				)
			);
			localStorage.setItem("todoList", JSON.stringify(TodoObjectArray));

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
export const DeleteTodo = () => {
	const container = document.querySelector(".todo-container");

	container.addEventListener("click", (e) => {
		const target = e.target;
		if (
			target.matches(".del") &&
			target.getAttribute("data-id") ===
				target.parentElement.getAttribute("data-id")
		) {
			target.parentElement.style.animation = "scaleDownEffect 400ms";

			const afterDelete = TodoObjectArray.filter(
				(todoObject) => todoObject.uuid !== target.getAttribute("data-id")
			);

			TodoObjectArray = [...afterDelete];
			console.log(TodoObjectArray);

			setTimeout(() => {
				target.parentElement.remove();
			}, 300);
		}
	});
};

// Mark as complete when user selects the checkbox
export const MarkAsCompleted = () => {
	const container = document.querySelector(".todo-container");

	container.addEventListener("click", (e) => {
		const target = e.target;

		if (target.matches("input[type='checkbox']")) {
			target.parentElement.classList.toggle("completed");
		}
		TodoObjectArray.map((todoObject) => {
			if (todoObject.uuid === target.parentElement.getAttribute("data-id")) {
				target.checked
					? (todoObject.completedStatus = true)
					: (todoObject.completedStatus = false);
			}
		});
		localStorage.setItem("todoList", JSON.stringify(TodoObjectArray));
		console.log(target.checked);
		console.log(TodoObjectArray);
	});
};

// Edit any created Todo item
export const EditTodo = () => {
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

				TodoObjectArray.forEach((todoObject) => {
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
				localStorage.setItem("todoList", JSON.stringify(TodoObjectArray));

				// console.table(TodoObjectArray);
			} else if (form.classList.contains("hideEdit")) {
				form.classList.remove("hideEdit");
				target.parentElement.style.marginBottom = "3rem";
			}
		}
	});
};