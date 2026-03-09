let oNhap = document.getElementById("ban-kinh");
let nutTinh = document.getElementById("btn-tinh");
let vungKetQua = document.getElementById("hien-thi");

nutTinh.addEventListener("click", function () {
  let r = Number(oNhap.value);
  if (isNaN(r) || r <= 0) {
    vungKetQua.innerText = "Cậu hãy nhập bán kính là một số dương nhé!";
    return;
  }
  let dienTich = Math.PI * r * r;
  vungKetQua.innerText = "Diện tích hình tròn là: " + dienTich.toFixed(2) + "cm2";
});
