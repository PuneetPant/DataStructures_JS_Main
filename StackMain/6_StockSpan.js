
class Pair {
  constructor(val, idx) {
    this.val = val;
    this.idx = idx;
  }
}
let counter = 0;
const stockSpan = (arr) => {

  let ans = new Array(arr.length).fill(0);
  let stack = [];
  // let stack = this.st;
  console.log(arr)
  stack.push(new Pair(arr[0], 0));
  ans[0] = 1;
  counter++;
  for (let i = 1; i < arr.length; i++) {

    if (stack[stack.length - 1].val > arr[i]) {
      ans[i] = i - stack[stack.length - 1].idx;
    } else {
      // Remember to check for stack length here and less than equal to (<=) check in the second condition
      while (stack.length > 0 && stack[stack.length - 1].val <= arr[i]) {
        stack.pop();
      }

      ans[i] = stack.length == 0 ? i : i - stack[stack.length - 1].idx;
    }

    stack.push(new Pair(arr[i], i))

  }
  console.log(ans)
}

stockSpan([100, 80, 60, 70, 60, 75, 85])


