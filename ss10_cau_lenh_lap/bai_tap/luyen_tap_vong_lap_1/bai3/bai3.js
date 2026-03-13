const showButton = document.getElementById("showFib");
const result = document.getElementById("result");

function showFibonacci() {

    let a = 0;
    let b = 1;
    let fib = "";

    for (let i = 1; i <= 20; i++) {

        fib += a + " ";

        let next = a + b;
        a = b;
        b = next;
    }

    result.innerText = "20 số Fibonacci đầu tiên: " + fib;
}

showButton.addEventListener("click", showFibonacci);