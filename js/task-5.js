function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btn.addEventListener("click", (changeColor) => {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  document.body.style.background = color;
 }
)
console.log(getRandomHexColor());