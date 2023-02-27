
Function.prototype.myBind = function (context, ...args) {
  let fn = this;
  console.log(fn)
  return function (...args2) {
    fn.apply(context, [...args, ...args2])
  }
}
const main = () => {
  let name = {
    firstName: 'Puneet',
    lastName: 'Pant'
  }
  const printName = function (hometown, country, locality) {
    console.log(this.firstName + " " + this.lastName + ", " + hometown + ", " + country + ", " + locality)
  }
  // let printMyName = printName.bind(name);
  // printMyName();
  let printMyName2 = printName.myBind(name, "Delhi", "India");
  printMyName2("IP Extension")
}
main();