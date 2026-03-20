function findMin(x, y, z) {
  if (x < y) {
    if (x < z) {
      return x;
    } else {
      return z;
    }
  } else {
    if (y < z) {
      return y;
    } else {
      return z;
    }
  }
}

function runProgram() {
  let firstNum = prompt("Nhập số thứ nhất: ");
  let secondNum = prompt("Nhập số thứ hai: ");
  let thirdNum = prompt("Nhập số thứ ba: ");

  if (firstNum.trim() === "" || secondNum.trim() === "" || thirdNum.trim() === "") {
    alert("Không để trống bạn ơi!");
    return;
  }

  let firstNumber = Number(firstNum);
  let secondNumber = Number(secondNum);
  let thirdNumber = Number(thirdNum);

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber) || Number.isNaN(thirdNumber)) {
    alert("Nhập số đàng hoàng bạn ơi");
    return;
  }

  alert("Số nhỏ nhất là: " + findMin(firstNumber, secondNumber, thirdNumber));
}

runProgram();
