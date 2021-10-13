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

  delete(value) {
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

module.exports = Set;