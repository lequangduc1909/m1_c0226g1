function isPlusInteger(x) {
  if (x.trim() === "") {
    alert("Vui lòng ko để trống.");
    return;
  }
  let num = Number(x);
  if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
    alert("Vui lòng nhập số nguyên dương.");
    return;
  }
  alert(num + " là số nguyên dương.");
  return;
}

let numberIn = prompt("Nhập 1 số để check xem có phải số nguyên dương không?");
isPlusInteger(numberIn);
