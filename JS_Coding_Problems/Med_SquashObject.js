// Pre Requisite
let obj = { a: 5 };
let val = Object.keys(obj["a"]);
console.log(val); //[]
let arr = [1, 2, 3];
let value = Object.keys(arr);
console.log(value); //["0", "1", "2"]

const squashObject = (obj) => {
  let ans = {};
  const convert = (obj, ansSoFar) => {
    let arr = obj == null || obj == undefined ? [] : Object.keys(obj);
    if (arr.length == 0 || typeof obj == "string") {
      ansSoFar = ansSoFar.slice(0, ansSoFar.length - 1);
      ans[ansSoFar] = obj;
      return;
    }

    arr.forEach((key) => {
      convert(obj[key], ansSoFar + key + ".");
    });
  };

  convert(obj, "");
  console.log(ans);
  return ans;
};

const object = {
  a: {
    b: [1, 2, 3],
    c: ["foo"],
  },
};
squashObject(object); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }

// const object = {
//   a: { b: null, c: undefined },
// };
// squashObject(object); // { 'a.b': null, 'a.c': undefined }

// const object = {
//   a: 5,
//   b: 6,
//   c: {
//     f: 9,
//     g: {
//       m: 17,
//       n: 3,
//     },
//   },
// };
// squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
