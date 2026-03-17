let button = document.getElementById("button");
let display = document.getElementById("display");
let numbers = [-5, 9, 13, 121, 6, 299, 5, 75, 2003, 3];

button.addEventListener("click", check);
function check(params) {
  let count = 0;
  let result = " ";
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] >= 10) {
      count++;
      result += " " + numbers[index];
    }
  }
  display.innerHTML = "Dãy số >= 10 gồm: " + count + " số và dãy đó là:" + result;
}
