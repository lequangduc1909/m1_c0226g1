function isDigit(char) {
  return char >= "0" && char <= "9";
}

let input = prompt("Nhập 1 ký tự:");
if (isDigit(input)) {
  alert("Là ký tự số");
} else {
  alert("Không phải ký tự số");
}

