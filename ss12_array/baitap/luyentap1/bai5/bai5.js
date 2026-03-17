let numbers = [3, -2, 5, -7, 8, -1, 4];
let startButton = document.getElementById("button");

startButton.addEventListener("click", start);

function start(params) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      count++;
    }
  }
  document.getElementById("display").innerHTML = "Có " + count + " số nguyên âm";
}
