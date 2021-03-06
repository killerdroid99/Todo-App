const EditForm = (inputVal, dataId) => {
	const form = document.createElement("form");
	const input = document.createElement("input");
	const select = document.createElement("select");
	const low = document.createElement("option");
	const medium = document.createElement("option");
	const high = document.createElement("option");
	const date = document.createElement("input");

	form.setAttribute("data-id", dataId);
	form.classList.add("hideEdit");
	input.value = inputVal;

	Date.prototype.toDateInputValue = function () {
		var local = new Date(this);
		local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
		return local.toJSON().slice(0, 10);
	};

	low.innerText = "Low";
	low.value = "Low";
	medium.innerText = "Medium";
	medium.value = "Medium";
	high.innerText = "High";
	high.value = "High";
	date.type = "date";
	date.value = new Date().toDateInputValue();

	select.append(low, medium, high);
	form.append(input, select, date);

	return form;
};

export default EditForm;
