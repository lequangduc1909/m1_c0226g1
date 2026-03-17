let numbers = [3, 7, 10, 5, 8, 2, 9, 4, 6, 1];

let v = 5;

let found = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === v) {
    found = true;
    break;
  }
}

if (found) {
  document.getElementById("display").innerHTML = "v is in the array";
} else {
  document.getElementById("display").innerHTML = "v is not in the array";
}
