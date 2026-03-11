let weightIn = document.getElementById("weight");
let heightIn = document.getElementById("height");
let kiemTra = document.getElementById("kiemtra");
let hienThi = document.getElementById("hienthi"); 
// khai bao


// dat ten ham

function hienThiOut(params) {
  let canNang = Number(weightIn.value);
  let chieuCao = Number(heightIn.value) / 100;
  let bmi = canNang / (chieuCao * chieuCao);
  

  if (bmi < 18.5) {
    hienThi.innerText = "Chỉ số BMI của bạn là: " + bmi.toFixed(1) + ". Suy dinh dưỡng rồi, ăn thêm nhé !";
  } else if (bmi < 25.0) {
    hienThi.innerText = "Chỉ số BMI của bạn là: " + bmi.toFixed(1) +". Bạn bình thường, chúc mừng nha !";
  } else if (bmi < 30.0) {
    hienThi.innerText = "Chỉ số BMI của bạn là: " + bmi.toFixed(1) + ". Hơi thừa cân rồi bạn ơi :((";
  } else {
    hienThi.innerText = "Chỉ số BMI của bạn là: " + bmi.toFixed(1) + ". Béo phùy kia ba :((";
  }
}
kiemTra.addEventListener("click", hienThiOut);
// ra lenh thuc hien
