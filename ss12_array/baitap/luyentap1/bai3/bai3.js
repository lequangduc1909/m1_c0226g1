let button = document.getElementById("button");
let displayArea = document.getElementById("display");

let numbers = [12, 45, 32, 1, 99, 432, 14, 785, 42, 50];

button.addEventListener("click", check);

function check() {
  let max = numbers[0];
  let sum = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] > max) {
      max = numbers[index];
    }
    sum += numbers[index];
  }
  displayArea.innerHTML =
    "Giá trị lớn nhất trong mảng trên là: " + max + " và trung bình của các số trong mảng là: " + (sum / numbers.length).toFixed(1);
}
