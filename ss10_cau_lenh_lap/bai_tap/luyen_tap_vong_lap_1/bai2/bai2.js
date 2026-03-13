const checkButton = document.getElementById("checkTemp");
const result = document.getElementById("result");

function checkTemperature() {

    let temperature = Number(prompt("Nhập nhiệt độ hiện tại:"));

    while (temperature > 100 || temperature < 20) {

        if (temperature > 100) {
            alert("Nhiệt độ quá cao! Hãy giảm nhiệt độ.");
        } 
        else if (temperature < 20) {
            alert("Nhiệt độ quá thấp! Hãy tăng nhiệt độ.");
        }

        temperature = Number(prompt("Nhập lại nhiệt độ:"));
    }

    result.innerText = "Nhiệt độ đã ổn định: " + temperature;
}

checkButton.addEventListener("click", checkTemperature);