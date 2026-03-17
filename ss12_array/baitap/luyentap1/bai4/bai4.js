let numberIn = document.getElementById("number");
let addButton = document.getElementById("add");
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let displayArea = document.getElementById("display");

startButton.disabled = true;
resetButton.disabled = true;

addButton.addEventListener("click", add);
startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);
let numbers = [];

function add() {
  if (numberIn.value.trim() === "") {
    alert("Nhập số nguyên đi bạn");
    return;
  }

  let numberInput = Number(numberIn.value);
  if (isNaN(numberInput) || !Number.isInteger(numberInput)) {
    alert("Phải nhập số nguyên chứ bạn ơi");
    return;
  }
  numbers.push(numberInput);

  startButton.disabled = false;
  resetButton.disabled = false;
  numberIn.value = "";
}

function start() {
  numbers.reverse();
  let displayReversed = "";
  for (let index = 0; index < numbers.length; index++) {
    displayReversed += "Element " + (index + 1) + " có giá trị là: " + numbers[index] + "." + "<br>";
  }
  displayArea.innerHTML = "Mảng sau khi đã đảo: " + "<br>" + displayReversed;
  startButton.disabled = true;
  addButton.disabled = true;
}

function reset() {
  startButton.disabled = true;
  resetButton.disabled = true;
  addButton.disabled = false;
  numbers.splice(0, numbers.length);
  displayArea.innerHTML = "";
  numberIn.value = "";
}
