let button = document.getElementById("button");
let display = document.getElementById("display");

button.addEventListener("click", run);

function run() {
  let result = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
      if (i === 1 || i === 5 || j === 1 || j === 10) {
        result += "*";
      } else {
        result += "&nbsp;&nbsp;";
      }
    }

    result += "<br>";
  }

  display.innerHTML = result;
}
