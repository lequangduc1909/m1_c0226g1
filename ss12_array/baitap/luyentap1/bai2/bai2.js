let valueOfArray = document.getElementById("value");
let addButton = document.getElementById("add");
let checkButton = document.getElementById("check");
let displayArea = document.getElementById("display");

addButton.addEventListener("click", add);
checkButton.addEventListener("click", check);
checkButton.disabled = true;

let numbers = [];

function add() {
  numbers.push(Number(valueOfArray.value));
  valueOfArray.value = "";
  if (numbers.length >= 10) {
    displayArea.innerHTML = "Đã nhập đủ 10 giá trị, xem kết quả nhé.";
    addButton.disabled = true;
    checkButton.disabled = false;
  }
}

function check() {
  let max = numbers[0];
  let maxIndex = 0;
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] > max) {
      max = numbers[index];
      maxIndex = index;
    }
  }
  displayArea.innerHTML = "Phần tử có giá trị lớn nhất là: " + max + " ở vị trí thứ " + (maxIndex + 1);

  addButton.disabled = false;
  checkButton.disabled = true;
}
