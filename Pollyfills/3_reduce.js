Array.prototype.myReduce = function (callback, initialValue) {
  let i = 0;
  let res;
  if (initialValue == undefined) {
    res = this[0];
    i = 1;
  } else {
    res = initialValue;
    i = 0;
  }
  for (i; i < this.length; i++) {
    res = callback(res, this[i]);
  }
  return res;
};
let arr = [1, 2, 3, 4, 5];
let val = arr.myReduce((acc, curr) => {
  return acc + curr;
});
console.log(val);

const main = () => {
  // let sum = 0;
  // let arr = [1, 2, 3, 4];
  // for (let n of arr) {
  //   sum += n;
  // }

  let arr = [1, 2, 3, 4];
  let sum = arr.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
  }, 0);
  console.log(sum);

  // let arr = [1, 2, 3, 4];
  // let val = arr.myReduce((acc, curr) => {
  //   return acc + curr;
  // });
  // console.log(val);

  // let queryString = "cat=meow&duck=quack&dog=woof";
  // const queryObject = queryString.split("&").newReduce((accum, current) => {
  //   const splitString = current.split("=");
  //   accum[splitString[0]] = splitString[1];
  //   return accum;
  // }, {});
  // console.log(queryObject);
};

main();
