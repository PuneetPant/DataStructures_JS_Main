// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res([1, 2, 3, 5])
//   }, 2000)
// })
// promise.then((val) => {
//   console.log(val)
// }).catch((err) => {
//   console.log(err)
// })
// console.log(promise)

import fetch from "node-fetch";

// const getData = async () => {
//   try {
//     let resp = await fetch('https://jsonplaceholder.typicode.com/todos');
//     let data = await resp.json();
//     return data
//   } catch (e) {
//     return e;
//   }
// }

// let wrapper = async () => {
//   let data = await getData();
//   console.log(data)
// }
// wrapper();

// const getUsers = async () => {

//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let user = await response.json();
//     return user

//   } catch (err) {
//     // catches errors both in fetch and response.json
//     console.log(err);
//   }
// }
// let ans = await getUsers();
// console.log("ans: ", ans)

const PromiseReturnFunction = (item, delay) => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(item)
    }, delay)
  })
  return promise;
}

let arr = [PromiseReturnFunction("a", 3000), PromiseReturnFunction("b", 1000),
PromiseReturnFunction("c", 2000)];
const parallel = async () => {
  try {
    let resp = await Promise.all(arr);
    return resp;
  } catch (e) {
    return e;
  }
}

let data = await parallel();
console.log(data)