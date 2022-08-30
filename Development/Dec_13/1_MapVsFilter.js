let arr = [1, 2, 3, 4, 5, 6];

let mres = arr.map(val => val%2 == 1);
let fres = arr.filter(val => val%2 == 1);

console.log(mres); 
console.log(fres); 
// t f t f t f
// 1 3 5