import TodoItem from "./components/TodoItem";

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

export const ViewTodoForm = () => {
	const addBtn = document.querySelector(".item-placeholder");

	addBtn.addEventListener("click", () => {
		document.querySelector(".overlay").style.animation = "scaleUpEffect 500ms";
		setTimeout(() => {
			document.querySelector(".overlay").style.transform = "scale(1)";
		}, 400);
	});
};

export const AddTodo = () => {
	const Task = document.getElementById("task");
	let DateF = document.getElementById("date");
	Date.prototype.toDateInputValue = function () {
		var local = new Date(this);
		local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
		return local.toJSON().slice(0, 10);
	};

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

			document.querySelector(".overlay").style.animation =
				"scaleDownEffect 500ms";
			setTimeout(() => {
				const Todo = TodoItem(
					false,
					Task.value,
					Priority,
					DateF.value.split("-").reverse().join("/")
				);
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

export const DeleteTodo = () => {
	const container = document.querySelector(".todo-container");
	const item = document.querySelector(".item");

	container.addEventListener("click", (e) => {
		const target = e.target;
		if (target === document.querySelector(".del")) {
			target.parentElement.style.animation = "scaleDownEffect 400ms";
			setTimeout(() => {
				container.removeChild(target.parentElement);
			}, 400);
		}
	});
};
