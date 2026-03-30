let numerators = [5, 3, 7, 12, 4];
let denominators = [3, 7, 1, 3, 8];

function findmax(a, b) {
  let max = a[0] / b[0];
  let maxIndex = 0;
  for (let i = 1; i < a.length; i++) {
    if (a[i] / b[i] > max) {
      max = a[i] / b[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

console.log(findmax(numerators, denominators));
