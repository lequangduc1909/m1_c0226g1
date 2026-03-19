let button = document.getElementById("button");
function compare(a, b) {
  if (a > b) {
    alert("Tham số thứ nhất lớn hơn tham số thứ hai");
  } else {
    let sum = a + b;
    return sum;
  }
}

button.addEventListener("click", function () {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);

  if (isNaN(a) || isNaN(b)) {
    alert("Vui lòng nhập số hợp lệ");
    return;
  }

  let result = compare(a, b);

  if (result !== undefined) {
    document.getElementById("result").innerText = "Tổng là: " + result;
  }
});
