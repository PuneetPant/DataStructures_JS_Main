let pp = { a: 1, b: 2, e: 5 };
let hr = { h: 0, a: 2 };

Object.prototype.myAssign = function (target, src) {
  Object.keys(src).forEach(key => {
    target[key] = src[key];
  });
  return target;
}


let pphr = Object.assign(pp, hr);
console.log(pphr)

pphr = Object.myAssign(pp, hr);
console.log(pphr)