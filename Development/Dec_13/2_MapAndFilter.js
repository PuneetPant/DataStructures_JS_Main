const products = [
  { name: 'T-shirt', price: 25 },
  { name: 'Headphones', price: 125 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 200 },
]
// return name of all products in uppercase which have price >= 100

// let ans = products.filter(val => {
//   return val.price >= 100;
// })
// console.log(ans)

let filteredProducts = products.filter(val => val.price >= 100).map(val => val.name.toUpperCase());
console.log(filteredProducts)

let fprds2 = products.filter(val => {
  return val.price >= 100
}).map(val => {
  return val.name.toUpperCase()
})
console.log(fprds2)

// all >= 100 in uppercase oterwise in lowercase
let ans = products.map(val => {
  return val.price >= 100 ? val.name.toUpperCase() : val.name.toLowerCase();
})
console.log(ans);

// Another Question
// return cubes of values whose square <= 1000
let arr = [5, 83, 24, 67, 71, 12, 24, 7];

let farr = arr.filter(val => Math.pow(val,2) <= 1000).map(val => Math.pow(val,3));
console.log(farr)

// cubes of numbers whose cubes are less than 10000

let carr = arr.filter(val => Math.pow(val, 3) <= 10000).map(val => Math.pow(val,3))