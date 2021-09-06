// useful to deep copy a tree
const preorderTraverse = (node, array) => {
  // starting at the root, visit all the nodes
  // add to the array, go left first to the bottom, then right
  // go as deep as you can before coming back up
};

// useful to return sorted list from tree
const inorderTraverse = (node, array) => {
  // go left, add to the array, go right
};

// useful in delete operations
const postorderTraverse = (node, array) => {
  // root always last
  // go left, go right, add to the array (after visiting the last child)
};