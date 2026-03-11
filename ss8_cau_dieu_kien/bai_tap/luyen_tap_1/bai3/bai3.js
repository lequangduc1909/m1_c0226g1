let button = document.getElementById("btnKiemTra");

button.addEventListener("click", function () {

    let so = parseInt(document.getElementById("so").value);
    let ketqua = document.getElementById("ketqua");

    if (so > 0) {
        ketqua.innerText = "Số lớn hơn 0";
    } 
    else if (so < 0) {
        ketqua.innerText = "Số nhỏ hơn 0";
    } 
    else {
        ketqua.innerText = "Số bằng 0";
    }

});