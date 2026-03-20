function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
function alertNotification(notification) {
  addBtn.disabled = true;
  runBtn.disabled = false;
  resetBtn.disabled = false;
  numIn.value = "";
  displayArea.innerHTML = notification;
}
let arrays = [];

let numIn = document.getElementById("numin");
let addBtn = document.getElementById("add");
let runBtn = document.getElementById("run");
let resetBtn = document.getElementById("reset");
let displayArea = document.getElementById("display");
runBtn.disabled = true;
resetBtn.disabled = true;

addBtn.addEventListener("click", addNum);
runBtn.addEventListener("click", runProgram);
resetBtn.addEventListener("click", resetArray);

function addNum() {
  if (numIn.value.trim() === "") {
    alertNotification("Không bỏ trống ô nhập nhé bạn ơi!");
    return;
  }
  let numInput = Number(numIn.value);
  if (isNaN(numInput) || !Number.isInteger(numInput)) {
    alertNotification("Vui lòng chỉ nhập số nguyên.");
  } else {
    numIn.value = "";
    runBtn.disabled = false;
    resetBtn.disabled = false;
    arrays.push(numInput);
    displayArea.innerHTML += numInput + "<br> ";
  }
}

function runProgram() {
  arrays = reverseArray(arrays);
  let displayNum = "";
  for (let index = 0; index < arrays.length; index++) {
    displayNum += "Phần tử " + (index + 1) + " là: " + arrays[index] + ". " + "<br>";
  }
  displayArea.innerHTML = "Kết quả sau khi đảo hàm là: " + "<br>" + displayNum;
}

function resetArray() {
  resetBtn.disabled = true;
  addBtn.disabled = false;
  runBtn.disabled = true;
  arrays.splice(0, arrays.length);
  displayArea.innerHTML = "";
  numIn.value = "";
}
