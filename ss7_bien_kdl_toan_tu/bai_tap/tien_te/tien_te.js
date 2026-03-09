const amountInput = document.getElementById("moneyin");
const fromCurrencySelect = document.getElementById("currency_unit1");
const toCurrencySelect = document.getElementById("currency_unit2");
const convertButton = document.getElementById("convert_button");
const resultDisplay = document.getElementById("result");

const usdToVndRate = 25000;

convertButton.addEventListener("click", function () {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  let calculatedResult = 0;

  if (isNaN(amount) || amount < 0) {
    resultDisplay.innerHTML = "Please enter a valid positive number!";
    return;
  }

  if (fromCurrency === "VND" && toCurrency === "USD") {
    calculatedResult = amount / usdToVndRate;

    resultDisplay.innerHTML = `${amount.toLocaleString()} VND = ${calculatedResult.toFixed(
      2
    )} USD`;
  } else if (fromCurrency === "USD" && toCurrency === "VND") {
    calculatedResult = amount * usdToVndRate;

    resultDisplay.innerHTML = `${amount.toLocaleString()} USD = ${calculatedResult.toLocaleString()} VND`;
  } else {
    calculatedResult = amount;
    resultDisplay.innerHTML = `Result: ${calculatedResult.toLocaleString()} ${toCurrency}`;
  }
});
