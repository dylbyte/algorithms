const bubbleSort = (arr) => {
  console.log(`Bubble sorting [${arr}]...`);
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      let current = arr[i];
      let next = arr[i+1];
      if (next < current) {
        arr[i+1] = current;
        arr[i] = next;
        swapped = true;
      }
    }
  }
  while (swapped);
  return arr;
}

// console.log(bubbleSort([1, 5, 4, 2, 3]));
// console.log(bubbleSort([5, 4, 3, 2, 1]));
