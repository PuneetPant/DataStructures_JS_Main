Function.prototype.myBind = function (context, ...args) {
  console.log(args)
  let fn = this;
  return function (...args2) {
    fn.apply(context, [...args, ...args2]);
  }
}

Function.prototype.myCall = function (context, ...args) {
  let fn = this;
  fn.apply(context, args)
}

Function.prototype.myApply = function (context, args) {
  console.log(args)
  let fn = this;
  fn.call(context, ...args)
}

let getName = function (place, salary, profession) {
  console.log(this.first + " " + this.last, place, salary, profession)
}
const puneet = {
  first: 'Puneet',
  last: 'Pant',
}
const bobby = {
  first: "Bobby",
  last: "Badass"
}
Function.prototype.myBindPrac = function (context, ...args) {
  let fn = this;
  return function (...args2) {
    return fn.apply(context, [...args, args2])
  }
}

let funcBind = getName.bind(puneet);
let funcMyBind = getName.myBind(bobby, "Noida", "180");
let funcMyBindPrac = getName.myBindPrac(bobby, "gurugram", "70");
console.log("---------> Bind <-----------")
funcBind();
funcMyBind("Software Developer")
funcMyBindPrac();
// console.log("---------> Call <-----------")
// getName.call(puneet, "Delhi", "200")
// getName.myCall(puneet, "Delhi", "200")
// console.log("---------> Apply <-----------")
// getName.apply(bobby, ["Jammu", "800", "Operations"])
// getName.myApply(bobby, ["Jammu", "800", "Operations"])