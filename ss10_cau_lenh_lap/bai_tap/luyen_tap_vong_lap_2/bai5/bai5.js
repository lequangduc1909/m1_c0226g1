let button = document.getElementById("button");
let display = document.getElementById("display");

button.addEventListener("click", run);

function run() {
  let money = Number(prompt("Tiền ban đầu"));
  let month = Number(prompt("Số tháng"));
  let rate = Number(prompt("Lãi mỗi tháng (%)"));

  for (let i = 1; i <= month; i++) {
    money += (money * rate) / 100;
  }

  display.innerHTML = money;
}
