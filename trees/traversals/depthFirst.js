// useful to deep copy a tree
const preorderTraverse = (node, array) => {
  // starting at the root, visit all the nodes
  // add to the array, go left first to the bottom, then right
  // go as deep as you can before coming back up
  if (!node) return array;
  array.push(node.value);
  array = preorderTraverse(node.left, array);
  array = preorderTraverse(node.right, array);
  return array;
};

// useful to return sorted list from tree
const inorderTraverse = (node, array) => {
  // go left, add to the array, go right
  if (!node) return array;
  array = inorderTraverse(node.left, array);
  array.push(node.value);
  array = inorderTraverse(node.right, array);
  return array;
};

// useful in delete operations
const postorderTraverse = (node, array) => {
  // root always last
  // go left, go right, add to the array (after visiting the last child)
};