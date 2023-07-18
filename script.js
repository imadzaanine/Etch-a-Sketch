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
const container = document.querySelector(".container");
function ChangeBackgroundColor(event) {
  const div = event.target;
  div.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");
btn.onclick = function () {
  const SelectedNumber = prompt("Select a number from 1 to 100");
  const SquareNumber = parseInt(SelectedNumber);
  if (SelectedNumber < 0 || SelectedNumber > 100) {
    alert("The selected number is not in the range");
  }
  if (isNaN(SelectedNumber)) {
    alert("Please select a valid number");
  } else {
    console.log(SquareNumber);
    NewDiv(container, SquareNumber);

    const Sketch = document.querySelectorAll("#Sketch");
    Sketch.forEach((div) => {
      div.addEventListener("mouseenter", ChangeBackgroundColor);
    });
  }
};
