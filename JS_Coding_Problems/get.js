function get(object, path, defaultValue) {
  const getValue = (object, path, idx) => {
    if (idx == path.length) {
      // console.log("Here", object);
      defaultValue = object;
      return;
    }

    let level = path[idx];
    // console.log("Print: ", object[level]);
    if (object.hasOwnProperty(level)) {
      getValue(object[level], path, idx + 1);
    } else {
      return;
    }
  };
  getValue(object, path.split("."), 0);
  // console.log("Final Ans : ", defaultValue);
  return defaultValue;
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
  let a = { b: null };
  var puneet = {
    profile: {
      name: { firstName: "John", lastName: "Doe" },
      age: 20,
      gender: "Male",
      b: [1, 2, 3],
    },
  };
  // console.log(a.hasOwnProperty("b"));
  // get(john, "profile.name.firstName");
  // get(john, "profile.gender");
  // get(obj, "a.b.c.0");
  // get(jane, "profile.name.firstName");
  // get(a, "b");
  // get(puneet, "profile.b.2");
};

main();
