// import { v4 } from "uuid";
import EditForm from "./EditForm";

const TodoItem = (uuid, done, text, priority, date) => {
	const item = document.createElement("div");
	const checkBox = document.createElement("input");
	const task = document.createElement("h3");
	const selectPriority = document.createElement("h4");
	const cal = document.createElement("h4");
	const del = document.createElement("img");
	const edit = document.createElement("img");

	item.classList.add("item");
	checkBox.type = "checkbox";
	checkBox.checked = done;
	if (checkBox.checked) {
		item.classList.add("completed");
	} else {
		item.classList.remove("completed");
	}
	task.innerText = text;
	task.className = "todo-task";
	selectPriority.innerText = priority;
	if (selectPriority.innerText === "Low") {
		selectPriority.style.color = "green";
	} else if (selectPriority.innerText === "Medium") {
		selectPriority.style.color = "orange";
	} else if (selectPriority.innerText === "High") {
		selectPriority.style.color = "red";
	}
	cal.innerText = date;
	cal.id = "todo-date";
	del.src = "./assets/close.svg";
	del.className = "del";
	edit.src = "./assets/edit.svg";
	edit.className = "edit";

	item.setAttribute("data-id", `${uuid}`);
	del.setAttribute("data-id", `${uuid}`);
	edit.setAttribute("data-id", `${uuid}`);
	edit.setAttribute("handleToggle", true);
	task.setAttribute("data-id", `${uuid}`);

	item.append(
		checkBox,
		task,
		selectPriority,
		cal,
		edit,
		del,
		EditForm(task.innerText, `${uuid}`)
	);

	return item;
};

export default TodoItem;
