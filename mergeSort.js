const mergeSort = (arr) => {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // break into two smaller arrays
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // return the merge of left and right
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const mergedArray = [];
  
  while (left.length && right.length) {
    // compare left to right
    if (left[0] <= right[0]) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }

  return mergedArray.concat(left, right);
}