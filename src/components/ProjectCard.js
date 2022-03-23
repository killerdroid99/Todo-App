const ProjectCard = (
	PID,
	title,
	totalTasks = 0,
	completeTasks = 0,
	highTasks = 0,
	mediumTasks = 0,
	lowTasks = 0
) => {
	const project = document.createElement("div");
	project.setAttribute("PID", PID);
	const input = document.createElement("input");
	input.setAttribute("PID", PID);
	input.className = "titleInput";
	const ul = document.createElement("ul");
	const total = document.createElement("li");
	const tStrong = document.createElement("strong");
	const complete = document.createElement("li");
	const cStrong = document.createElement("strong");
	const high = document.createElement("li");
	const hStrong = document.createElement("strong");
	const medium = document.createElement("li");
	const mStrong = document.createElement("strong");
	const low = document.createElement("li");
	const lStrong = document.createElement("strong");
	const img = document.createElement("img");
	img.setAttribute("PID", PID);
	const delImg = document.createElement("img");
	delImg.setAttribute("PID", PID);

	project.classList.add("card");
	input.type = "text";
	input.value = title;
	total.innerText = "Total Tasks: ";
	tStrong.innerText = totalTasks;
	total.append(tStrong);
	complete.innerText = "Completed : ";
	cStrong.innerText = completeTasks;
	complete.append(cStrong);
	high.innerText = "High Priority : ";
	hStrong.innerText = highTasks;
	high.append(hStrong);
	medium.innerText = "Medium Priority : ";
	mStrong.innerText = mediumTasks;
	medium.append(mStrong);
	low.innerText = "Low Priority : ";
	lStrong.innerText = lowTasks;
	low.append(lStrong);
	ul.append(total, complete, high, medium, low);
	img.src = "./assets/btn.svg";
	img.alt = "button";
	img.className = "btn";
	delImg.src = "./assets/delete.svg";
	delImg.className = "delImg";
	project.append(input, ul, img, delImg);

	return project;
};

export default ProjectCard;
