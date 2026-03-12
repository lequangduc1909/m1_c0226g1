const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
let display = document.getElementById("result");
resetButton.disabled = true;
//Khai báo 2 nút bấm cần thiết, 1 thẻ hiển thị kết quả, vô hiệu hóa nút 'Nhập lại'

function submit(params) {
  let distanceIn = Number(document.getElementById("distance").value);
  if (isNaN(distanceIn) || distanceIn <= 0) {
    display.innerText = "Nhập lại đi, đùa ko vui nhé =))";
  } else {
    display.innerText = "Kết quả là: " + (distanceIn * 3.2808).toFixed(3) + " feet.";
  }
  submitButton.disabled = true;
  resetButton.disabled = false;
}
//Tạo function subm

function reset(params) {
  let distanceIn = document.getElementById("distance");
  display.innerText = "";
  distanceIn.value = "";
  submitButton.disabled = false;
  resetButton.disabled = true;
}
// tạo function rese 

submitButton.addEventListener("click", submit);
resetButton.addEventListener("click", reset);

