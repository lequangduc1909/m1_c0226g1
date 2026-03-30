let input = document.getElementById("input");
let addBtn = document.getElementById("add");
let submitBtn = document.getElementById("submit");
let displayZone = document.getElementById("display");
let arrA = [];
let arrB = [];

function checkNum(number) {
  let value = number.value.trim();
  if (value === "") {
    displayZone.innerHTML = " Vui lòng không để trống";
    return null;
  }
  let numberIn = Number(value);
  if (isNaN(numberIn) || !Number.isInteger(numberIn)) {
    displayZone.innerHTML = "Vui lòng nhập một số nguyên";
    return null;
  }
  return numberIn;
}

function addNum(numberIn, arr) {
  arr.push(numberIn);
  input.value = "";
}

function displayArray(arr) {
  displayZone.innerHTML = `[ ${arr.join(", ")} ] `;
}

addBtn.addEventListener("click", function () {
  let number = checkNum(input);
  if (number === null) {
    return;
  } else {
    addNum(number, arrA);
    displayArray(arrA);
  }
});

function calcPrefixSum(array1, array2) {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
    array2.push(sum);
  }
}

function displayFinalResult(array2) {
  displayZone.innerHTML = "Kết quả: " + "[" + array2.join(" - ") + "]";
}

submitBtn.addEventListener("click", function runProgram() {
  calcPrefixSum(arrA, arrB);
  displayFinalResult(arrB);
  arrB.length = 0;
});
