let display = document.getElementById("display");
let checkButton = document.getElementById("check");
let number = 0;
let sum = 0;
let count = 0;

function check() {
  while (count < 30) {
    if (number % 7 === 0) {
      sum += number;
      count++;
    }
    number++;
  }
  display.innerHTML = "Kết quả là: " + sum + ".";
}
checkButton.addEventListener("click", check);
