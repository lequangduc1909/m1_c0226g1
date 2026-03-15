let button = document.getElementById("button");
let display = document.getElementById("display");
let abc = " ";
button.addEventListener("click", check);

function check() {
  for (let number = 1; number <= 100; number++) {
    if (number % 15 === 0) {
      abc += " FizzBuzz ";
      continue;
    }
    if (number % 5 === 0) {
      abc += " Buzz ";
      continue;
    }
    if (number % 3 === 0) {
      abc += " Fizz ";
      continue;
    }
    abc += number + " ";
  }
  display.innerHTML = "Dãy cần in ra là: " + abc +".";
}


