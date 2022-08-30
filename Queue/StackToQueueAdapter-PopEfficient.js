
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
  while (this.one.length > 0) {
    this.two.push(this.one.pop());
  }
  this.one.push(x);
  while (this.two.length > 0) {
    this.one.push(this.two.pop());
  }
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function () {
  return this.one.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function () {
  return this.one[this.one.length - 1];
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