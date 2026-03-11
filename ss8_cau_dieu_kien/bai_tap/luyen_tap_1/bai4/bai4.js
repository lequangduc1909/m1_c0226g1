let soThuNhat = document.getElementById("sothu1");
let soThuHai = document.getElementById("sothu2");
let soThuBa = document.getElementById("sothu3");
let kiemTra = document.getElementById("kiemtra");
let hienThi = document.getElementById("hienthi");

function ketQua(params) {
  firstNumber = Number(soThuNhat.value);
  secondNumber = Number(soThuHai.value);
  thirdNumber = Number(soThuBa.value);

  if (firstNumber > secondNumber) {
    if (firstNumber > thirdNumber) {
      hienThi.innerText = firstNumber;
    } else {
      hienThi.innerText = thirdNumber;
    }
  } else {
    if (secondNumber > thirdNumber) {
      hienThi.innerText = secondNumber;
    } else {
      hienThi.innerText = thirdNumber;
    }
  }
}
kiemTra.addEventListener("click", ketQua);
