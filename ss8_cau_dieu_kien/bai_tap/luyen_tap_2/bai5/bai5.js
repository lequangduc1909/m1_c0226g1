let checkButton = document.getElementById("check");
let resetButton = document.getElementById("reset");
let displayArea = document.getElementById("display");
resetButton.disabled = true;

function check(params) {
  let aSideInput = Number(document.getElementById("aSide").value);
  let bSideInput = Number(document.getElementById("bSide").value);

  if (isNaN(aSideInput) || isNaN(bSideInput) || aSideInput <= 0 || bSideInput <= 0) {
    displayArea.innerText = "Ko đùa, nhập lại đi bạn ơi =)))";
  } else {
    displayArea.innerText = "Diện tích hình tam giác vuông này là: " + ((aSideInput * bSideInput) / 2).toFixed(3) + " cm2";
  }
  checkButton.disabled = true;
  resetButton.disabled = false;
}

function reset(params) {
  let aSideInput = document.getElementById("aSide");
  let bSideInput = document.getElementById("bSide");
  displayArea.innerText = "";
  aSideInput.value = "";
  bSideInput.value = "";
  checkButton.disabled = false;
  resetButton.disabled = true;
}

checkButton.addEventListener("click", check);
resetButton.addEventListener("click", reset);
