const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

const addbutton = document.getElementById("addbutton");
const subbutton = document.getElementById("subbutton");
const multiplybutton = document.getElementById("multiplybutton");
const dividebutton = document.getElementById("dividebutton");

const result = document.getElementById("result");
const resetbutton = document.getElementById("reset");

addbutton.addEventListener("click", function () {
  const firstnum = number1.value;
  const secondnum = number2.value;

  const numb1 = parseFloat(firstnum);
  const numb2 = parseFloat(secondnum);

  const rs = numb1 + numb2;
  result.textContent = rs;
});

subbutton.addEventListener("click", function () {
  const firstnum = number1.value;
  const secondnum = number2.value;

  const numb1 = parseFloat(firstnum);
  const numb2 = parseFloat(secondnum);

  const rs = numb1 - numb2;
  result.textContent = rs;
});

multiplybutton.addEventListener("click", function () {
  const firstnum = number1.value;
  const secondnum = number2.value;

  const numb1 = parseFloat(firstnum);
  const numb2 = parseFloat(secondnum);

  const rs = numb1 * numb2;
  result.textContent = rs;
});

dividebutton.addEventListener("click", function () {
  const firstnum = number1.value;
  const secondnum = number2.value;

  const numb1 = parseFloat(firstnum);
  const numb2 = parseFloat(secondnum);

  const rs = numb1 / numb2;
  result.textContent = rs;
});

resetbutton.addEventListener("click", function () {
  number1.value = "";
  number2.value = "";
  result.textContent = "Result:";
});

const hoverBox = document.getElementById("hover-box");

