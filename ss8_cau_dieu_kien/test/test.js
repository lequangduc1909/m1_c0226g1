// let aIn = document.getElementById("canha");
// let bIn = document.getElementById("canhb");
// let cIn = document.getElementById("canhc");
// let kiemTra = document.getElementById("check");

// function xemthu() {
//   let a = Number(aIn.value);
//   let b = Number(bIn.value);
//   let c = Number(cIn.value);

//   let isBaCanh = a > 0 && b > 0 && c > 0;
//   let isTamGiac = a + b > c || a + c > b || b + c > a;
//   let isTamGiacVuong = a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b;

//   if (isBaCanh && isTamGiac) {
//     if (isTamGiacVuong) {
//       alert("Đây là 3 cạnh tam giác vuông");
//     } else {
//       alert("Đây là 3 cạnh tam giác thường");
//     }
//   } else {
//     alert("Nhập sai rồi bạn ơi, lai đi");
//   }
// }
// kiemTra.addEventListener("click", xemthu);

let ngayIn = Number(prompt("Nhập ngày:"));
