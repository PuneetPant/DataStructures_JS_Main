const get = (obj, path) => {
  let ans = defaultValue;

  const getRecursion = (obj, arr, idx) => {
    if (idx == arr.length - 1 && obj != null && obj.hasOwnProperty(arr[idx])) {
      ans = obj[arr[idx]];
      return;
    }

    if (obj != null && obj.hasOwnProperty(arr[idx])) {
      getRecursion(obj[arr[idx]], arr, idx + 1);
    } else {
      return;
    }
  }
  let arr = Array.isArray(path) ? path : path.split(".");
  getRecursion(obj, arr, 0);
  console.log("ans: ", ans)
  return ans;
}


const main = () => {
  const john = {
    profile: {
      name: { firstName: "John", lastName: "Doe" },
      age: 20,
      gender: "Male",
    },
  };
  const jane = {
    profile: {
      age: 19,
      gender: "Female",
    },
  };
  const obj = {
    a: {
      b: {
        c: [1, 2, 3],
      },
    },
  };
  // let a = { b: null };
  // var puneet = {
  //   profile: {
  //     name: { firstName: "John", lastName: "Doe" },
  //     age: 20,
  //     gender: "Male",
  //     b: [1, 2, 3],
  //   },
  // };
  // console.log(a.hasOwnProperty("b"));
  get(john, "profile.name.firstName");
  // get(john, "profile.gender");
  // get(obj, "a.b.c.0");
  // get(jane, "profile.name.firstName");
  // get(a, "b");
  // get(puneet, "profile.b.2");

  // get({ a: { b: 2, c: { foo: 2 } } }, 'a.c')

  // get({ a: { b: 2 }, c: 1 }, 'a.b');
  get({ a: { b: 2 }, c: 1 }, 'a.c')
  // get({ a: { b: 2, c: { foo: 2 } } }, 'a.c')
};

main();