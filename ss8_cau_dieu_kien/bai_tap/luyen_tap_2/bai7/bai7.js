let submitButton = document.getElementById("submit");
let displayArea = document.getElementById("display");

function display() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);

  if (isNaN(a) || isNaN(b)) {
    displayArea.innerText = "Nhập số đàng hoàng đi!";
    return;
  }

  if (a === 0) {
    displayArea.innerText = "a phải khác 0 nha bạn ơi!!";
    return;
  }

  let preSqrt = -b / a;

  if (preSqrt > 0) {
    let x1 = (Math.sqrt(preSqrt)).toFixed(3);
    let x2 = (-Math.sqrt(preSqrt)).toFixed(3);

    displayArea.innerText = "x1 = " + x1 + " , x2 = " + x2;
  } else if (preSqrt === 0) {
    displayArea.innerText = "x = 0";
  } else {
    displayArea.innerText = "Phương trình vô nghiệm";
  }
}

submitButton.addEventListener("click", display);
