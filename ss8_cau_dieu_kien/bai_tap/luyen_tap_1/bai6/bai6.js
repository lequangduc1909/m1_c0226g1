function tinhHoaHong() {
  let doanhso = parseFloat(document.getElementById("doanhso").value);
  let ketqua = document.getElementById("ketqua");

  let hoahong;

  if (doanhso >= 100000000) {
    hoahong = doanhso * 0.1;
  } else if (doanhso >= 50000000) {
    hoahong = doanhso * 0.05;
  } else {
    hoahong = doanhso * 0.01;
  }

  ketqua.innerText = "Hoa hồng nhận được: " + hoahong + " VND";
}

document.getElementById("btnTinh").addEventListener("click", tinhHoaHong);


