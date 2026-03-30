let h = 5;
for (let i = 1; i <= h; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === h) {
      line += "* ";
    } else {
      line += "  ";
    }
  }
  console.log(line);
}
