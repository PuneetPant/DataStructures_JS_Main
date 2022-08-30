class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const constructorBST = (arr, lo, hi) => {
  if (lo > hi) {
    return null;
  }

  let mid = (lo + hi) / 2;
  let data = arr[mid];

  let lc = constructorBST(arr, lo, mid - 1);
  let rc = constructorBST(arr, mid + 1, hi);

  let node = new Node(data, lc, rc);
  return node

}

const displayBST = (node) => {
  if (node == null) {
    return;
  }
  let leftData = node.left != null ? node.left.data : '';
  let rightData = node.right != null ? node.right.data : '';
  console.log(leftData + '<-' + node.data + '->' + rightData);
  displayBST(node.left)
  displayBST(node.right)
}

const sizeBST = (node) => {
  if (node == null) {
    return 0;
  }

  let leftSize = sizeBST(node.left);
  let rightSize = sizeBST(node.right);

  return leftSize + rightSize + 1;
}

const sumBST = (node) => {
  if (node == null) {
    return 0;
  }

  let leftsum = sumBST(node.left);
  let rightsum = sumBST(node.right);

  return leftsum + rightsum + node.data;
}

const maxBST = (node) => {
  let ans;
  if (node.right != null) {
    ans = maxBST(node.right);
  } else {
    return node.data;
  }

  return ans;
}

const find = (node, value) => {
  if (node == null) {
    return false
  }

  if (node.data > value) {
    return findBST(node.left, value);
  } else if (node.data < value) {
    return findBST(node.right, value)
  } else {
    return true
  }
}

const addNodeBST = (node, value) => {
  if (node == null) {
    return new Node(value, null, null);
  }

  if (node.data > value) {
    node.left = addNodeBST(node.left, value)
  } else if (node.data < value) {
    node.right = addNodeBST(node.right, value)
  } else {
    // nothing to do
  }

  return node;
}

const findLeftMax = (node) => {
  while (node.right != null) {
    node = node.right;
  }
  return node.data;
}

const removeNodeBST = (node, value) => {

  if (node.data > value) {
    node.left = removeNodeBST(node.left, value);
  } else if (node.data < value) {
    node.right = removeNodeBST(node.right, value);
  } else {
    // removal of node with 0 children
    if (node.left == null && node.right == null) {
      return null;
    } else if (node.left != null && node.right == null || node.left == null && node.right != null) {
      // with one child
      return node.left != null ? node.left : node.right;
    } else {
      // node with 2 children
      let getLeftMax = findLeftMax(node.left);
      node.data = getLeftMax;
      node.left = removeNodeBST(node.left, getLeftMax);
    }
  }

  return node;
}

const replaceWithSumOfLarger = (root) => {
  let sumSoFar = 0;

  const replaceWithSumOfLargerHelper = (node) => {
    if (node == null) {
      return;
    }
    replaceWithSumOfLargerHelper(node.right);
    let temp = sumSoFar;
    sumSoFar += node.data
    node.data = temp;
    replaceWithSumOfLargerHelper(node.left);
  }

  replaceWithSumOfLargerHelper(root)
}

const lowestCommonAncestor = (node, range1, range2) => {
  if (node.data > range1 && node.data > range2) {
    return lowestCommonAncestor(node.left, range1, range2);
  } else if (node.data < range1 && node.data < range2) {
    return lowestCommonAncestor(node.right, range1, range2);
  } else {
    return node.data;
  }
}

const printInRange = (node, range1, range2) => {
  if (node == null) {
    return;
  }
  if (node.data >= range1 && node.data <= range2) {
    printInRange(node.left, range1, range2);
    console.log(node.data);
    printInRange(node.right, range1, range2);
  } else if (node.data < range1) {
    printInRange(node.right, range1, range2);
  } else {
    printInRange(node.left, range1, range2);
  }
}

const targetSumPairBST = (node, target) => {
  let map = {}
  const targetSumPairBSTHelper = (node, target) => {
    if (node == null) {
      return;
    }
    if (Object.values(map).includes(node.data)) {
      console.log(target - node.data, node.data);
    } else {
      map[node.data] = target - node.data;
    }
    targetSumPairBSTHelper(node.left, target);
    targetSumPairBSTHelper(node.right, target);
  }

  targetSumPairBSTHelper(node, target);
  console.log('map: ',map);

}

const main = () => {
  let arr = [12, 25, 37, 50, 62, 75, 87];
  let root = constructorBST(arr, 0, arr.length - 1);
  // displayBST(root);
  // const size = sizeBST(root);
  // console.log('size: ', size);

  // const sum = sumBST(root);
  // console.log('sum: ', sum);

  // let max = maxBST(root);
  // console.log('max : ', max);

  // min works in the similar way as max

  // const findFlag = findBST(root, 75);

  // addNodeBST(root, 70);
  // addNodeBST(root, 60);
  // addNodeBST(root, 30);
  // addNodeBST(root, 32);
  // addNodeBST(root, 28);
  // displayBST(root);

  // removeNodeBST(root, 75);
  // displayBST(root);

  // replaceWithSumOfLarger(root);
  // displayBST(root);

  // addNodeBST(root, 61)
  // addNodeBST(root, 65);
  // const lca = lowestCommonAncestor(root, 61, 65);
  // console.log(lca);

  // addNodeBST(root, 30)
  // addNodeBST(root, 40)
  // addNodeBST(root, 60)
  // addNodeBST(root, 70)
  // printInRange(root, 27, 72);

  addNodeBST(root, 30)
  addNodeBST(root, 40)
  addNodeBST(root, 60)
  addNodeBST(root, 70)
  targetSumPairBST(root, 100)
}
main();