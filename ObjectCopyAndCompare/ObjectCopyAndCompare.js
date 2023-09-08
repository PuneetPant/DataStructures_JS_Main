let obj = {
  a: 1,
  b: 2,
  c: {
    pp: 3
  }
}
// Copy an object
let obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2)
// Compare Objects
console.log(obj.toString() == obj2.toString());