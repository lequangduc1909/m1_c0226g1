let h = 5;
for (let i = 1; i <= h; i++) {
  let line = "";
  for (let j = 1; j <= h - i; j++) {
    line += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    line += "*";
  }
  console.log(line);
}
