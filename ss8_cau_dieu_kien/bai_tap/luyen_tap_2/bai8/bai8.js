let checkButton = document.getElementById("check");
let resetButton = document.getElementById("reset");
let displayResult = document.getElementById("display");
resetButton.disabled = true;

function check(params) {
  resetButton.disabled = false;
  checkButton.disabled = true;
  let ageInput = Number(document.getElementById("age").value);

  if (isNaN(ageInput)) {
    alert("Đùa ko vui bạn ơi");
    return;
  }

  if (0 < ageInput && ageInput < 120) {
    displayResult.innerText = "Bạn là con người.";
  } else {
    displayResult.innerText = "Còn sống ko bạn ơi ??";
  }
}

function reset(params) {
  let ageInput = document.getElementById("age");
  displayResult.innerText = "";
  ageInput.value = "";
  resetButton.disabled = true;
  checkButton.disabled = false;
}

checkButton.addEventListener("click", check);
resetButton.addEventListener("click", reset);
