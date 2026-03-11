function xepLoaiHocLuc() {
  let kiemtra = parseFloat(document.getElementById("kiemtra").value);
  let giuaky = parseFloat(document.getElementById("giuaky").value);
  let cuoiky = parseFloat(document.getElementById("cuoiky").value);

  let ketqua = document.getElementById("ketqua");

  let trungbinh = (kiemtra + giuaky + cuoiky) / 3;

  if (trungbinh >= 8) {
    ketqua.innerText = "Học lực: Giỏi";
  } else if (trungbinh >= 6.5) {
    ketqua.innerText = "Học lực: Khá";
  } else if (trungbinh >= 5) {
    ketqua.innerText = "Học lực: Trung bình";
  } else {
    ketqua.innerText = "Học lực: Yếu";
  }
}

document.getElementById("btnXepLoai").addEventListener("click", xepLoaiHocLuc);
