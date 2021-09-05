class AVLTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }
  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.height = 1;
  }

  add(value) {
    let current = this.root;
    // decide to go left or right

    // find the correct place to add
    // make sure to update height
    this.balance();
  }
  balance() {
    // ask if this node is out of balance -- check height 2 or more
      // if not out of balance, do nothing
      // if out of balance, need single or double?
        // if single -- call rotate on self
        // if double -- call rotate on child then self
  }
  rotateRR() {
    // if right child is heavy
    // rotate
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL() {
    // if left child is heavy
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }
  updateInNewLocation() {
    // calculate new height
  }
}