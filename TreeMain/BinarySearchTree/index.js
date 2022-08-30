
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

var sortedArrayToBST = function (nums) {
  const construct = (arr, lo, hi) => {
    if (lo == hi) {
      return new TreeNode(arr[lo]);
    }
    if (lo > hi) {
      return null;
    }


    let mid = Math.floor((lo + hi) / 2);
    let node = new TreeNode(arr[mid]);

    node.left = construct(arr, lo, mid - 1);
    node.right = construct(arr, mid + 1, hi);

    return node;

  }

  let root = construct(nums, 0, nums.length - 1);
  return root;
};

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

  let lc = size(node.left);
  let rc = size(node.right);

  return lc + rc + 1;
}

const sum = (node) => {
  if (node == null) {
    return 0;
  }

  let lc = sum(node.left);
  let rc = sum(node.right);

  return lc + rc + node.data;
}

const max = (node) => {
  let ans;
  if (node.right != null) {
    ans = max(node.right);
  } else {
    return node.data;
  }

  return ans;

}

const min = (node) => {
  let ans;
  if (node.left != null) {
    ans = min(node.left)
  } else {
    return node.data
  }
  return ans;
}

const find = (node, value) => {
  let ans;
  if (node == null) {
    return false;
  }

  if (value > node.data) {
    ans = find(node.right, value)
  } else if (value < node.data) {
    ans = find(node.left, value)
  } else {
    ans = true
  }

  return ans;
}

const addNodeBST = (node, value) => {
  if (node == null) {
    return new TreeNode(value);
  }

  if (value > node.data) {
    node.right = addNodeBST(node.right, value);
  } else if (value < node.data) {
    node.left = addNodeBST(node.left, value);
  }

  return node;
}

const nodeToRootPath = (node, toFindNode) => {
  let ans = [];

  const nodeToRootPathHelper = (node, toFindNode) => {
    if (node == null) {
      return;
    }
    if (toFindNode.val > node.val) {
      ans.push(node);
      nodeToRootPathHelper(node.right, toFindNode)
    } else if (toFindNode.val < node.val) {
      ans.push(node);
      nodeToRootPathHelper(node.left, toFindNode)
    } else {
      ans.push(node)
    }
  }

  nodeToRootPathHelper(node, toFindNode);
  return ans;
}

var lowestCommonAncestor = function (root, p, q) {
  let arr1 = nodeToRootPath(root, p);
  let arr2 = nodeToRootPath(root, q);
  let i = 0;
  let j = 0;
  let ansNode = null;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] == arr2[j]) {
      ansNode = arr1[i];
    } else {
      break;
    }
    i++;
    j++;
  }
  return ansNode;
};

var lowestCommonAncestorOptimal = function (node, p, q) {

  if (p.val < node.val && q.val < node.val) {
    return lowestCommonAncestorOptimal(node.left, p, q)
  } else if (p.val > node.val && q.val > node.val) {
    return lowestCommonAncestorOptimal(node.right, p, q)
  } else {
    return node;
  }
};

// More like print in range
var rangeSumBST = function (node, low, high) {
  if (node == null) {
    return 0;
  }
  let ans = 0;
  if (node.val >= low && node.val <= high) {
    ans += rangeSumBST(node.left, low, high);
    ans += rangeSumBST(node.right, low, high);
    // Only place where node will be included as we are making both right and left calls.
    ans += node.val
  } else if (node.val < low) {
    ans += rangeSumBST(node.right, low, high);
  } else if (node.val > high) {
    ans += rangeSumBST(node.left, low, high);
  }
  return ans;
};

const targetSumPairBST = (root, sum) => {
  let map = new Map();

  const targetSumPairBSTHelper = (node) => {
    if (node == null) {
      return
    }

    if (!map.has(node.data)) {
      if (map.has(sum - node.data)) {
        console.log(sum - node.data, node.data)
      } else {
        map.set(node.data, true);
      }
    }

    targetSumPairBSTHelper(node.left)
    targetSumPairBSTHelper(node.right)
  }

  targetSumPairBSTHelper(root)

}


const main = () => {
  let arr = [12, 25, 37, 50, 62, 75, 87];
  let root = sortedArrayToBST(arr, 0, arr.length - 1);
  // optimizedDisplay(root);
  // console.log(size(root));
  // console.log(sum(root))
  // console.log(max(root))
  // console.log(min(root))
  // console.log(find(root, 61))
  // addNodeBST(root, 43);
  // optimizedDisplay(root)
  targetSumPairBST(root, 100)
}

main()