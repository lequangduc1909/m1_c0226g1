// let button = document.getElementById("button");
// let display = document.getElementById("display");

// function screen(params) {
//   let trinhBay = "";
//   for (let a = 1; a <= 10; a++) {
//     let result = a * 9;
//   }
//   display.innerText = a + " x 9 = " + result;
// }
// button.addEventListener("click", screen);

let button = document.getElementById("click");
let display = document.getElementById("display");

function screen() {

    let trinhBay = "";

    for (let a = 1; a <= 10; a++) {

        let result = a * 9;

        trinhBay += a + " x 9 = " + result + "<br>";
    }

    display.innerHTML = trinhBay;
}

button.addEventListener("click", screen);
