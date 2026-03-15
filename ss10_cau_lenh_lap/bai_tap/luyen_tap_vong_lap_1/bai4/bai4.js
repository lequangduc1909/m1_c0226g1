let display = document.getElementById("hienthi");
let a = 0;
let b = 1;

while (true) {
  let c = a + b;
  if (c % 5 === 0) {
    display.innerText = " Số đầu tiên trong dãy fibo chia hết cho 5 là: " + c;
    break;
  }
  a = b;
  b = c;
}
