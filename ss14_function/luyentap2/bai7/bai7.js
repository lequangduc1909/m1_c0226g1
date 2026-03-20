function switchNum(x, y) {
  let c = x;
  x = y;
  y = c;
  return [x, y];
}
function getNumber() {
  let a = +prompt("Nhập số a");
  let b = +prompt("Nhập số b");
  [a, b] = switchNum(a, b);
  switchNum(a, b);
  alert("Số a sau khi đổi là: " + a + " và số b sau khi đổi là: " + b + ".");
}
getNumber();
