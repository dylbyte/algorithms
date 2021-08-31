class LinkedList {
  // code goes here
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // accepts value and add to end of the list
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else if (!this.tail) {
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }
    this.length++;
  }

  pop() {
    // handle empty list
    if (this.length < 1) {
      return void 0;
    }

    // starting at head, traverse the list to last node
    let node = this.head;
    const response = this.tail.value; // capture value to remove
    while (node.next) {
      // if the next node is the current tail (which we're removing)
      if (node.next === this.tail) {
        this.tail = node; // reassing tail to current node
        return node.next = null; // remove pointer to previous tail
      }
      // next node is not the tail, traverse to the next node
      node = node.next;
    }
    this.length--;
    return response;
  }

  get(index) {
    // handle empty list
    if (this.length < 1) {
      return void 0;
    }

    let i = 0;
    let node = this.head;
    while (node) {
      if (i === index) {
        return node;
      }
      node = node.next;
      i++;
    }
    return void 0;
  }

  delete(index) {
    // returns removed value
    if (this.length < 1) {
      return void 0;
    }

    let response;
    // handle delete head
    if (index === 0) {
      response = this.head.value;
      this.head = this.head.next;
      this.length--;
      return response;
    }

    let i = 1;
    let previous = this.head;
    let current = previous.next;
    while (current) {
      // traverse to index
      if (i === index) {
        response = current.value; // capture value of node being deleted
        previous.next = current.next; // remove pointer to deleted node
        this.length--;
        return response;
      }
      previous = current;
      current = current.next;
      i++;
    }
    return void 0;
  }
}

class Node {
  // code goes here
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}