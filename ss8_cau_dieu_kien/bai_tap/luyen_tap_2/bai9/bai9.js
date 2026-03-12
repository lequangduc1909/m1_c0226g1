let checkButton = document.getElementById("check");
let resetButton = document.getElementById("reset");
let displayArea = document.getElementById("display");

resetButton.disabled = true;

function check(params) {

    let aInput = Number(document.getElementById("aSide").value);
    let bInput = Number(document.getElementById("bSide").value);
    let cInput = Number(document.getElementById("cSide").value);

    if (isNaN(aInput) || isNaN(bInput) || isNaN(cInput) ||
        aInput <= 0 || bInput <= 0 || cInput <= 0) {

        displayArea.innerText = "Nhập sai rồi, nhập lại đi bạn ơi";
    }

    else if (aInput + bInput > cInput &&
             bInput + cInput > aInput &&
             aInput + cInput > bInput) {

        displayArea.innerText = "Ba cạnh này tạo thành một tam giác";
    }

    else {
        displayArea.innerText = "Ba cạnh này KHÔNG tạo thành tam giác";
    }

    checkButton.disabled = true;
    resetButton.disabled = false;
}

function reset(params) {

    let aInput = document.getElementById("aSide");
    let bInput = document.getElementById("bSide");
    let cInput = document.getElementById("cSide");

    aInput.value = "";
    bInput.value = "";
    cInput.value = "";

    displayArea.innerText = "";

    checkButton.disabled = false;
    resetButton.disabled = true;
}

checkButton.addEventListener("click", check);
resetButton.addEventListener("click", reset);