class ArrayList {
  constructor() {
    this.size = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.size] = value;
    this.size++;
  }

  pop() {
    const last = this.data[this.size - 1];
    this.delete(this.size - 1);
    return last;
  }

  get(index) {
    return this.data[index];
  }
  
  delete(index) {
    const target = this.data[index];
    delete this.data[index];

    // collapse remaining
    for (let i = index; i < this.size - 1; i++) {
      const insert = this.data[i + 1];
      this.data[i] = insert;
    }
    // trim end
    delete this.data[this.size - 1];
    this.size--;
    return target;
  }

  length() {
    return this.size;
  }

  read() {
    return this.data;
  }

}
