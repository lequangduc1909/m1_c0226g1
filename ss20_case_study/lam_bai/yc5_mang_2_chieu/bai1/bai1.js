function tongSoChan(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 === 0) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}
