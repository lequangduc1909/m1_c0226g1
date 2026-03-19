function feetToMeter(x) {
  return 0.305 * x;
}
function meterToFeet(y) {
  return 3.279 * y;
}
function checkNumber() {
  let feetIn = prompt("Nhập số feet vào:");
  let meterIn = prompt("Nhập số m vào:");
  if (feetIn.trim() === "" || meterIn.trim() === "") {
    alert("Đừng có để trống bạn ơi :<");
    return;
  }
  if (Number.isNaN(Number(feetIn)) || Number.isNaN(Number(meterIn))) {
    alert("Nhập số vào");
    return;
  } else {
    alert("ft -> m là: " + feetToMeter(Number(feetIn)) +" m."+ "\n" + "m -> ft là: " + meterToFeet(Number(meterIn))+ " ft.") ;
  }
}

checkNumber();
