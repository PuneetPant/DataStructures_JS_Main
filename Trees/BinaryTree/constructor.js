class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Pair {
  constructor(node, state) {
    this.node = node;
    this.state = state;
  }
}

const constructor = () => {
  // let arr = [1, 2, 3, 4, 5, -1, 6, 7, -1, -1, -1, -1, 8];
  let arr = [50, 25, 12, -1, -1, 37, 30, -1, -1, -1, 75, 62, -1, 70, -1, -1, 87, - 1, -1];
  // let arr = [50 25 12 n n 37 30 n n n 75 62 n 70 n n 87 n n]
  // let arr = [50, 12, 25, -1, -1, 37, 30, -1, -1, -1, 75, 62, -1, 70, -1, -1, 87, -1, -1];
  let st = []; //stack
  let idx = 1;

  let root = new Node(arr[0], null, null);
  st.push(new Pair(root, 1));

  // REVISION REQUIRED
  while (st.length > 0) {
    let top = st[st.length - 1];
    if (top.state == 1) {
      if (arr[idx] != -1) {
        let lp = new Node(arr[idx]);
        top.node.left = lp;
        top.state++;
        st.push(new Pair(lp, 1));
      } else {
        top.node.left = null;
        top.state++;
      }
      idx++;
    } else if (top.state == 2) {
      if (arr[idx] != -1) {
        let rp = new Node(arr[idx]);
        top.node.right = rp;
        top.state++;
        st.push(new Pair(rp, 1));
      } else {
        top.node.right = null;
        top.state++;
      }
      idx++;
    }
    else {
      st.pop();
    }
  }
  return root;
}

const display = (node) => {
  if (node == null) {
    return;
  }
  console.log(node.data + ' ');
  display(node.left)
  display(node.right)
}

const optimizedDisplay = (node) => {
  if (node.left == null && node.right == null) {
    console.log(node.data + ' ');
    return;
  }
  console.log(node.data + ' ');
  if (node.left) {
    display(node.left)
  }
  if (node.right) {
    display(node.right)
  }
}

const size = (node) => {

  if (node == null) {
    return 0;
  }

  let ls = size(node.left);
  let rs = size(node.right);

  return ls + rs + 1;
}

const sum = (node) => {
  if (node == null) {
    return 0;
  }
  let leftSum = sum(node.left);
  let rightSum = sum(node.right);

  return leftSum + rightSum + node.data;
}

const max = (node) => {
  if (node == null) {
    return -1;
  }

  let leftMax = max(node.left);
  let rightMax = max(node.right);

  return Math.max(node.data, Math.max(leftMax, rightMax));
}

