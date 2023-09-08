Array.prototype.newReduce = function (fn, initialValue = 0) {
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    console.log(result);
    result = fn(result, this[i]);
  }
  return result;
};

Array.prototype.myReducerPrac = function (fn, initialValue = 0) {
  let arr = this;
  let res = initialValue;
  for (let i = 0; i < arr.length; i++) {
    res = fn(res, arr[i])
  }
  return res;
}

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
