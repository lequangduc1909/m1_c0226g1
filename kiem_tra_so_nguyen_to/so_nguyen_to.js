let numberIn = document.getElementById("numberIn");
let checkBtn = document.getElementById("checkBtn");
let displayArea = document.getElementById("displayArea");
checkBtn.addEventListener("click", handleCheck);

// đại khái hàm isPrime kiểm tra số nguyên tố ko có trong JS, nên phải tự tạo, những
// hàm có sẵn như isNaN thì ko cần tự tạo
function isPrime(x) {
  if (x < 2) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function handleCheck() {
  let value = numberIn.value;
  if (value.trim() === "") {
    alert("Mời bạn nhập gì đó đi!");
    return;
    // return
  }

  let num = Number(value);
  if (isNaN(num) || !Number.isInteger(num)) {
    alert("Vui lòng nhập số nguyên");
    return;
  }

  if (isPrime(num)) {
    displayArea.innerHTML = num + " là số nguyên tố.";
  } else {
    displayArea.innerHTML = num + " ko phải số nguyên tố";
  }
}

