let numberIn = document.getElementById("number");
let checkButton = document.getElementById("check");
let resetButton = document.getElementById("reset");
let resultArea = document.getElementById("result");
resetButton.disabled = true;
function squareOfNum(x) {
  return x * x;
}

function showError(message) {
  resultArea.innerHTML = message;
  numberIn.value = "";
  resetButton.disabled = false;
  checkButton.disabled = true;
}
checkButton.addEventListener("click", displayResult);
resetButton.addEventListener("click", resetResult);

function displayResult() {
  let numIn = numberIn.value;
  if (numIn.trim() === "") {
    showError("Ko để trống nhé !");
    return;
  }
  // sao numIn = "" k được.
  let num = Number(numIn);
  if (Number.isNaN(num)) {
    showError("Nhập số đi bạn ơi !");
  } else {
    resultArea.innerHTML = "Kết quả là: " + squareOfNum(num);
    resetButton.disabled = false;
    checkButton.disabled = true;
  }
}

function resetResult() {
  numberIn.value = "";
  resultArea.innerHTML = "";
  resetButton.disabled = true;
  checkButton.disabled = false;
}
