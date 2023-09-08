class pp {
  constructor(val = 0) {
    this.val = val
  }
  add(num) {
    this.val += num;
    return this;
  }
  subtract(num) {
    this.val -= num;
    return this;
  }
}

let l = new pp(5);
let val = l.add(6).subtract(1);
console.log(val)
