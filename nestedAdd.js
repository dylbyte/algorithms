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

console.log(nestedAdd([1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 13, [14]]]));
