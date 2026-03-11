let thangIn = document.getElementById("thang");
let tinhToan = document.getElementById("tinhtoan");
let ketQua = document.getElementById("ketqua");

function tinhSoNgay() {
  let thangInput = Number(thangIn.value);

  switch (thangInput) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      ketQua.innerText = "Tháng " + thangInput + " có 31 ngày";
      break;
    case 2:
      ketQua.innerText = "Tháng 2, có 28 hoặc 29 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      ketQua.innerText = "Tháng " + thangInput + "có 30 ngày";
      break;

    default:
      ketQua.innerText = "Sai rồi bạn. Nhập lại đi";
      break;
  }
}
tinhToan.addEventListener("click", tinhSoNgay);
