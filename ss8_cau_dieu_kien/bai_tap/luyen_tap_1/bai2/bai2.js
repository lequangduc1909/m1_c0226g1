let button = document.getElementById("btnKiemTra");

button.addEventListener("click", function () {

    let tuoi = parseInt(document.getElementById("tuoi").value);
    let ketqua = document.getElementById("ketqua");

    if (tuoi >= 15) {
        ketqua.innerText = "Học sinh đủ điều kiện vào lớp 10";
    } else {
        ketqua.innerText = "Học sinh không đủ điều kiện vào lớp 10";
    }

});