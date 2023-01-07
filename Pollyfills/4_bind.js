let obj = {
  val: 42,
  getVal: function () {
    return this.val;
  },
};

// console.log(obj.getVal());
// let getFunc = obj.getVal;
// console.log(getFunc());

// let getFuncBind = obj.getVal.bind(obj);
// console.log(getFuncBind());
Function.prototype.myBind = function (ctx) {
  // console.log(this);
  // console.log(ctx);
  const func = this;
  return function () {
    return func.call(ctx);
  };
};
let getFuncBind = obj.getVal.myBind(obj);
console.log(getFuncBind());
