

class Stack {
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  push(val) {
    this.arr[this.size] = val;
    this.size++;
  }
  pop() {
    if (this.size == 0) {
      return null
    }
    let val = this.arr[this.size];
    this.size--;
    return val;
  }

  peek() {
    if (this.size == 0) {
      return null;
    }
    return this.arr[this.size];
  }

  empty() {
    this.size == 0 ? true : false;
  }

  size() {
    return this.size;
  }

}


(() => {
  let st = new Stack();
  st.push(5)
  st.push(6)
  console.log(st)
})()

