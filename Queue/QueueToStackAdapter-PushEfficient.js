
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
  this.one.push(x)
};

/**
* @return {number}
*/
MyStack.prototype.pop = function () {
  while (this.one.length > 1) {
    this.two.push(this.one.shift());
  }
  let ans = this.one.shift();
  while (this.two.length > 0) {
    this.one.push(this.two.shift());
  }
  return ans;
};

/**
* @return {number}
*/
MyStack.prototype.top = function () {

  while (this.one.length > 1) {
    this.two.push(this.one.shift());
  }
  let ans = this.one.shift();
  this.two.push(ans);
  while (this.two.length > 0) {
    this.one.push(this.two.shift());
  }
  return ans;
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