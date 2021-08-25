const nestedAdd = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}