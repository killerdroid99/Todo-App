import { v4 } from "uuid";
import EditForm from "./EditForm";

const TodoItem = (done, text, priority, date) => {
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
	task.innerText = text;
	task.className = "todo-task";
	selectPriority.innerText = priority;
	if (priority === "Low") {
		selectPriority.style.color = "green";
	} else if (priority === "Medium") {
		selectPriority.style.color = "orange";
	} else if (priority === "High") {
		selectPriority.style.color = "red";
	}
	cal.innerText = date;
	cal.id = "todo-date";
	del.src = "../assets/close.svg";
	del.className = "del";
	edit.src = "../assets/edit.svg";
	edit.className = "edit";

	const uuid = v4();
	item.setAttribute("data-id", `${uuid}`);
	del.setAttribute("data-id", `${uuid}`);
	edit.setAttribute("data-id", `${uuid}`);
	edit.setAttribute("handleToggle", true);
	task.setAttribute("data-id", `${uuid}`);

	item.append(checkBox);
	item.appendChild(task);
	item.appendChild(selectPriority);
	item.appendChild(cal);
	item.appendChild(edit);
	item.appendChild(del);
	item.appendChild(EditForm(task.innerText, `${uuid}`));

	return item;
};

export default TodoItem;
