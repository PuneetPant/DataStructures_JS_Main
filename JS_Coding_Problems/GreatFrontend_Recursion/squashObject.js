const squashObject = (object) => {
  let ans = {};
  const helper = (obj, keySoFar) => {
    Object.keys(obj).forEach((key) => {
      let updatedKey = keySoFar === "" ? key : `${keySoFar}.${key}`;
      if (typeof obj[key] !== "object") {
        ans[updatedKey] = obj[key];
      } else {
        helper(obj[key], updatedKey);
      }
    });
  };
  helper(object, "");
  console.log(ans);
};

// const object = {
//   a: 5,
//   b: 6,
//   c: {
//     f: 9,
//     g: {
//       m: {
//         k: 'p'
//       },
//       n: 3,
//     },
//   },
// };
const object = {
  a: { b: null, c: undefined },
};
squashObject(object); // { 'a.b': null, 'a.c': undefined }

// squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
