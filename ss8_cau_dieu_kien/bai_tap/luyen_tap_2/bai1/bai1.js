let butTon = document.getElementById("result");
let butTonReset = document.getElementById("reset");
let display = document.getElementById("display");
butTonReset.disabled = true;

function displayResult(params) {
  let tempIn = Number(document.getElementById("tempC").value);
  if (isNaN(tempIn)) {
    display.innerText = "Vui lòng nhập lại nhé bạn ơi, đừng có đùa !!!";
  } else {
    display.innerText = "Kết quả là: " + ((tempIn * 9) / 5 + 32) + " độ F.";
  }
  butTon.disabled = true;
  butTonReset.disabled = false;
}

function resetResult(params) {
  let tempInput = document.getElementById("tempC");
  //   let tempInput = document.getElementById("tempC").value; (sai)
  tempInput.value = "";
  display.innerText = "";
  butTon.disabled = false;
  butTonReset.disabled = true;
}

butTon.addEventListener("click", displayResult);
butTonReset.addEventListener("click", resetResult);
