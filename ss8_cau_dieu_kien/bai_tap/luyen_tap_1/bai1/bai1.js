let button = document.getElementById("btnKiemTra");

button.addEventListener("click", function () {

    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let ketqua = document.getElementById("ketqua");

    if (b === 0) {
        ketqua.innerText = "Không thể chia cho 0";
        return;
    }

    if (a % b === 0) {
        ketqua.innerText = a + " chia hết cho " + b;
    } else {
        ketqua.innerText = a + " không chia hết cho " + b;
    }

});