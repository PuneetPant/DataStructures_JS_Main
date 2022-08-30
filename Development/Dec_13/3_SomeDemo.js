let arr = [
  {name : 'A' , age: 14, gender : 'M'},
  {name : 'b' , age: 34, gender : 'M'},
  {name : 'c' , age: 34, gender : 'F'},
  {name : 'd' , age: 44, gender : 'F'},
  {name : 'e' , age: 44, gender : 'M'},
  {name : 'f' , age: 28, gender : 'F'},
  {name : 'g' , age: 36, gender : 'M'}
]

// 1)some only returns true ans false

// 2)some takes a callback and returns true even if one of
// the value returns true otherwise if all values return false
// then it returns false

// let isThereAnyValidCandidate = arr.some(val => {
//   if(val.gender === 'F' && val.age > 50){
//     return true
//   } else{
//     return false
//   }
// })
// console.log(isThereAnyValidCandidate);

//Polyfill for some

Array.prototype.mySome = (cb) => {
  console.log(this);
  console.log(cb)
  let arr = this;
  
}
let ans = arr.mySome(val => {

});