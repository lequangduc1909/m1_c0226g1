let oBanKinh = document.getElementById("bk-chuvi");
let nutTinhCV = document.getElementById("btn-cv");
let vungHienThiCV = document.getElementById("res-cv");

nutTinhCV.addEventListener("click", function () {
  let r = Number(oBanKinh.value);

  if (isNaN(r) || r <= 0) {
    vungHienThiCV.innerText = "Bán kính không hợp lệ, cậu nhập lại nhé!";
    vungHienThiCV.style.color = "red";
    return;
  }
  let chuVi = 2 * Math.PI * r;
  
  vungHienThiCV.innerText = "Chu vi hình tròn là: " + chuVi.toFixed(2) + "cm";
  vungHienThiCV.style.color = "green";
});
