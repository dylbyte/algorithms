const fibonacci = (n) => {
  // base case
  if (n === 2 || n === 1) {
    return 1;
  } else if (n <= 0) {
    return 0;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

const iterativeFibonacci = (n) => {
  let sequence = [0, 1];
  for (let i = 2; i < n+1; i++) {
    sequence.push(sequence[i-1] + sequence[i-2]);
  }
  return sequence[n];
}
