const duplicateBrackets = (str) => {
  let stack = [];
  let ansFlag = false;

  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);

    if (ch != ")") {
      stack.push(ch);
    } else {
      if (stack[stack.length - 1] == "(") {
        ansFlag = true;
      } else {
        while (stack.length > 0) {
          if (stack[stack.length - 1] == "(") {
            stack.pop();
            break;
          }
          stack.pop();
        }
      }
    }
  }
  return ansFlag;
};

const balancedBrackets = (str) => {
  let ansFlag = true;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);

    if (ch == "(" || ch == "[" || ch == "{") {
      stack.push(ch);
    } else if (ch == ")") {
      if (stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        ansFlag = false;
        break;
      }
    } else if (ch == "]") {
      if (stack[stack.length - 1] == "[") {
        stack.pop();
      } else {
        ansFlag = false;
        break;
      }
    } else if (ch == "}") {
      if (stack[stack.length - 1] == "{") {
        stack.pop();
      } else {
        ansFlag = false;
        break;
      }
    }
  }
  if (stack.length > 0) {
    ansFlag = false;
  }
  return ansFlag;
};

const nextGreaterToRight = (arr) => {
  // const arr = [2, 5, 9, 3, 1, 12, 6, 2, 7];
  let stack = [];
  let ans = [];

  ans[arr.length - 1] = -1;
  stack.push(arr[arr.length - 1]);

  for (let i = arr.length - 2; i >= 0; i--) {
    while (stack.length > 0 && arr[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }

  console.log("ans: ", ans);
};

const stockSpan = (arr) => {
  let stack = [];
  let ans = [];

  class Pair {
    constructor(val, idx) {
      this.val = val;
      this.idx = idx;
    }
  }

  stack.push(new Pair(arr[0], 0));
  ans[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] >= stack[stack.length - 1].val) {
      stack.pop();
    }

    if (stack.length == 0) {
      ans[i] = i + 1;
    } else {
      let topPair = stack[stack.length - 1];
      ans[i] = i - topPair.idx;
    }

    stack.push(new Pair(arr[i], i));
  }
  console.log(ans);
};

const largestAreaHistogram = (arr) => {
  let stack = [];
  let rb = [];

  class Pair {
    constructor(val, idx) {
      this.val = val;
      this.idx = idx;
    }
  }
  rb[arr.length - 1] = arr.length;
  stack.push(new Pair(arr[arr.length - 1], arr.length - 1));

  for (let i = arr.length - 2; i >= 0; i--) {
    while (stack.length > 0 && arr[i] <= stack[stack.length - 1].val) {
      stack.pop();
    }
    if (stack.length == 0) {
      rb[i] = arr.length;
    } else {
      rb[i] = stack[stack.length - 1].idx;
    }
    stack.push(new Pair(arr[i], i));
  }
  console.log(rb);

  let lb = [];
  stack = [];
  lb[0] = -1;
  stack.push(new Pair(arr[0], 0));

  for (let i = 1; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] <= stack[stack.length - 1].val) {
      stack.pop();
    }

    if (stack.length == 0) {
      lb[i] = -1;
    } else {
      lb[i] = stack[stack.length - 1].idx;
    }
    stack.push(new Pair(arr[i], i));
  }
  console.log(lb);

  let width = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < rb.length; i++) {
    let newWidth = (rb[i] - lb[i] - 1) * arr[i];
    if (newWidth > width) {
      width = newWidth;
    }
  }
  return width;
};

const main = () => {
  // const str = '((a+b)+(c+d))';
  // // const str = '(a+b)+((c+d))';
  // const ans = duplicateBrackets(str);
  // console.log('ans: ', ans);

  // const str = '[(a+b)+{(c+d)+(e/f)}';
  // const ans = balancedBrackets(str);
  // console.log('ans: ', ans);

  const arr = [2, 5, 9, 3, 1, 12, 6, 2, 7];
  nextGreaterToRight(arr);

  // const arr = [2, 5, 9, 3, 1, 12, 6, 8, 7];
  // stockSpan(arr);

  // const arr = [6, 2, 5, 4, 5, 1, 6]
  // const ans = largestAreaHistogram(arr)
  // console.log('ans: ', ans);
};

main();
