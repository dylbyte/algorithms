class Set {
  constructor() {
    this.items = {};
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    let values = [];
    for (let i = 0, keys = Object.keys(this.items); i < keys.length; i++) {
      values.push(this.items[keys[i]]);
    }
    return values;
  }

}

const set = new Set();
set.add(1);
console.log(set.values());
console.log('Set has the value 1? ', set.has(1));
console.log('Set has size: ', set.size());

set.add(2);
console.log(set.values());
console.log('Set has the value 2? ', set.has(2));
console.log('Set has size: ', set.size());

set.remove(1);
console.log(set.values());

set.remove(2);
console.log(set.values());

module.exports = Set;