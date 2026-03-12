let checkButton = document.getElementById("check");
let resetButton = document.getElementById("reset");
let displayArea = document.getElementById("display");

resetButton.disabled = true;

function check(params) {
  let incomeInput = Number(document.getElementById("income").value);
  let tax;

  if (isNaN(incomeInput) || incomeInput <= 0) {
    displayArea.innerText = "Nhập sai rồi, nhập lại đi bạn ơi";
  } else if (incomeInput <= 5000000) {
    tax = incomeInput * 0.05;
  } else if (incomeInput <= 10000000) {
    tax = incomeInput * 0.1;
  } else if (incomeInput <= 18000000) {
    tax = incomeInput * 0.15;
  } else {
    tax = incomeInput * 0.2;
  }

  if (!isNaN(tax)) {
    displayArea.innerText = "Thuế thu nhập phải nộp là: " + tax + " VNĐ";
  }

  checkButton.disabled = true;
  resetButton.disabled = false;
}

function reset(params) {
  let incomeInput = document.getElementById("income");

  incomeInput.value = "";
  displayArea.innerText = "";

  checkButton.disabled = false;
  resetButton.disabled = true;
}

checkButton.addEventListener("click", check);
resetButton.addEventListener("click", reset);
