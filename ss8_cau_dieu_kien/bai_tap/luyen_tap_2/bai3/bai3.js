let submitButton = document.getElementById("submit");
let resetButton = document.getElementById("reset");
let displayArea = document.getElementById("display");
resetButton.disabled = true;

function submit(params) {
  let sideSquare = Number(document.getElementById("side").value);

  if (isNaN(sideSquare) || sideSquare <= 0) {
    displayArea.innerText = "Nhập lại đi cha";
  } else {
    displayArea.innerText = "Diện tích hình vuông là: " + sideSquare * sideSquare + " cm2.";
  }
  resetButton.disabled = false;
  submitButton.disabled = true;
}

function reset(params) {
  let sideSquare = document.getElementById("side");
  sideSquare.value = "";
  displayArea.innerText = "";
  resetButton.disabled = true;
  submitButton.disabled = false;
}

submitButton.addEventListener("click", submit);
resetButton.addEventListener("click", reset);
