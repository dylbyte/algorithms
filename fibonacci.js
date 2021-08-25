const fibonacci = (n) => {
  // base case
  if (n === 2 || n === 1) {
    return 1;
  } else if (n <= 0) {
    return 0;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}