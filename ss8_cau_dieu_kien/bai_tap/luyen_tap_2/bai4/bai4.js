let submitButton = document.getElementById("submit");
let resetButton = document.getElementById("reset");
let displayArea = document.getElementById("display");
resetButton.disabled = true;

function result(params) {
  let aSide = Number(document.getElementById("aside").value);
  let bSide = Number(document.getElementById("bside").value);

  if (aSide >= 0 && bSide >= 0) {
    displayArea.innerText = "Diện tích hình chữ nhật có cạnh A là: " + aSide + "cm và cạnh B là: " + bSide + "cm là: " + aSide * bSide + "cm2.";
  } else {
    displayArea.innerText = " Nhập sai rồi, mời bạn nhập lại hộ mình với.";
  }
  resetButton.disabled = false;
  submitButton.disabled = true;
}

function reset(params) {
  let aSide = document.getElementById("aside");
  let bSide = document.getElementById("bside");
  aSide.value = "";
  bSide.value = "";
  displayArea.innerText = "";
  resetButton.disabled = true;
  submitButton.disabled = false;
}
submitButton.addEventListener("click", result);
resetButton.addEventListener("click", reset);
