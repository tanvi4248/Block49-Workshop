// 1)
class Node {
  constructor(v) {
    this.data = v;
    this.left = null;
    this.right = null;
  }
}
function printInorder(node) {
  if (node === null) {
    return;
  }
  printInorder(node.left);
  console.log(node.data);
  printInorder(node.right);
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Inorder traversal of binary tree is: ");
printInorder(root);

// 2)
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (p?.val !== q?.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 3)
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function totalNodes(root) {
  if (root === null) {
    return 0;
  }

  let l = totalNodes(root.left);
  let r = totalNodes(root.right);

  return 1 + l + r;
}
function newNode(data) {
  return new Node(data);
}

let root = newNode(10);
root.left = newNode(11);
root.right = newNode(12);
root.left.left = newNode(13);
root.left.right = newNode(14);
root.right.left = newNode(15);
root.right.right = newNode(16);
document.write(totalNodes(root));

// 4)

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function searchBottomLeftValue(root) {
  let queue = [root];
  let leftmostValue = root.val;

  while (queue.length > 0) {
    const levelSize = queue.length;
    leftmostValue = queue[0].val; // Update leftmostValue for each level

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return leftmostValue;
}

// Test the function
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(searchBottomLeftValue(root)); // Output should be 6
