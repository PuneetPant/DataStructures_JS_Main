
var MyQueue = function () {
  // only use functions push() and pop()
  this.one = [];
  this.two = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
  this.one.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function () {
  while (this.one.length > 1) {
    this.two.push(this.one.pop());
  }
  let val = this.one.pop();
  while (this.two.length > 0) {
    this.one.push(this.two.pop());
  }
  return val;
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function () {
  while (this.one.length > 1) {
    this.two.push(this.one.pop());
  }
  let val = this.one.pop();
  this.two.push(val);
  while (this.two.length > 0) {
    this.one.push(this.two.pop());
  }
  return val;
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
  return this.one.length == 0 ? true : false;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/