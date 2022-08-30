class MinStackClass {
  constructor() {
    this.st = [];
    this.min;
  }

  push(val) {
    if (this.st.length == 0) {
      this.st.push(val)
      this.min = val;
    }
    else if (this.st.length > 0 && this.st[this.st.length - 1] > val) {
      this.st.push((2 * val - this.min))
      this.min = val;
    } else {
      this.st.push(val)
    }

  }
  pop() {
    if (this.st.length == 0) {
      console.log('stack underflow')
      return -1
    } else {
      if (this.st[this.st.length - 1] < this.min) {
        // think here for decrypting
        let val = this.min;
        this.min = 2 * this.min - this.st[this.st.length - 1];
        return val
      } else {
        return this.st.pop();
      }
    }
  }
  top() {
    if (this.st.length == 0) {
      console.log('stack is empty')
    } else {
      if (this.min > this.st[this.st.length - 1]) {
        return this.min
      } else {
        return this.st[this.st.length - 1]
      }
    }
  }
  getMin() {
    console.log(this.min)
    return this.min;
  }
  display() {
    console.log(this.st)
  }
}

let minStack = new MinStackClass();
minStack.push(10)
minStack.push(20)
minStack.push(5)
minStack.display()
minStack.getMin()
console.log(minStack.top())
// minStack.pop();
// minStack.display()
// minStack.pop()