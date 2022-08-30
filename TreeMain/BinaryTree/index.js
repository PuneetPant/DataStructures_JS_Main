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

const constructor = (arr) => {
  let st = [];
  let root = new Node(arr[0]);
  st.push(new Pair(root, 1));
  let idx = 1;

  while (st.length > 0) {
    let top = st[st.length - 1];
    if (top.state == 1) {
      if (arr[idx] != -1) {
        let newNode = new Node(arr[idx]);
        top.node.left = newNode;
        top.state++;
        st.push(new Pair(newNode, 1))
      } else {
        top.node.left = null;
        top.state++;
      }
      idx++;
    } else if (top.state == 2) {
      if (arr[idx] != -1) {
        let newNode = new Node(arr[idx]);
        top.node.right = newNode;
        top.state++;
        st.push(new Pair(newNode, 1));
      } else {
        top.node.right = null;
        top.state++;
      }
      idx++
    } else {
      st.pop()
    }
  }
  return root;
}

const display = (node) => {
  if (node == null) {
    return;
  }
  console.log(node.data);
  display(node.left);
  display(node.right)
}

const optimizedDisplay = (node) => {
  if (node == null) {
    return;
  }

  let str = "";
  str += node.left == null ? "." : node.left.data + "";
  str += " <- " + node.data + " -> ";
  str += node.right == null ? "." : node.right.data + "";
  console.log(str);

  optimizedDisplay(node.left);
  optimizedDisplay(node.right);
}

const size = (node) => {
  if (node == null) {
    return 0;
  }
  let leftSide = size(node.left);
  let rightSide = size(node.right);

  return leftSide + rightSide + 1;
}

const sum = (node) => {
  if (node == null) {
    return 0
  }

  let leftSum = sum(node.left);
  let rightSum = sum(node.right);

  return node.data + leftSum + rightSum;
}

const max = (node) => {
  if (node == null) {
    return Number.MIN_SAFE_INTEGER;
  }

  let leftMax = max(node.left);
  let rightMax = max(node.right);

  return Math.max(leftMax, Math.max(rightMax, node.data))
}

