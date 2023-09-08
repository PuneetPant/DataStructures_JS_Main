

// Only, if it is a nested object
const squashObject = (obj) => {

  let ans = {};

  const convert = (obj, ansSoFar) => {
    // for null obj
    if (!obj) {
      ans[ansSoFar.substr(0, ansSoFar.length - 1)] = obj;
      return;
    }
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== "object") {
        // for blank keys
        let str = (ansSoFar + key).toString()
        if (key.length === 0) {
          str = str.substr(0, str.length - 1)
        }
        ans[str] = obj[key];
        return;
      }
      convert(obj[key], ansSoFar + `${key}.`)
    })
  }


  convert(obj, "")
  console.log("ans: ", ans)
}

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

// const object = { a: { b: [1, 2, 3], c: ['foo'] } };
// squashObject(object); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }

let object = {
  foo: {
    '': {
      '': 1,
      bar: 2,
    },
    a: 1,
  },
}
squashObject(object)
