
var MyStack = function () {
  //. remember to use only push() and shift()
  this.one = [];
  this.two = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function (x) {
  while (this.one.length > 0) {
    this.two.push(this.one.shift());
  }
  this.one.push(x);
  while (this.two.length > 0) {
    this.one.push(this.two.shift());
  }
};

/**
* @return {number}
*/
MyStack.prototype.pop = function () {
  return this.one.shift();
};

/**
* @return {number}
*/
MyStack.prototype.top = function () {
  return this.one[0];
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function () {
  return this.one.length == 0 ? true : false;
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/