const insertionSort = (arr) => {
  console.log(`Insertion sorting [${arr}]...`);
  for (let i = 1; i < arr.length; i++) {
    // first element of our unsorted array
    // and the number we are inserting
    let numToInsert = arr[i];

    // position to check
    // beginning at the last index of our sorted array
    let j = i - 1;

    while ((j >= 0) && numToInsert < arr[j]) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = numToInsert;
  }
  return arr;
}
