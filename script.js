function NewDiv(container, gridValue) {
  for (let i = gridValue; i > 0; i--) {
    for (let j = gridValue; j > 0; j--) {
      const div = document.createElement("div");
      container.style.gridTemplateColumns = `repeat(${gridValue}, auto)`;
      container.style.gridTemplateRows = `repeat(${gridValue}, auto)`;
      div.setAttribute("id", "Sketch");
      container.appendChild(div);
    }
  }
}
let color = "black";
function ChangeBackgroundColor(event) {
    const div = event.target;
    div.style.backgroundColor = color;
  }
const container = document.querySelector(".container");
NewDiv(container, 16);
const Sketch = document.querySelectorAll("#Sketch");
Sketch.forEach(div => {
  div.addEventListener("mouseenter", ChangeBackgroundColor);
});
