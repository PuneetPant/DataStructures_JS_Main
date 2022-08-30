class Node {
  constructor(data) {
    this.data = data;
    this.arr = [];
  }
}

const main = () => {
  let arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1];
  let stack = [];
  let root;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] != -1) {
      let temp = new Node(arr[i]);
      if (stack.length == 0) {
        root = temp;
      } else {
        let getNode = stack[stack.length - 1];
        getNode.arr.push(temp);
      }
      stack.push(temp);
    } else {
      stack.pop();
    }
  }

  console.log(root);

};
main();