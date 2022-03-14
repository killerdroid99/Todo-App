const TodoForm = () => {
	const overlay = document.createElement("div");
	const form = document.createElement("form");
	const span = document.createElement("span");
	const task = document.createElement("input");
	const asterisk = document.createElement("p");
	const taskLabel = document.createElement("label");
	const priorityLabel = document.createElement("label");
	const div = document.createElement("div");
	const low = document.createElement("input");
	const lowLabel = document.createElement("label");
	const medium = document.createElement("input");
	const mediumLabel = document.createElement("label");
	const high = document.createElement("input");
	const highLabel = document.createElement("label");
	const spanD = document.createElement("span");
	const dateLabel = document.createElement("label");
	const date = document.createElement("input");
	const btn = document.createElement("button");
	const exit = document.createElement("img");

	overlay.className = "overlay";

	exit.src = "./assets/close.svg";
	exit.id = "exit";

	form.id = "form";

	task.type = "text";
	asterisk.innerText = "*";
	task.maxLength = "20";
	task.minLength = "1";
	task.id = "task";
	taskLabel.innerText = "Task: ";
	taskLabel.htmlFor = "task";
	taskLabel.insertAdjacentElement("afterbegin", asterisk);

	priorityLabel.innerText = "Priority: ";

	low.id = "low";
	low.value = "Low";
	low.type = "radio";
	low.name = "priority";
	lowLabel.innerText = "Low: ";
	lowLabel.htmlFor = "low";
	lowLabel.style.cssText = "color: green; font-weight: 700";

	medium.id = "medium";
	medium.value = "Medium";
	medium.type = "radio";
	medium.name = "priority";
	mediumLabel.innerText = "Medium: ";
	mediumLabel.htmlFor = "medium";
	mediumLabel.style.cssText = "color: orange; font-weight: 700";

	high.id = "high";
	high.value = "High";
	high.type = "radio";
	high.name = "priority";
	highLabel.innerText = "High: ";
	highLabel.htmlFor = "high";
	highLabel.style.cssText = "color: red; font-weight: 700";

	dateLabel.innerText = "Date: ";
	dateLabel.htmlFor = "date";
	date.type = "date";
	date.id = "date";

	btn.innerText = "Add";
	btn.type = "submit";
	btn.id = "add";

	span.appendChild(taskLabel);
	span.appendChild(task);
	form.appendChild(span);
	div.appendChild(priorityLabel);
	div.appendChild(lowLabel);
	div.appendChild(low);
	div.appendChild(mediumLabel);
	div.appendChild(medium);
	div.appendChild(highLabel);
	div.appendChild(high);
	form.appendChild(div);
	spanD.appendChild(dateLabel);
	spanD.appendChild(date);
	form.appendChild(spanD);
	form.appendChild(btn);
	form.appendChild(exit);
	overlay.appendChild(form);

	return overlay;
};

export default TodoForm;
