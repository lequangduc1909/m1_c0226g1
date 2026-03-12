let button = document.getElementById("submit");
let hienthi = document.getElementById("hienthi");

function submit() {
  let soInput = Number(document.getElementById("number").value);
  let ketqua = "";

  for (let i = soInput; i < (soInput + 5); i++) {
    ketqua += i + " ";
  }

  hienthi.innerText = ketqua;
}

button.addEventListener("click", submit);
