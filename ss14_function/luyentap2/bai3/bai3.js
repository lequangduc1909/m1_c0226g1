function getFactorial(x) {
  let factorial = 1;
  for (let i = 1; i <= x; i++) {
    factorial *= i;
  }
  return factorial;
}

let factorialOut = Number(prompt("Nhập số muốn hiện thị giai thừa: "));

if (isNaN(factorialOut) || factorialOut < 0 || !Number.isInteger(factorialOut)) {
  alert("Vui lòng nhập số nguyên không âm!");
} else {
  alert("kết quả là: " + getFactorial(factorialOut));
}
