let chieuDai = document.getElementById("cd");
let chieuRong = document.getElementById("cr");
let chuVi = document.getElementById("cv");
let dienTich = document.getElementById("dt");
let ketQua = document.getElementById("ketqua");
let chayLai = document.getElementById("reset");
chayLai.disabled = true;

function result() {
  let chieuDaiIn = Number(chieuDai.value);
  let chieuRongIn = Number(chieuRong.value);

  //   let chuViOut = (chieuDaiIn + chieuRongIn) * 2;
  //   let dienTichOut = chieuDaiIn * chieuRongIn;

  chuVi.innerText = (chieuDaiIn + chieuRongIn) * 2 + " cm";
  dienTich.innerText = chieuDaiIn * chieuRongIn + " cm2";
  ketQua.disabled = true;
  chayLai.disabled = false;
}

function reset() {
  chieuDai.value = "";
  chieuRong.value = "";
  chuVi.innerText = "";
  dienTich.innerText = "";
  ketQua.disabled = false;
  chayLai.disabled = true;
}

ketQua.addEventListener("click", result);
chayLai.addEventListener("click", reset);
