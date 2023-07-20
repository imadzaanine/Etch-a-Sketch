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
function Reset() {
 while (container.childNodes.length>0) {
    container.removeChild(container.firstChild)
  }
}
function DeleteBackgroundColor() {
  Sketch.forEach((div) => {
  div.style.removeProperty("background-color");
});
  
}
function ChangeBackgroundColor(event) {
  const div = event.target;
  div.style.backgroundColor = color.value;
}


const slide = document.querySelector('#slider');
const resetbtn = document.querySelector('#reset');
const label = document.querySelector('#slideLable');
const container = document.querySelector(".container");

const color = document.querySelector('#color');
label.innerHTML = `${slide.value}X${slide.value}`;

color.addEventListener("change", ChangeBackgroundColor);

NewDiv(container,slide.value);
const Sketch = document.querySelectorAll("#Sketch");
Sketch.forEach((div) => {
  div.addEventListener("mouseenter", ChangeBackgroundColor);
});



slide.oninput = function() {
  
  label.innerHTML = `${this.value}X${this.value}`;
  Reset();
  NewDiv(container,this.value);
    const Sketch = document.querySelectorAll("#Sketch");
    Sketch.forEach((div) => {
      div.addEventListener("mouseenter", ChangeBackgroundColor);
    });
    };
resetbtn.addEventListener("click", DeleteBackgroundColor);



    
 
