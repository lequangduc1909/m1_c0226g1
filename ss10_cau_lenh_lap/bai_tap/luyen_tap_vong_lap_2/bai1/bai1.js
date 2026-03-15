let button = document.getElementById("button");
let display = document.getElementById("display");

button.addEventListener("click", run);

function run() {
  let a = 0;
  let b = 1;
  let result = "";

  for (let i = 0; i < 20; i++) {
    result += a + " ";

    let temp = a + b;
    a = b;
    b = temp;
  }

  display.innerHTML = result;
}
