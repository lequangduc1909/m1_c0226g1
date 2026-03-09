let inputC = document.getElementById("do-c");
let nutChuyen = document.getElementById("btn-chuyen");
let vungHienThi = document.getElementById("ket-qua-f");

nutChuyen.addEventListener("click", function() {

    let giaTriC = Number(inputC.value);

    if (isNaN(giaTriC)) {
        vungHienThi.innerText = "Cậu vui lòng nhập một con số nhé!";
        return;
    }
    let giaTriF = (giaTriC * 9 / 5) + 32;

    vungHienThi.innerText = giaTriC + "°C tương ứng với " + giaTriF.toFixed(1) + "°F";
});