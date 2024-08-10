function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

destroyBtn.addEventListener("click", destroyHandler);
createBtn.addEventListener("click", createHandler);

function createBoxes(amount) {
	const sumEl = Number(amount);
	destroyHandler();
	let size = 30;
	const arr = [];
	for (let i = 0; i < sumEl; i++) {
		arr.push(
			`<div style="height:${size}px;width:${size}px;background-color:${getRandomHexColor()}"></div>`,
		);
		size += 10;
	}
	boxes.insertAdjacentHTML("beforeend", arr.join(""));
	input.value = null;
}

function destroyHandler() {
	boxes.innerHTML = "";
}

function createHandler() {
	if (input.value > 0 && input.value <= 100) {
		createBoxes(input.value);
	} else {
		alert(
			`Input value can not be ${input.value}. Set a number between 1 and 100`,
		);
	}
}