const height = (node) => {
  if (node == null) {
    return -1;
  }

  let leftHeight = height(node.left);
  let rightHeight = height(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

const levelOrderTraversal = (node) => {
  let queue = [];
  queue.push(node);

  while (queue.length > 0) {
    //remove
    let val = queue.shift();
    //print
    console.log(val.data);
    //add children at the end
    if (val.left != null) {
      queue.push(val.left);
    }
    if (val.right != null) {
      queue.push(val.right);
    }
  }
}

const IterativePrePostInOrderTraversals = (root) => {
  let stack = [];

  stack.push(new Pair(root, 1));
  let preOrder = [];
  let postOrder = [];
  let inOrder = [];

  while (stack.length > 0) {
    let topNode = stack[stack.length - 1];

    if (topNode.state == 1) {

      preOrder.push(topNode.node.data);
      topNode.state++;
      topNode.node.left ? stack.push(new Pair(topNode.node.left, 1)) : ''

    } else if (topNode.state == 2) {

      postOrder.push(topNode.node.data);
      topNode.state++;
      topNode.node.right ? stack.push(new Pair(topNode.node.right, 1)) : ''

    } else {

      inOrder.push(topNode.node.data);
      stack.pop();

    }
  }
}

const find = (node, value) => {
  if (node == null) {
    return false;
  }

  let leftFind = find(node.left, value);
  let rightFind = find(node.right, value);

  let flag = node.data == value;

  return flag || leftFind || rightFind;
}


const optimizedFind = (node, value) => {
  if (node == null) {
    return false;
  }
  if (node.data == value) {
    return true;
  }

  let leftFind = find(node.left, value);
  if (leftFind) {
    return true;
  }
  let rightFind = find(node.right, value);
  if (rightFind) {
    return true;
  }

  return false;
}

const nodeToRootPath = (node, value) => {
  let ans = [];

  const nodeToRootPathHelper = (node, value) => {
    if (node == null) {
      return false;
    }
    if (node.data == value) {
      ans.push(node.data);
      return true;
    }

    let leftFind = nodeToRootPathHelper(node.left, value);
    if (leftFind) {
      ans.push(node.data)
      return true;
    }

    let rightFind = nodeToRootPathHelper(node.right, value);
    if (rightFind) {
      ans.push(node.data);
      return true;
    }
    return false;
  }

  nodeToRootPathHelper(node, value);
  return ans;
}

const printKLevelsDownIterative = (node, k) => {
  class Pair {
    constructor(node, level) {
      this.node = node;
      this.level = level;
    }
  }
  let queue = [];
  let counter = 0;

  queue.push(new Pair(node, 0));

  while (queue.length > 0) {
    let topPair = queue.shift();
    counter = topPair.level;

    if (topPair.level == k) {
      console.log(topPair.node.data)
    }

    if (topPair.node.left != null) {
      queue.push(new Pair(topPair.node.left, topPair.level + 1));
    }
    if (topPair.node.right != null) {
      queue.push(new Pair(topPair.node.right, topPair.level + 1))
    }
  }
}

const printKLevelsDownRecursive = (node, k) => {
  if (node == null) {
    return;
  }
  if (k == 0) {
    console.log(node.data);
  }

  printKLevelsDownRecursive(node.left, k - 1);
  printKLevelsDownRecursive(node.right, k - 1);
}

const printRootToLeafPath = (node) => {
  let str = '';

  const printPathHelper = (node, str) => {
    if (node.left == null && node.right == null) {
      console.log(str + " " + node.data);
      return
    }
    if (node.left != null) {
      printPathHelper(node.left, str + " " + node.data)
    }
    if (node.right != null) {
      printPathHelper(node.right, str + " " + node.data);
    }
  }
  printPathHelper(node, str);
}

const leftClonedTree = (node) => {
  if (node == null) {
    return
  }
  leftClonedTree(node.left);
  let newNode = new Node(node.data);
  let prev = node.left;
  node.left = newNode;
  newNode.left = prev;
  leftClonedTree(node.right);
}

const transfromFromLeftClonedTree = (node) => {
  if (node == null) {
    return null
  }

  let lcr = transfromFromLeftClonedTree(node.left.left);
  node.left = lcr;
  let rcr = transfromFromLeftClonedTree(node.right);

  return node;

}

const printSingleChildNodes = (node) => {
  if (node == null) {
    return false;
  }

  let leftFlag = printSingleChildNodes(node.left);
  let rightFlag = printSingleChildNodes(node.right);

  if (leftFlag == false && rightFlag == true) {
    console.log(node.right.data);
  }
  if (leftFlag == true && rightFlag == false) {
    console.log(node.left.data);
  }
  return true;
}

const removeLeaves = (node) => {
  if (node == null) {
    return null;
  }
  if (node.left == null && node.right == null) {
    return null
  }

  node.left = removeLeaves(node.left);
  node.right = removeLeaves(node.right);

  return node;
}

const diameter = (node) => {
  if (node == null) {
    return 0;
  }

  let ld = diameter(node.left);
  let rd = diameter(node.right);

  let lh = height(node.left);
  let rh = height(node.right);

  return Math.max(ld, Math.max(rd, lh + rh + 2));
}

const tilt = (root) => {
  let sum = 0;
  const tiltHelper = (node) => {
    if (node == null) {
      return 0;
    }

    let leftData = tiltHelper(node.left);
    let rightData = tiltHelper(node.right);

    console.log(leftData, rightData, Math.abs(leftData - rightData));
    sum += Math.abs(leftData - rightData);

    return node.data + leftData + rightData;
  }
  tiltHelper(root);
  return sum;
}

const isBst = (root) => {
  class Pair {
    constructor(flag, min, max) {
      this.flag = flag;
      this.min = min;
      this.max = max;
    }
  }
  const isBstHelper = (node) => {
    if (node == null) {
      return new Pair(true, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    }

    let lp = isBstHelper(node.left);
    let rp = isBstHelper(node.right);

    let flag = lp.flag && rp.flag && (node.data > lp.max && node.data < rp.min);
    let min = Math.min(node.data, Math.min(lp.min, rp.min));
    let max = Math.max(node.data, Math.max(lp.max, rp.max));

    let mp = new Pair(flag, min, max);
    return mp
  }

  const ans = isBstHelper(root);
  console.log(ans)
  return ans.flag;
}

const isBalanced = (root) => {
  class Pair {
    constructor(flag, height) {
      this.flag = flag;
      this.height = height;
    }
  }

  const isBalancedHelper = (node) => {
    if (node == null) {
      return new Pair(true, 0);
    }

    let lp = isBalancedHelper(node.left);
    let rp = isBalancedHelper(node.right);

    let flag = lp.flag && rp.flag && (Math.abs(lp.height - rp.height) <= 1);
    let height = Math.max(lp.height, rp.height) + 1;
    let mp = new Pair(flag, height);
    return mp;
  }

  const ans = isBalancedHelper(root);
  return ans.flag;
}

const main = () => {
  const root = constructor();
  // display(root);
  // optimizedDisplay(root);

  // const sizeAns = size(root);
  // console.log('sizeAns: ',sizeAns);

  // const sumAns = sum(root);
  // console.log(sumAns);

  // const maxAns = max(root);
  // console.log(maxAns);

  // const heightAns = height(root);
  // console.log(heightAns);

  // levelOrderTraversal(root);

  // IterativePrePostInOrderTraversals(root);

  // let value = 47;
  // let found = find(root, value);
  // console.log('found: ',found);

  // let value = 37;
  // let found = optimizedFind(root, value);
  // console.log('found: ', found);

  // let value = 37;
  // let nodeToRootPathAns = nodeToRootPath(root, value);
  // console.log('nodeToRootPathAns: ', nodeToRootPathAns);

  // let k = 2;
  // printKLevelsDownIterative(root, k);

  // let k = 2;
  // printKLevelsDownRecursive(root, k);

  // printRootToLeafPath(root);

  // display(root);
  // leftClonedTree(root);
  // console.log('-----------')
  // display(root);

  // transfromFromLeftClonedTree(root);
  // console.log('0------------0')
  // display(root);


  // printSingleChildNodes(root);

  // removeLeaves(root);
  // display(root);

  // const diameterAns = diameter(root);
  // console.log('diameterAns: ',diameterAns);

  // const tiltAns = tilt(root);
  // console.log(tiltAns);

  // const isBstAns = isBst(root);
  // console.log('isBstAns: ', isBstAns);

  // const isBalancedAns = isBalanced(root);
  // console.log(isBalancedAns)

  display(root)


}

main()