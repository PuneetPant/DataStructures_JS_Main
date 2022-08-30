class TwoStack {
  constructor(size) {
    this.data = new Array();
    this.size = size;
    this.tos1 = -1;
    this.tos2 = this.size;
  }

  size1() {
    return this.tos1 + 1;
  }
  size2() {
    return this.size - this.tos2;
  }
  push1(val) {
    if (this.tos2 == this.tos1 + 1) {
      console.log('Stack1 is full')
      return
    } else {
      this.tos1++;
      this.data[this.tos1] = val;
    }
  }

  push2(val) {
    if (this.tos2 == this.tos1 + 1) {
      console.log('Stack2 is full')
    } else {
      this.tos2--;
      this.data[this.tos2] = val;
    }
  }
  pop1() {
    if (this.tos1 == -1) {
      console.log('Stack1 in empty')
      return -1
    } else {
      let val = this.data[this.tos1];
      this.tos1--;
      return val;
    }
  }
  pop2() {
    if (this.tos2 == this.size) {
      console.log('Stack2 in empty')
      return -1
    } else {
      let val = this.data[this.tos2];
      this.tos2++;
      return val;
    }
  }
  top1() {
    if (this.tos1 == -1) {
      console.log('Stack1 in empty')
      return -1
    } else {
      let val = this.data[this.tos1];
      return val;
    }
  }
  top2() {
    if (this.tos2 == this.size) {
      console.log('Stack2 in empty')
      return -1
    } else {
      let val = this.data[this.tos2];
      return val;
    }
  }
}