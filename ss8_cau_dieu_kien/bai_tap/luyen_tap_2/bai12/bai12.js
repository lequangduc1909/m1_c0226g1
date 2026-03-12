let checkButton = document.getElementById("check");
let displayArea = document.getElementById("display");

function check(params) {
  let moneyInput = Number(document.getElementById("money").value);
  let rateInput = Number(document.getElementById("rate").value);
  let monthInput = Number(document.getElementById("month").value);

  let totalMoney;

  if (isNaN(moneyInput) || isNaN(rateInput) || isNaN(monthInput) || moneyInput <= 0 || rateInput <= 0 || monthInput <= 0) {
    displayArea.innerText = "Nhập sai rồi, nhập lại đi bạn ơi";
  } else {
    let r = rateInput / 100;

    totalMoney = moneyInput * Math.pow(1 + r, monthInput);

    displayArea.innerText = "Số tiền sau " + monthInput + " tháng là: " + totalMoney.toFixed(0) + " VND";
  }
}

checkButton.addEventListener("click", check);
