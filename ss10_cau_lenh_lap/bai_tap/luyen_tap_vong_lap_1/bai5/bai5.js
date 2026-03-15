let displayArea = document.getElementById("display");
let resultButton = document.getElementById("result");
let a = 0;
let b = 1;
let count = 0;
let sum = 1;

function check(params) {
  while (count < 18) {
    let c = a + b;
    sum += c;
    a = b;
    b = c;
    count++;
  }
  displayArea.innerHTML = "Kết quả phép cộng 20 số đầu trong dãy Fibonacci là: " + sum + ".";
}
resultButton.addEventListener("click", check);
