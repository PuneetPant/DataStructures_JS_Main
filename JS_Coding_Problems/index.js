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
Array.prototype.myFilter = function (callbackFn, thisArg) {
  // console.log(callbackFn, thisArg);
  let arr = [...this];
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i])) {
      ans.push(arr[i]);
    }
  }
  console.log(ans);
  return ans;
};
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

  // [1, 2, 3, 4].myFilter((value) => value % 2 == 0);

  //  Contact Form

  //   <!DOCTYPE html>
  // <html>
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta
  //       name="viewport"
  //       content="width=device-width, initial-scale=1.0" />
  //   </head>
  //   <body>
  //     <form class="wrapper"
  //     action="https://www.greatfrontend.com/api/questions/contact-form"
  //       method="post">
  //       <input name="name" type="text" placeholder="Name" class="field name"/>
  //       <input name="email" type="email" placeholder="email" class="field email"/>
  //       <textarea name="message" placeholder="type your message" class="field message"></textarea>
  //       <input type="submit" value="Sent" />
  //     </form>
  //     <script src="src/index.js"></script>
  //   </body>
  // </html>
};

main();
