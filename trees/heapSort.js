const createMaxHeap = (array) => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};

const heapify = (array, index, heapSize) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  let largestValueIndex = index;

  if (heapSize > left && array[largestValueIndex] < array[left]) {
    largestValueIndex = left;
  }

  if (heapSize > right && array[largestValueIndex] < array[right]) {
    largestValueIndex = right;
  }

  if (largestValueIndex !== index) {
    swapPlace(index, largestValueIndex, array);
    heapify(array, largestValueIndex, heapSize);
  }
};