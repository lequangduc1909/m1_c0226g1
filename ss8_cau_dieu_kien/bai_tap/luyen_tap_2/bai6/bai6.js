let checkButton = document.getElementById("check");
let resetButton = document.getElementById("reset");
let displayArea = document.getElementById("display");

resetButton.disabled = true;

function check(params) {

    let aInput = Number(document.getElementById("aInput").value);
    let bInput = Number(document.getElementById("bInput").value);

    if (isNaN(aInput) || isNaN(bInput)) {
        displayArea.innerText = "Nhập sai rồi, nhập lại đi bạn ơi";
    }

    else if (aInput === 0 && bInput === 0) {
        displayArea.innerText = "Phương trình có vô số nghiệm";
    }

    else if (aInput === 0 && bInput !== 0) {
        displayArea.innerText = "Phương trình vô nghiệm";
    }

    else {
        let x = (-bInput / aInput).toFixed(3);
        displayArea.innerText = "Nghiệm của phương trình là: x = " + x;
    }

    checkButton.disabled = true;
    resetButton.disabled = false;
}

function reset(params) {

    let aInput = document.getElementById("aInput");
    let bInput = document.getElementById("bInput");

    aInput.value = "";
    bInput.value = "";
    displayArea.innerText = "";

    checkButton.disabled = false;
    resetButton.disabled = true;
}

checkButton.addEventListener("click", check);
resetButton.addEventListener("click", reset);