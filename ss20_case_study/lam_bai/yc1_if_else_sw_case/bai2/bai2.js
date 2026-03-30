function checkVowel(character) {
  let char = character.trim();
  if (char.length !== 1) {
    alert("Vui lòng nhập 1 kí tự");
  } else {
    switch (char) {
      case "a":
      case "i":
      case "e":
      case "o":
      case "u":
      case "A":
      case "I":
      case "E":
      case "O":
      case "U":
        alert("Kí tự bạn nhập vào là nguyên âm");
        break;

      default:
        if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
          alert("Kí tự bạn nhập vào phụ âm");
          return;
        }
        alert("Kí tự bạn nhập không phải chữ");
        return;
    }
  }
}

let character = prompt(`Check kí tự nguyên âm.
        Hãy nhập một kí tự bất kì trên bàn phím.`);
checkVowel(character);
