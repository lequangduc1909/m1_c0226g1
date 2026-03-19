function plusOne(x) {
  return x + 1;
}

let btn = document.getElementById("button");

btn.addEventListener("click", function () {
  let n = Number(document.getElementById("number").value);

  if (isNaN(n)) {
    alert("Vui lòng nhập số!");
    return;
  }

  let kq = plusOne(n);
  document.getElementById("result").innerText = "Kết quả: " + kq;
});
