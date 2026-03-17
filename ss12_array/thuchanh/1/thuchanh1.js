let numberInput = document.getElementById("numberin");
let addButton = document.getElementById("add");
let displayButton = document.getElementById("display");
let resultArea = document.getElementById("result");
addButton.addEventListener("click", add);
displayButton.addEventListener("click", display);

let elements = [];

function add() {
  elements.push(numberInput.value);
  numberInput.value = "";
}

function display() {
  let box = "";

  for (let index = 0; index < elements.length; index++) {
    box += "Element " + index + "= " + elements[index] + "<br>";
  }
  resultArea.innerHTML = box;
}
