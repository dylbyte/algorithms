const linearSearch = (id, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (id === arr[i].id) {
      return arr[i];
    }
  }
  return void 0;
}

const binarySearch = (id, arr) => {
  let min = 0;
  let max = arr.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = arr[index];

    if (element.id > id) {
      max = index - 1;
    } else if (element.id < id) {
      min = index + 1;
    } else {
      return element;
    }
  }

  return void 0;
}