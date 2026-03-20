let radius = document.getElementById("radius");
let checkBtn = document.getElementById("checkbtn");
let resetBtn = document.getElementById("resetbtn");
let displayArea = document.getElementById("display");
resetBtn.disabled = true;

function cirOfCircle(x) {
  return (Math.PI * x * 2).toFixed(3);
}
function areaOfCircle(x) {
  return (Math.PI * x * x).toFixed(3);
}
function alertInfo(alert) {
  radius.value = "";
  displayArea.innerHTML = alert;
  resetBtn.disabled = false;
  checkBtn.disabled = true;
}

checkBtn.addEventListener("click", displayResult);
resetBtn.addEventListener("click", resetInfo);

function displayResult() {
  let radiusValue = radius.value;
  if (radiusValue.trim() === "") {
    alertInfo("Không để trống!");
    return;
  }
  let radiusIn = Number(radiusValue);
  if (radiusIn <= 0 || Number.isNaN(radiusIn)) {
    alertInfo("Vui lòng nhập giá trị số lớn hơn 0");
    return;
  } else {
    alertInfo("Chu vi là: " + cirOfCircle(radiusIn) + " cm" + "<br>" + "diện tích là: " + areaOfCircle(radiusIn) + " cm2");
  }
}

function resetInfo() {
  displayArea.innerHTML = "";
  radius.value = "";
  resetBtn.disabled = true;
  checkBtn.disabled = false;
}
