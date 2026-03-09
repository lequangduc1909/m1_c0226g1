let inputLy = document.getElementById("ly");
let inputHoa = document.getElementById("hoa");
let inputSinh = document.getElementById("sinh");
let nutTinh = document.getElementById("btn-tinh");
let vungKetQua = document.getElementById("ket-qua");

nutTinh.addEventListener("click", function () {
  let diemLy = Number(inputLy.value);
  let diemHoa = Number(inputHoa.value);
  let diemSinh = Number(inputSinh.value);

  let tongDiem = diemLy + diemHoa + diemSinh;
  let diemTrungBinh = tongDiem / 3;

  vungKetQua.innerText = "Tổng điểm: " + tongDiem + " | Điểm trung bình: " + diemTrungBinh.toFixed(2);
});
