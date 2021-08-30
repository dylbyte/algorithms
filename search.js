const linearSearch = (id, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (id === arr[i].id) {
      return arr[i];
    }
  }
  return void 0;
}