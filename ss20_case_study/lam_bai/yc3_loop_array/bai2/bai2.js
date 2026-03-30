let a = [2, 4, 6, 8];
let b = [2, 7, 4, 5, 10, 11, 6, 8];

function missingValue(a, b) {
  let result = [];

  for (let j = 0; j < b.length; j++) {
    let found = false;

    for (let i = 0; i < a.length; i++) {
      if (b[j] === a[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(b[j]);
    }
  }

  return result;
}

function arrangeMintoMax(arrs) {
  let newArrs = [...arrs];
  for (let a = 0; a < newArrs.length; a++) {
    for (let b = a + 1; b < newArrs.length; b++) {
      if (newArrs[b] < newArrs[a]) {
        let temp = newArrs[a];
        newArrs[a] = newArrs[b];
        newArrs[b] = temp;
      }
    }
  }
  return newArrs;
}

function run() {
  let resultArrays = missingValue(a, b);
  let finalArrays = arrangeMintoMax(resultArrays);
  console.log(` [ ${finalArrays.join(", ")} ] `);
}

run();
