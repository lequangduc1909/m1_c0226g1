function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function lietKeSoNguyenTo(arr) {
  let primes = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (isPrime(arr[i][j])) {
        primes.push(arr[i][j]);
        count++;
      }
    }
  }
  return { primes, count };
}
