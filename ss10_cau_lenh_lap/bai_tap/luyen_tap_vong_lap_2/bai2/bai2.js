let button = document.getElementById("button");
let display = document.getElementById("display");

button.addEventListener("click", run);

function run(){

let n = Number(prompt("Nhập số"));

let result = 1;

for(let i = 1; i <= n; i++){

result *= i;

}

display.innerHTML = result;

}