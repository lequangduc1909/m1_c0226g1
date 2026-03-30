let salary = document.getElementById("salary");
let checkBtn = document.getElementById("check");
let alertZone = document.getElementById("alert");
let displayZone = document.getElementById("display");

//check so nhap vao
function check(input) {
  let value = input.trim();
  if (value === "") {
    alertZone.innerHTML = "Vui lòng không để trống";
    return;
  }
  let salaryIn = Number(input);
  if (isNaN(salaryIn) || salaryIn <= 0) {
    alertZone.innerHTML = "Vui lòng nhập số lớn hơn 0";
    return;
  }  
  return salaryIn;
}
//tinh thue
function countTax(input) {
  let tax;
  switch (true) {
    case input > 15000000:
      tax = input * 0.2;
      break;
    case input > 7000000:
      tax = input * 0.1;
      break;
    default:
      tax = input * 0.05;
      break;
  }
  return tax;
}
// tinh luong
function countNetsalary(money,tax) {
  let moneyOut = money - tax;
  return moneyOut;
}

function runProgram() {
  let value = salary.value;
  let salaryIn = check(value);
  if (salaryIn === undefined) {
    return;
  }
  let tax = countTax(salaryIn);
  let netSalaxy = countNetsalary(salaryIn, tax);

  displayZone.innerHTML = ` Thuế là: ${tax.toFixed(0)}đ <br>
  Lương ròng: ${netSalaxy.toFixed(0)}đ `;
  alertZone.innerHTML = "";
}
checkBtn.addEventListener("click", runProgram);
