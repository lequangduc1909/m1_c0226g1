let checkButton = document.getElementById("check");
let resetButton = document.getElementById("reset");
let displayArea = document.getElementById("display");

resetButton.disabled = true;

function check(params) {

    let electricInput = Number(document.getElementById("electric").value);
    let money;

    if (isNaN(electricInput) || electricInput <= 0) {
        displayArea.innerText = "Nhập sai rồi, nhập lại đi bạn ơi";
    }

    else if (electricInput <= 50) {
        money = electricInput * 1800;
    }

    else if (electricInput <= 100) {
        money = electricInput * 2000;
    }

    else if (electricInput <= 200) {
        money = electricInput * 2500;
    }

    else {
        money = electricInput * 3000;
    }

    if (!isNaN(money)) {
        displayArea.innerText = "Tiền điện phải trả là: " + money + " VND";
    }

    checkButton.disabled = true;
    resetButton.disabled = false;
}

function reset(params) {

    let electricInput = document.getElementById("electric");

    electricInput.value = "";
    displayArea.innerText = "";

    checkButton.disabled = false;
    resetButton.disabled = true;
}

checkButton.addEventListener("click", check);
resetButton.addEventListener("click", reset);