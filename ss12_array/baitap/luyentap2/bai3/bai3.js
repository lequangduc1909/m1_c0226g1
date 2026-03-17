let arr = ['c','s','c','2','6','1','a','9'];

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= '0' && arr[i] <= '9') {
        count++;
    }
}

document.getElementById("display").innerHTML =
    "Có " + count + " ký tự số";