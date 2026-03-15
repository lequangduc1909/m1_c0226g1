let button = document.getElementById("button");
button.addEventListener("click", playGame);

function playGame() {
  let max = Number(prompt("Số bạn muốn đoán trong khoảng lớn nhất là bao nhiêu?"));
  let randomNumber = Math.floor(Math.random() * max) + 1;

  let guess;
  let attempts = 5;

  while (attempts > 0) {
    guess = Number(prompt("Bạn đoán số bao nhiêu?"));

    if (guess === randomNumber) {
      alert("Chúc mừng! Bạn đoán đúng!");
      return;
    }

    attempts--;

    if (attempts === 0) {
      alert("Hết lượt! Số đúng là: " + randomNumber);
      return;
    }

    if (guess > randomNumber) {
      alert("Số bạn đoán lớn hơn. Bạn còn " + attempts + " lượt");
    }

    if (guess < randomNumber) {
      alert("Số bạn đoán nhỏ hơn. Bạn còn " + attempts + " lượt");
    }
  }
}
