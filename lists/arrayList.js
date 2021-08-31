class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  get(index) {
    return this.data[index];
  }
  
  delete(index) {
    const target = this.data[index];
    delete this.data[index];

    // collapse remaining items
    this._collapseTo(index);
    return target;
  }

  getLength() {
    return this.length;
  }

  read() {
    return this.data;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length - 1; i++) {
      const insert = this.data[i + 1];
      this.data[i] = insert;
    }

     // trim end
     delete this.data[this.length - 1];
     this.length--;
  }

}