const height = (node) => {
  if (node == null) {
    return -1;
  }

  let leftHeight = height(node.left);
  let rightHeight = height(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

var levelOrder = function (node) {
  let queue = [];
  node != null && queue.push(node);
  let ans = [];
  while (queue.length > 0) {

    let count = queue.length
    let sudoArray = [];
    for (let i = 0; i < count; i++) {
      //remove
      let top = queue.shift();
      console.log(top.val)
      sudoArray.push(top.val)

      //add children at the end
      if (top.left != null) {
        queue.push(top.left);
      }
      if (top.right != null) {
        queue.push(top.right);
      }
    }
    ans.push(sudoArray)
  }
  console.log(ans);
  return ans
};

const find = (node, data) => {
  if (node == null) {
    return false;
  }
  console.log(node.data)
  if (node.data == data) {
    return true;
  }

  let left = find(node.left, data);
  let right = find(node.right, data);

  return left || right;
}

const optimizedFind = (node, value) => {
  if (node == null) {
    return false;
  }
  console.log(node.data)
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

const nodeToRootPath = (node, data) => {
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

  nodeToRootPathHelper(node, data);
  return ans;

}

var iterativePreorderTraversal = function (root) {
  class Pair {
    constructor(node, state) {
      this.node = node;
      this.state = state;
    }
  }
  let ans = [];
  let st = []; // stack
  root != null && st.push(new Pair(root, 1));

  while (st.length > 0) {
    let top = st[st.length - 1];

    if (top.state == 1) {
      ans.push(top.node.val);
      top.state++;
      if (top.node.left != null) {
        st.push(new Pair(top.node.left, 1))
      }
    } else if (top.state == 2) {
      top.state++;
      if (top.node.right != null) {
        st.push(new Pair(top.node.right, 1))
      }
    } else {
      st.pop();
    }
  }
  return ans;
};



var iterativePostorderTraversal = function (root) {
  class Pair {
    constructor(node, state) {
      this.node = node;
      this.state = state;
    }
  }
  let ans = [];
  let st = []; // stack
  root != null && st.push(new Pair(root, 1));

  while (st.length > 0) {
    let top = st[st.length - 1];

    if (top.state == 1) {

      top.state++;
      if (top.node.left != null) {
        st.push(new Pair(top.node.left, 1))
      }
    } else if (top.state == 2) {
      top.state++;
      if (top.node.right != null) {
        st.push(new Pair(top.node.right, 1))
      }
    } else {
      ans.push(top.node.val);
      st.pop();
    }
  }
  return ans;
};

const printKLevelsDown = (node, k) => {
  if (node == null || k < 0) {
    return
  }
  if (k == 0) {
    console.log(node.data)
  }
  printKLevelsDown(node.left, k - 1)
  printKLevelsDown(node.right, k - 1)
}

var pathSum = function (root, targetSum) {
  let ans = [];

  const pathSumHelper = (node, targetSum, sumSoFar, arr) => {
    if (node == null) {
      return;
    }

    if (node.left == null && node.right == null) {
      if (sumSoFar + node.val == targetSum) {
        let temp = arr.split(',');
        temp.push(node.val)
        temp.shift();
        console.log(temp)
        ans.push(temp)
      }
      return;
    }
    pathSumHelper(node.left, targetSum, sumSoFar + node.val, arr + "," + node.val)
    pathSumHelper(node.right, targetSum, sumSoFar + node.val, arr + "," + node.val)
  }

  pathSumHelper(root, targetSum, 0, "");
  return ans;
};

const leftClonedTree = (node) => {
  if (node == null) {
    return;
  }

  leftClonedTree(node.left);
  leftClonedTree(node.right);

  let temp = node.left;
  let newNode = new Node(node.data);
  newNode.left = temp;
  node.left = newNode;
}

const transformFromLeftClonedTree = (node) => {
  if (node == null) {
    return;
  }

  if (node.left != null) {
    node.left = node.left.left;
  }
  transformFromLeftClonedTree(node.left);
  transformFromLeftClonedTree(node.right)
}

const printSingleChildNodes = (root) => {
  let ans = [];
  const printSingleChildNodesHelper = (node) => {
    if (node == null) {
      return 0;
    }

    let leftVal = printSingleChildNodesHelper(node.left);
    let rightVal = printSingleChildNodesHelper(node.right);

    if (leftVal == 1 && rightVal == 0) {
      ans.push(node.left.data)
    } else if (leftVal == 0 && rightVal == 1) {
      ans.push(node.right.data)
    }

    return 1;
  }
  printSingleChildNodesHelper(root);
  return ans;
}

const removeLeaves = (node) => {
  if (node == null) {
    return 0;
  }

  let leftVal = removeLeaves(node.left);
  let rightVal = removeLeaves(node.right);

  if (leftVal == 1) {
    node.left = null;
  }
  if (rightVal == 1) {
    node.right = null;
  }

  return leftVal + rightVal + 1;
}

var findTilt = function (node) {
  let ans = 0;
  const findTiltHelper = (node) => {
    if (node == null) {
      return 0;
    }
    let leftVal = findTiltHelper(node.left);
    let rightVal = findTiltHelper(node.right);

    let temp = node.val + leftVal + rightVal;
    ans += Math.abs(leftVal - rightVal)
    node.val = Math.abs(leftVal - rightVal);
    return temp;
  }
  findTiltHelper(node);
  return ans;
};

var isValidBST = function (root) {
  class Pair {
    constructor(flag, min, max) {
      this.flag = flag;
      this.min = min;
      this.max = max;
    }
  }

  const isValidBSTHelper = (node) => {
    if (node == null) {
      return new Pair(true, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    }

    let lp = isValidBSTHelper(node.left);
    let rp = isValidBSTHelper(node.right);

    let flag = lp.flag && rp.flag && (node.val > lp.max && node.val < rp.min);
    let min = Math.min(node.val, Math.min(lp.min, rp.min));
    let max = Math.max(node.val, Math.max(lp.max, rp.max));

    let mp = new Pair(flag, min, max);
    return mp;
  }

  let ans = isValidBSTHelper(root);
  return ans.flag;
};
var isBalanced = function (root) {
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

    let flag = lp.flag && rp.flag && !!(Math.abs(lp.height - rp.height) <= 1);
    let height = Math.max(lp.height, rp.height) + 1;

    return new Pair(flag, height);
  }

  let ans = isBalancedHelper(root)
  return ans.flag
};


const main = () => {
  let arr = [50, 25, 12, -1, -1, 37, 30, -1, -1, -1, 75, 62, -1, 70, -1, -1, 87, - 1, -1];
  const root = constructor(arr);
  // display(root);
  // console.log(size(root))
  // console.log(sum(root))
  // console.log(max(root))
  // console.log(height(root));
  // console.log(optimizedFind(root, 25))
  // leftClonedTree(root);
  // optimizedDisplay(root);
  // transformFromLeftClonedTree(root);
  // optimizedDisplay(root)
  // console.log(printSingleChildNodes(root))
  optimizedDisplay(root);
  removeLeaves(root);
  optimizedDisplay(root)
}

main();